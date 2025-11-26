import os
import time
import json
import csv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException, NoSuchElementException

# URL de la page d'avis Google à scraper
URL = "https://www.google.com/search?q=nassohcar&oq=nassohcar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyDwgCEC4YDRivARjHARiABDIKCAMQABiABBiiBDIHCAQQABjvBTIHCAUQABjvBTIHCAYQABjvBTIGCAcQRRg80gEIODA5NmowajmoAgawAgHxBfysbQoxWv0B&sourceid=chrome&ie=UTF-8"

# Fonction pour configurer le driver Chrome
def setup_driver():
    chrome_options = Options()
    # Décommentez la ligne suivante pour exécuter en mode headless (sans interface graphique)
    # chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.add_argument("--disable-notifications")
    chrome_options.add_argument("--disable-infobars")
    chrome_options.add_argument("--disable-extensions")
    
    # Initialiser le driver
    driver = webdriver.Chrome(options=chrome_options)
    return driver

# Fonction pour scraper les avis
def scrape_reviews(driver, max_reviews=20):
    print("Accès à la page d'avis Google...")
    driver.get(URL)
    
    # Attendre que la page se charge
    try:
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "div[data-review-id]"))
        )
    except TimeoutException:
        print("Timeout en attendant le chargement de la page. Vérifiez l'URL ou votre connexion.")
        return []
    
    print("Page chargée, début du scraping des avis...")
    
    # Faire défiler pour charger plus d'avis
    reviews_container = driver.find_element(By.CSS_SELECTOR, "div[role='feed']")
    
    # Faire défiler jusqu'à ce qu'on ait assez d'avis ou qu'on ne puisse plus en charger
    reviews = []
    last_count = 0
    scroll_attempts = 0
    max_scroll_attempts = 10
    
    while len(reviews) < max_reviews and scroll_attempts < max_scroll_attempts:
        # Faire défiler vers le bas
        driver.execute_script("arguments[0].scrollTop = arguments[0].scrollHeight", reviews_container)
        time.sleep(2)  # Attendre le chargement des nouveaux avis
        
        # Récupérer tous les avis actuellement chargés
        review_elements = driver.find_elements(By.CSS_SELECTOR, "div[data-review-id]")
        
        # Si aucun nouvel avis n'a été chargé après plusieurs tentatives, arrêter
        if len(review_elements) == last_count:
            scroll_attempts += 1
        else:
            scroll_attempts = 0
            last_count = len(review_elements)
            
        print(f"Avis trouvés: {len(review_elements)}")
    
    # Extraire les données de chaque avis
    review_elements = driver.find_elements(By.CSS_SELECTOR, "div[data-review-id]")
    for element in review_elements[:max_reviews]:
        try:
            # Extraire les informations de l'avis
            author_name = element.find_element(By.CSS_SELECTOR, "div.d4r55").text
            
            # Extraire la note (nombre d'étoiles)
            rating_element = element.find_element(By.CSS_SELECTOR, "span.kvMYJc")
            rating_aria_label = rating_element.get_attribute("aria-label")
            rating = int(rating_aria_label.split()[0])  # Exemple: "4 étoiles" -> 4
            
            # Extraire la date
            date_text = element.find_element(By.CSS_SELECTOR, "span.rsqaWe").text
            
            # Extraire le texte de l'avis
            try:
                review_text = element.find_element(By.CSS_SELECTOR, "span.wiI7pd").text
            except NoSuchElementException:
                review_text = ""  # Certains avis peuvent ne pas avoir de texte
                
            # Ajouter l'avis à notre liste
            reviews.append({
                "author_name": author_name,
                "rating": rating,
                "date": date_text,
                "text": review_text
            })
            
        except Exception as e:
            print(f"Erreur lors de l'extraction d'un avis: {e}")
            continue
    
    return reviews

# Fonction pour sauvegarder les avis au format JSON
def save_to_json(reviews, filename="google_reviews.json"):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(reviews, f, ensure_ascii=False, indent=4)
    print(f"Avis sauvegardés dans {filename}")

# Fonction pour sauvegarder les avis au format CSV
def save_to_csv(reviews, filename="google_reviews.csv"):
    if not reviews:
        print("Aucun avis à sauvegarder.")
        return
        
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=reviews[0].keys())
        writer.writeheader()
        writer.writerows(reviews)
    print(f"Avis sauvegardés dans {filename}")

# Fonction pour mettre à jour le composant React avec les avis scrapés
def update_react_component(reviews):
    # Convertir les avis au format attendu par le composant React
    formatted_reviews = []
    for review in reviews:
        # Convertir la date en timestamp (approximatif)
        # Note: Ceci est une approximation car nous n'avons pas la date exacte
        date_parts = review["date"].split()
        if len(date_parts) >= 1 and date_parts[0].isdigit():
            # Si la date commence par un nombre (ex: "2 semaines")
            time_ago = int(date_parts[0])
            unit = date_parts[1]
            
            now = time.time()
            if "jour" in unit:
                timestamp = now - (time_ago * 86400)
            elif "semaine" in unit:
                timestamp = now - (time_ago * 604800)
            elif "mois" in unit:
                timestamp = now - (time_ago * 2592000)
            elif "an" in unit or "année" in unit:
                timestamp = now - (time_ago * 31536000)
            else:
                timestamp = now
        else:
            # Si nous ne pouvons pas analyser la date, utiliser la date actuelle
            timestamp = time.time()
        
        formatted_reviews.append({
            "author_name": review["author_name"],
            "rating": review["rating"],
            "text": review["text"],
            "time": int(timestamp)
        })
    
    # Sauvegarder les avis formatés pour le composant React
    with open("formatted_reviews.json", 'w', encoding='utf-8') as f:
        json.dump(formatted_reviews, f, ensure_ascii=False, indent=4)
    print("Avis formatés pour le composant React sauvegardés dans formatted_reviews.json")

# Fonction principale
def main():
    driver = setup_driver()
    try:
        reviews = scrape_reviews(driver)
        if reviews:
            save_to_json(reviews)
            save_to_csv(reviews)
            update_react_component(reviews)
            print(f"Scraping terminé avec succès. {len(reviews)} avis récupérés.")
        else:
            print("Aucun avis n'a pu être récupéré.")
    finally:
        driver.quit()

if __name__ == "__main__":
    main()