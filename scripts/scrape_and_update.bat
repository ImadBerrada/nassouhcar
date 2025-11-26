@echo off
echo ===================================
echo Scraping des avis Google pour Nassoh Car
echo ===================================
echo.

echo 1. Vérification des dépendances Python...
pip show selenium >nul 2>&1
if %errorlevel% neq 0 (
    echo Installation de selenium...
    pip install selenium
)

pip show webdriver-manager >nul 2>&1
if %errorlevel% neq 0 (
    echo Installation de webdriver-manager...
    pip install webdriver-manager
)

echo.
echo 2. Exécution du script de scraping...
python scrape_google_reviews.py

if not exist formatted_reviews.json (
    echo Erreur: Le fichier formatted_reviews.json n'a pas été créé.
    echo Le scraping a échoué.
    pause
    exit /b 1
)

echo.
echo 3. Mise à jour du composant React...
node update_reviews_component.js

echo.
echo ===================================
echo Processus terminé!
echo Les avis Google ont été scrapés et le composant React a été mis à jour.
echo ===================================

pause