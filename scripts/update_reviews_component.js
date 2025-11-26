const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const FORMATTED_REVIEWS_PATH = path.join(__dirname, 'formatted_reviews.json');
const COMPONENT_PATH = path.join(__dirname, '..', 'src', 'components', 'GoogleReviews.tsx');

// Fonction pour lire le fichier des avis formatés
function readFormattedReviews() {
  try {
    const data = fs.readFileSync(FORMATTED_REVIEWS_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erreur lors de la lecture des avis formatés:', error);
    return null;
  }
}

// Fonction pour lire le composant React
function readComponent() {
  try {
    return fs.readFileSync(COMPONENT_PATH, 'utf8');
  } catch (error) {
    console.error('Erreur lors de la lecture du composant React:', error);
    return null;
  }
}

// Fonction pour mettre à jour le composant React avec les avis scrapés
function updateComponent(componentContent, reviews) {
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
    /const mockReviews = \[([\s\S]*?)\]/,
    `const mockReviews = [\n${mockReviewsString}\n    ]`
  );

  return updatedContent;
}

// Fonction pour écrire le composant mis à jour
function writeUpdatedComponent(content) {
  try {
    fs.writeFileSync(COMPONENT_PATH, content, 'utf8');
    console.log('Composant React mis à jour avec succès!');
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'écriture du composant mis à jour:', error);
    return false;
  }
}

// Fonction principale
function main() {
  // Lire les avis formatés
  const reviews = readFormattedReviews();
  if (!reviews) {
    console.error('Impossible de continuer sans les avis formatés.');
    return;
  }

  // Lire le composant React
  const componentContent = readComponent();
  if (!componentContent) {
    console.error('Impossible de continuer sans le contenu du composant.');
    return;
  }

  // Mettre à jour le composant avec les avis
  const updatedContent = updateComponent(componentContent, reviews);

  // Écrire le composant mis à jour
  writeUpdatedComponent(updatedContent);
}

// Exécuter le script
main();