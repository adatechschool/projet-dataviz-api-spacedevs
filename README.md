# 🌌 **APOD Explorer**  

Un projet collaboratif permettant aux utilisateurs d'explorer les images astronomiques de la NASA grâce à l'API **APOD (Astronomy Picture of the Day)**.  

## 🎯 **Objectif du Projet**  
Créer une application web interactive où les utilisateurs peuvent :  
- Découvrir l'image astronomique du jour.  
- Effectuer des recherches d'images par date ou plage de dates.  
- Ajouter leurs images préférées à une liste de favoris.  
- Télécharger ou partager les images sélectionnées.  
- Explorer des informations additionnelles sur l'espace, comme la météo martienne ou la position de l'ISS.  

---

## 🚀 **Fonctionnalités**  
- **Image du jour** : Affiche automatiquement l'image du jour fournie par l'API APOD.  
- **Recherche par date** : Permet aux utilisateurs de rechercher une image spécifique en fonction d'une date.  
- **Recherche par plage de dates** : Affiche plusieurs images dans une période sélectionnée.  
- **Favoris** : Fonctionnalité pour sauvegarder des images préférées localement.  
- **Téléchargement** : Les utilisateurs peuvent télécharger les images.  
- **Mode sombre/clair** : Basculer entre les thèmes clair et sombre.  
- **Trivia spatiale** : Ajoute une section de faits amusants sur l'espace.  

---

## 🛠️ **Technologies utilisées**  
- **Frontend** :  
  - HTML, CSS, JavaScript  
  - Framework CSS (optionnel, ex. Tailwind, Bootstrap)  

- **API** :  
  - [NASA APOD API](https://api.nasa.gov/)  
  - API secondaire (ex. Mars Weather API, ISS Location API)  

- **Outils de gestion de projet** :  
  - Git & GitHub  
  - Trello ou Notion (pour le suivi des tâches)  

---

## 📂 **Structure du Projet**  
```plaintext
.
├── index.html          # Page principale
├── styles/             # Dossier pour les fichiers CSS
│   └── main.css
├── scripts/            # Dossier pour les scripts JS
│   ├── api.js          # Gestion des appels API
│   ├── ui.js           # Gestion du DOM
│   └── storage.js      # Gestion du stockage local
├── assets/             # Images ou autres ressources statiques
└── README.md           # Documentation du projet
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/DsrsclQW)
