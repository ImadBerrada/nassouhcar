const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// URL de la page d'avis Google à scraper
const URL = "https://g.page/r/CTvLYZDzA2moEAE/review";

// Chemin du composant React
const COMPONENT_PATH = path.join(__dirname, '..', 'src', 'components', 'GoogleReviews.tsx');

// Fonction pour configurer le navigateur
async function setupBrowser() {
  const browser = await puppeteer.launch({
    headless: 'new', // Utiliser le nouveau mode headless pour de meilleures performances
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--disable-notifications', '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  return { browser, page };
}

// Fonction pour scraper les avis
async function scrapeReviews(page, maxReviews = 10) {
  console.log("Accès à la page d'avis Google...");
  await page.goto(URL, { waitUntil: 'networkidle2' });
  
  // Attendre que la page se charge et accepter les cookies si nécessaire
  try {
    const cookieButton = await page.$('button[aria-label="Tout accepter"]');
    if (cookieButton) {
      await cookieButton.click();
      // Attendre un peu après avoir cliqué sur le bouton
      await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 5000 }).catch(() => {});
    }
  } catch (error) {
    console.log("Pas de bouton de cookies à accepter ou erreur:", error.message);
  }
  
  // Attendre que la page se charge complètement
  await page.waitForFunction(() => document.readyState === 'complete', { timeout: 10000 }).catch(() => {});
  
  // Essayer de trouver directement les avis sans cliquer sur l'onglet
  try {
    console.log("Recherche directe des avis sur la page...");
    
    // Faire défiler la page pour charger plus de contenu
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    
    // Attendre que le contenu se charge après le défilement
    await page.waitForFunction(() => {
      return new Promise(resolve => setTimeout(resolve, 2000));
    });
    
    // Essayer de trouver et cliquer sur l'onglet des avis si présent
    try {
      const avisLink = await page.$('a[data-tab="reviews"]');
      if (avisLink) {
        await avisLink.click();
        // Attendre que le contenu se charge après le clic
        await page.waitForFunction(() => {
          return new Promise(resolve => setTimeout(resolve, 2000));
        });
      }
    } catch (e) {
      console.log("Pas d'onglet avis trouvé, recherche directe des avis");
    }
  
  } catch (error) {
    console.log("Erreur lors de la recherche des avis:", error.message);
  }
  
  // Extraire les avis avec plusieurs sélecteurs possibles
  const reviews = await page.evaluate((maxReviews) => {
    // Essayer différents sélecteurs pour les avis
    const selectors = [
      'div.WMbnJf', // Sélecteur original
      'div.gws-localreviews__google-review', // Autre sélecteur possible
      'div[data-review-id]', // Autre sélecteur possible
      'div.review-full-text', // Autre sélecteur possible
      'div.jxjCjc' // Autre sélecteur possible pour les avis Google
    ];
    
    let reviewElements = [];
    
    // Essayer chaque sélecteur jusqu'à trouver des avis
    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        reviewElements = elements;
        console.log(`Avis trouvés avec le sélecteur: ${selector}`);
        break;
      }
    }
    
    // Si aucun avis n'est trouvé, essayer une approche plus générique
    if (reviewElements.length === 0) {
      // Chercher tous les éléments qui pourraient contenir des avis
      const possibleReviews = document.querySelectorAll('div[class*="review"], div[class*="avis"]');
      if (possibleReviews.length > 0) {
        reviewElements = possibleReviews;
        console.log('Avis trouvés avec une approche générique');
      }
    }
    
    const extractedReviews = [];
    
    for (let i = 0; i < Math.min(reviewElements.length, maxReviews); i++) {
      const element = reviewElements[i];
      
      // Extraire le nom de l'auteur (essayer plusieurs sélecteurs)
      let authorName = 'Anonyme';
      const authorSelectors = ['.d4r55', '.review-author', '[class*="author"]', 'span[class*="name"]'];
      for (const selector of authorSelectors) {
        const authorElement = element.querySelector(selector);
        if (authorElement && authorElement.textContent.trim()) {
          authorName = authorElement.textContent.trim();
          break;
        }
      }
      
      // Extraire la note (essayer plusieurs approches)
      let rating = 5; // Par défaut
      const ratingSelectors = ['span.kvMYJc', '[class*="rating"]', '[class*="stars"]', '[aria-label*="étoile"]', '[aria-label*="star"]'];
      for (const selector of ratingSelectors) {
        const ratingElement = element.querySelector(selector);
        if (ratingElement) {
          // Essayer d'extraire de l'attribut aria-label
          const ariaLabel = ratingElement.getAttribute('aria-label');
          if (ariaLabel) {
            const ratingMatch = ariaLabel.match(/\d+/);
            if (ratingMatch) {
              rating = parseInt(ratingMatch[0], 10);
              break;
            }
          }
          
          // Essayer de compter les étoiles pleines
          const stars = ratingElement.querySelectorAll('[class*="filled"]');
          if (stars.length > 0) {
            rating = stars.length;
            break;
          }
        }
      }
      
      // Extraire la date (essayer plusieurs sélecteurs)
      let dateText = '';
      const dateSelectors = ['span.rsqaWe', '[class*="date"]', '[class*="time"]'];
      for (const selector of dateSelectors) {
        const dateElement = element.querySelector(selector);
        if (dateElement && dateElement.textContent.trim()) {
          dateText = dateElement.textContent.trim();
          break;
        }
      }
      
      // Extraire le texte de l'avis (essayer plusieurs sélecteurs)
      let reviewText = '';
      const textSelectors = ['span.wiI7pd', '.review-text', '[class*="content"]', '[class*="text"]'];
      for (const selector of textSelectors) {
        const textElement = element.querySelector(selector);
        if (textElement && textElement.textContent.trim()) {
          reviewText = textElement.textContent.trim();
          break;
        }
      }
      
      // Ajouter l'avis à notre liste seulement s'il contient au moins un nom ou un texte
      if (authorName !== 'Anonyme' || reviewText) {
        extractedReviews.push({
          author_name: authorName,
          rating: rating,
          date: dateText,
          text: reviewText
        });
      }
    }
    
    return extractedReviews;
  }, maxReviews);
  
  return reviews;
}

