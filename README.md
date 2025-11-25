# 📚 BookShelf - Plateforme E-commerce de E-books

BookShelf est une plateforme e-commerce moderne et minimaliste dédiée à la vente de livres numériques. Développée avec **Next.js 14** et **TypeScript**, elle offre une expérience d'achat fluide et sécurisée avec intégration des paiements Lygos.

## ✨ Fonctionnalités

### 🛍️ Expérience d'achat

- **Catalogue complet** : Navigation par catégories (Romance, SF, Développement, etc.)
- **Filtres intelligents** : Recherche par catégories avec interface intuitive
- **Pages détaillées** : Fiches produits complètes avec descriptions et prix
- **Paiement sécurisé** : Intégration Lygos pour des transactions 100% sécurisées
- **Accès instantané** : Téléchargement immédiat après achat

### 🎨 Design & Expérience utilisateur

- **Design minimaliste** : Interface épurée et professionnelle
- **Responsive design** : Optimisé mobile, tablette et desktop
- **Navigation fluide** : Header sticky avec menu mobile
- **Animations subtiles** : Interactions utilisateur raffinées
- **Typographie soignée** : Hiérarchie visuelle claire

### 📱 Pages & Contenu

- **Accueil** : Présentation + sélection de livres
- **Boutique** : Catalogue complet avec filtres
- **Blog** : Articles avec système de déroulement
- **FAQ** : Questions fréquentes interactives
- **Centre d'aide** : Support par catégories
- **Pages légales** : Mentions légales et confidentialité

## 🛠️ Technologies utilisées

### Frontend

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique pour plus de robustesse
- **Tailwind CSS** : Styling utilitaire et design system
- **Lucide React** : Icônes modernes et cohérentes

### Architecture

- **Components modulaires** : Architecture composants réutilisables
- **State management** : React Hooks (useState, useEffect)
- **Routing** : Next.js App Router avec layouts
- **Data management** : Fichier data.ts pour le contenu

## 🚀 Installation et déploiement

### Prérequis

- Node.js 18+
- npm ou yarn

```

## 📁 Structure du projet

```

bookshelf/
├── app/ # Pages Next.js 14 (App Router)
│ ├── about/ # Page À propos
│ ├── blog/ # Blog avec articles
│ ├── books/ # Pages détaillées livres
│ ├── categories/ # Catalogue complet
│ ├── contact/ # Formulaire de contact
│ ├── faq/ # Questions fréquentes
│ ├── help/ # Centre d'aide
│ ├── legal/ # Mentions légales
│ ├── privacy/ # Politique confidentialité
│ └── page.tsx # Page d'accueil
├── components/ # Composants React réutilisables
│ ├── ui/ # Composants d'interface
│ ├── header.tsx # Navigation principale
│ ├── footer.tsx # Pied de page
│ ├── hero.tsx # Section hero accueil
│ ├── ebook-card.tsx # Carte produit livre
│ ├── product-grid.tsx # Grille de produits
│ └── category-filter.tsx # Filtres par catégories
├── lib/ # Utilitaires et données
│ ├── data.ts # Données des livres et catégories
│ └── utils.ts # Fonctions utilitaires
└── public/ # Assets statiques

```


## 📊 Performance

- **Score Lighthouse** : 95+ (Performance, Accessibilité, SEO)
- **Chargement** : Optimisé avec Next.js Image
- **SEO** : Métadonnées complètes et structure sémantique
- **Accessibilité** : ARIA labels et navigation clavier

## 🎯 Roadmap

### Phase 1 (Actuelle)

- [x] Design minimaliste et responsive
- [x] Catalogue et fiches produits
- [x] Intégration Lygos basique
- [x] Pages informatives (FAQ, Blog, etc.)

### Phase 2 (À venir)

- [ ] Système de recherche avancée
- [ ] Panier d'achat et commandes multiples
- [ ] Comptes utilisateurs
- [ ] Bibliothèque personnelle
- [ ] Système de commentaires et notes

### Phase 3 (Futur)

- [ ] Application mobile React Native
- [ ] Système d'abonnement
- [ ] Lecture en ligne intégrée
- [ ] Recommandations personnalisées

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

- **Email** : support@bookshelf.fr

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icônes
- [Lygos](https://lygos.fr/) - Solution de paiement

---

**BookShelf** - _Votre bibliothèque numérique, simplifiée._ 📖✨

Développé avec ❤️ au Cameroun cm
```
