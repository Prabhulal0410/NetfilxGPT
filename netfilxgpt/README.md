# 🎬 NetflixGPT  

**NetflixGPT** is a **modern AI-powered movie discovery app** built with **React + Vite**. It leverages the **TMDB API** for movie data and **Google Gemini AI** for intelligent, natural-language recommendations.  

Browse trending movies, explore curated lists, and search effortlessly within a **Netflix-style responsive interface**. Features include **multi-language support**, **secure Firebase authentication**, and **Redux-powered state management**, delivering a smooth and personalized user experience across devices.  

---

[![React](https://img.shields.io/badge/React-19.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![Vite](https://img.shields.io/badge/Vite-4.0-green?logo=vite)](https://vitejs.dev/) 
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 
[![Firebase](https://img.shields.io/badge/Firebase-Auth-yellow?logo=firebase&logoColor=white)](https://firebase.google.com/) 
[![TMDB](https://img.shields.io/badge/TMDB-API-lightgrey)](https://www.themoviedb.org/) 
[![Google Gemini](https://img.shields.io/badge/Google-Gemini-orange?logo=google)](https://developers.google.com/generative-ai)

---

## 🚀 Features  

- 🔐 **Firebase Authentication** – Secure login with email/password and protected routes.  
- 🎥 **Movie Browsing** – Now Playing, Popular, Top Rated, and Upcoming movies with high-quality posters and responsive layout.  
- 🤖 **AI Movie Search** – Google Gemini AI provides smart recommendations from natural-language queries.  
- 🌐 **Multi-Language Support** – GPT Search placeholder and button text switch dynamically between **English, Hindi, and Spanish**.  
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop.  
- ⚡ **Redux Toolkit State Management** – Efficiently handles user sessions, movie data, and search state.  
- ☁️ **Vercel Deployment** – SPA-friendly routing ensures refresh works on all pages.  

---

## 🌐 Multi-Language Support  

GPT Search UI updates automatically based on the selected language:

```js
const lang = {
  en: { search: "Search", gptSearchPlaceholder: "What would you like to watch today?" },
  hindi: { search: "खोजें", gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?" },
  spanish: { search: "Buscar", gptSearchPlaceholder: "¿Qué te gustaría ver hoy?" },
};
Updates: Search input placeholder & Search button text

To add a new language: add a new object to the lang dictionary

🛠 Tech Stack
Frontend: React 19, Vite, Tailwind CSS

Routing: React Router DOM

State: Redux Toolkit

Authentication: Firebase Auth

APIs: TMDB, Google Gemini

Deployment: Vercel

📦 Installation
bash
Copy code
git clone https://github.com/Prabhulal0410/NetfilxGPT.git
cd netflixgpt
npm install
npm run dev
Create a .env file:

ini
Copy code
VITE_TMDB_TOKEN=your_tmdb_token
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_FIREBASE_API_KEY=your_firebase_key
🔧 Vercel SPA Routing
json
Copy code
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
Ensures page refresh works on /browse and GPT Search pages.

🚀 Deployment
Push repository to GitHub

Connect repo to Vercel

Add environment variables in Vercel project settings

Deploy → automatic updates on GitHub push

📌 Future Enhancements
Individual movie detail pages (overview, cast, trailer)

User watchlist/favorites

Voice-based AI search

Dark/light theme toggle

Loading skeletons for improved UX

## ❤️ Support  

If you enjoy this project and want to show some love, please **star the repository** ⭐  

Made with ❤️ by **Prabhulal Raghwani**