// Fonction pour formater les avis pour le composant React
function formatReviewsForReact(reviews) {
  const now = Math.floor(Date.now() / 1000); // Timestamp actuel en secondes
  
  return reviews.map(review => {
    // Convertir la date relative en timestamp approximatif
    let timestamp = now;
    
    if (review.date) {
      const dateParts = review.date.split(' ');
      if (dateParts.length >= 2 && !isNaN(parseInt(dateParts[0], 10))) {
        const timeAgo = parseInt(dateParts[0], 10);
        const unit = dateParts[1].toLowerCase();
        
        if (unit.includes('jour')) {
          timestamp = now - (timeAgo * 86400);
        } else if (unit.includes('semaine')) {
          timestamp = now - (timeAgo * 604800);
        } else if (unit.includes('mois')) {
          timestamp = now - (timeAgo * 2592000);
        } else if (unit.includes('an') || unit.includes('année')) {
          timestamp = now - (timeAgo * 31536000);
        }
      }
    }
    
    return {
      author_name: review.author_name,
      rating: review.rating,
      text: review.text,
      time: timestamp,
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
    };
  });
}

// Fonction pour mettre à jour le composant React
function updateReactComponent(reviews) {
  try {
    // Lire le contenu actuel du composant
    const componentContent = fs.readFileSync(COMPONENT_PATH, 'utf8');
    
    // Créer la chaîne de caractères pour les avis mockés
    const mockReviewsString = reviews
      .map(review => {
        return `      {
        author_name: '${review.author_name.replace(/'/g, "\\'")}',${
        review.profile_photo_url ? `
        profile_photo_url: '${review.profile_photo_url}',` : ''
      }
        rating: ${review.rating},
        text: '${review.text.replace(/'/g, "\\'")}',${
        review.time ? `
        time: ${review.time},` : ''
      }
      }`;
      })
      .join(',\n');

    // Remplacer les avis mockés dans le composant
    const updatedContent = componentContent.replace(
      /const mockReviews = \[(\s\S)*?\]/,
      `const mockReviews = [\n${mockReviewsString}\n    ]`
    );

    // Écrire le composant mis à jour
    fs.writeFileSync(COMPONENT_PATH, updatedContent, 'utf8');
    console.log('Composant React mis à jour avec succès!');
    return true;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du composant:", error);
    return false;
  }
}

// Fonction principale
async function main() {
  let browser;
  try {
    // Configurer le navigateur
    const { browser: browserInstance, page } = await setupBrowser();
    browser = browserInstance;
    
    // Scraper les avis
    const reviews = await scrapeReviews(page);
    console.log(`${reviews.length} avis récupérés:`, reviews);
    
    // Formater les avis pour le composant React
    const formattedReviews = formatReviewsForReact(reviews);
    
    // Sauvegarder les avis formatés (optionnel)
    fs.writeFileSync('formatted_reviews.json', JSON.stringify(formattedReviews, null, 2), 'utf8');
    console.log('Avis formatés sauvegardés dans formatted_reviews.json');
    
    // Mettre à jour le composant React
    updateReactComponent(formattedReviews);
    
  } catch (error) {
    console.error('Erreur lors du scraping:', error);
  } finally {
    // Fermer le navigateur
    if (browser) {
      await browser.close();
    }
  }
}

// Exécuter le script
main();