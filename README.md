# Boaz Study - Application de Gestion de Formations

Application web moderne pour la gestion des souscriptions et formations académiques.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** version **22.x** ou supérieure
- **npm** (inclus avec Node.js)

Pour vérifier votre version de Node.js :
```bash
node --version
```

## 🚀 Installation

1. **Clonez le repository** (si applicable) :
```bash
git clone <url-du-repository>
cd boaz-study
```

2. **Installez les dépendances** :
```bash
npm install
```

## 💻 Démarrage du projet

Pour lancer l'application en mode développement :
```bash
npm run dev
```

L'application sera accessible à l'adresse suivante :

**👉 [http://localhost:5173/](http://localhost:5173/)**

Copiez cette URL et collez-la dans votre navigateur pour accéder à l'application.


## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **React Router** - Navigation
- **Bootstrap 5** - Framework CSS
- **Bootstrap Icons** - Icônes

## 📱 Fonctionnalités principales

- ✅ Authentification utilisateur
- ✅ Gestion des souscriptions
- ✅ Formulaires multi-étapes
- ✅ Tableaux de bord
- ✅ Gestion des documents
- ✅ Interface responsive (mobile/desktop)

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :
```env
VITE_API_URL=https://votre-api.com
VITE_KEYCLOAK_URL=https://votre-keycloak.com/auth
VITE_KEYCLOAK_REALM=votre-realm
VITE_KEYCLOAK_CLIENT_ID=votre-client-id
```

## 📂 Structure du projet
```
boaz-study/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── layout/      # Header, Sidebar, etc.
│   │   ├── forms/       # Formulaires multi-étapes
│   │   └── stepper/     # Composants de progression
│   ├── pages/           # Pages de l'application
│   ├── hooks/           # Hooks personnalisés
│   ├── config/          # Configuration (Keycloak, Axios)
│   ├── assets/          # Images, fonts, etc.
│   └── App.tsx          # Composant principal
├── public/              # Fichiers statiques
└── package.json         # Dépendances du projet
```

## 🌐 Navigation

- `/` - Page d'accueil
- `/login` - Page de connexion
- `/avi` - Parcours de souscription
- `/subscriptions` - Liste des souscriptions
- `/dashboard` - Tableau de bord
- `/settings` - Paramètres

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 📧 Contact

Pour toute question ou suggestion, contactez-nous à : contact@boazstudy.com

---

**Développé avec ❤️ par l'équipe KAMMEGNE DJOUM ALEX**