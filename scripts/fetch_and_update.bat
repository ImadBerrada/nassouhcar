@echo off
echo ===== Script de récupération des avis Google pour Nassoh Car =====
echo.

echo Vérification de l'installation de puppeteer...
cd ..
npm list puppeteer > nul 2>&1
if %errorlevel% neq 0 (
    echo Installation de puppeteer...
    npm install puppeteer
    if %errorlevel% neq 0 (
        echo Erreur lors de l'installation de puppeteer.
        echo Veuillez exécuter manuellement: npm install puppeteer
        pause
        exit /b 1
    )
    echo puppeteer installé avec succès.
) else (
    echo puppeteer est déjà installé.
)

echo.
echo Exécution du script de récupération des avis...
node scripts/fetch_google_reviews.js

if %errorlevel% neq 0 (
    echo.
    echo Une erreur s'est produite lors de l'exécution du script.
    echo Veuillez consulter les messages d'erreur ci-dessus.
) else (
    echo.
    echo Les avis ont été récupérés et le composant a été mis à jour avec succès!
    echo Vous pouvez maintenant redémarrer votre serveur de développement pour voir les changements.
)

echo.
pause