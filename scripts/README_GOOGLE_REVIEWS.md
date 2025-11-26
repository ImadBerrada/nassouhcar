# Récupération des avis Google pour Nassoh Car

Ce document explique comment utiliser le script JavaScript pour récupérer les avis Google et les intégrer au composant React de votre site web.

## Prérequis

- Node.js installé sur votre machine
- Les dépendances suivantes installées :
  - puppeteer

## Installation des dépendances

Avant d'exécuter le script, vous devez installer les dépendances nécessaires. Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
npm install puppeteer
```

## Utilisation du script

1. Ouvrez un terminal dans le dossier du projet
2. Exécutez la commande suivante :

```bash
node scripts/fetch_google_reviews.js
```

3. Le script va :
   - Ouvrir un navigateur Chrome contrôlé par Puppeteer
   - Accéder à la page de recherche Google pour Nassoh Car
   - Naviguer vers l'onglet des avis
   - Extraire les avis (par défaut, les 5 premiers)
   - Mettre à jour le composant `GoogleReviews.tsx` avec les avis récupérés

## Personnalisation

### Modifier l'URL source

Si vous souhaitez utiliser une URL différente pour récupérer les avis, modifiez la variable `URL` au début du script :

```javascript
const URL = "votre_nouvelle_url";
```

### Modifier le nombre d'avis à récupérer

Par défaut, le script récupère les 5 premiers avis. Pour modifier ce nombre, changez le paramètre `maxReviews` dans l'appel à la fonction `scrapeReviews` dans la fonction `main` :

```javascript
const reviews = await scrapeReviews(page, 10); // Pour récupérer 10 avis
```

## Dépannage

### Le script ne trouve pas l'onglet des avis

La structure de la page Google peut changer. Si le script ne parvient pas à trouver l'onglet des avis, vous pouvez :

1. Exécuter le script en mode visible (headless: false) pour voir ce qui se passe
2. Ajuster les sélecteurs CSS dans la fonction `scrapeReviews` pour correspondre à la nouvelle structure

### Erreur "Error: Protocol error"

Cette erreur peut survenir si le navigateur se ferme de manière inattendue. Essayez d'augmenter les délais d'attente ou de redémarrer le script.

## Notes importantes

- Le scraping des sites web peut être contre les conditions d'utilisation de Google. Utilisez ce script à vos propres risques et de manière responsable.
- Google peut modifier la structure de sa page à tout moment, ce qui pourrait nécessiter des mises à jour du script.
- Pour une solution plus fiable et conforme, envisagez d'utiliser l'API Google Places officielle.