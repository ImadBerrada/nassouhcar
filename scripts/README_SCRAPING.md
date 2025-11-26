# Scraping des avis Google pour Nassoh Car

Ce dossier contient des scripts pour scraper les avis Google de Nassoh Car et les intégrer dans le site web.

## Prérequis

Pour utiliser ces scripts, vous aurez besoin de :

1. Python 3.6 ou supérieur
2. Node.js 14 ou supérieur
3. Chrome ou Chromium installé sur votre machine

## Installation des dépendances

### Dépendances Python

```bash
pip install selenium webdriver-manager
```

## Utilisation

### 1. Scraper les avis Google

Le script `scrape_google_reviews.py` permet de scraper les avis Google depuis l'URL spécifiée et de les sauvegarder dans plusieurs formats.

```bash
python scrape_google_reviews.py
```

Ce script va :
- Ouvrir une fenêtre Chrome et naviguer vers la page d'avis Google
- Scraper les avis (nom de l'auteur, note, date, texte)
- Sauvegarder les avis dans les fichiers suivants :
  - `google_reviews.json` : Format JSON brut
  - `google_reviews.csv` : Format CSV pour analyse
  - `formatted_reviews.json` : Format JSON adapté pour le composant React

### 2. Mettre à jour le composant React

Le script `update_reviews_component.js` permet de mettre à jour automatiquement le composant React avec les avis scrapés.

```bash
node update_reviews_component.js
```

Ce script va :
- Lire les avis formatés depuis `formatted_reviews.json`
- Mettre à jour le composant React `src/components/GoogleReviews.tsx` avec ces avis

## Personnalisation

### Modifier l'URL des avis

Pour modifier l'URL des avis à scraper, ouvrez le fichier `scrape_google_reviews.py` et modifiez la variable `URL` :

```python
# URL de la page d'avis Google à scraper
URL = "https://business.google.com/n/13988150318428577849/profile?fid=12135235015560776507"
```

### Modifier le nombre d'avis à scraper

Par défaut, le script scrape jusqu'à 20 avis. Pour modifier ce nombre, changez le paramètre `max_reviews` dans l'appel à la fonction `scrape_reviews` :

```python
reviews = scrape_reviews(driver, max_reviews=30)  # Changer 30 par le nombre souhaité
```

## Dépannage

### Le script ne trouve pas les avis

Si le script ne parvient pas à trouver les avis, cela peut être dû à :

1. Un changement dans la structure de la page Google
2. Des problèmes de connexion
3. Des mécanismes anti-scraping de Google

Solutions possibles :
- Vérifiez que l'URL est correcte et accessible manuellement
- Désactivez le mode headless pour voir ce qui se passe (décommentez la ligne `chrome_options.add_argument("--headless=new")` dans `setup_driver()`)
- Augmentez les délais d'attente dans le script

### Erreur lors de la mise à jour du composant React

Si le script de mise à jour du composant échoue, vérifiez que :

1. Le fichier `formatted_reviews.json` existe et contient des données valides
2. Le composant React n'a pas été modifié manuellement d'une manière qui change sa structure

## Notes importantes

- Le scraping des sites web peut être contre les conditions d'utilisation de Google. Utilisez ces scripts à vos propres risques et uniquement pour vos propres données.
- Les scripts peuvent nécessiter des ajustements si Google modifie la structure de sa page d'avis.
- Il est recommandé d'exécuter ces scripts périodiquement (par exemple, une fois par mois) pour maintenir les avis à jour.