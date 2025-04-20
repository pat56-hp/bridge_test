# Système de GAB (Guichet Automatique Bancaire)

Projet de test technique simulant un système de GAB permettant à un utilisateur de :

- Se connecter via un numéro de carte + PIN
- Consulter son solde
- Effectuer des dépôts et retraits
- Voir son historique de transactions

## Stack technique

- **Backend** : Laravel 12
- **Frontend** : React.js avec Inertia.js
- **Base de données** : SQLite
- **Style** : Tailwind CSS

## Fonctionnalités

- Authentification personnalisée (carte + PIN)
- Middleware de sécurité Laravel
- Validation des formulaires
- Gestion des erreurs (ex : solde insuffisant)
- Transactions persistées

## Données de test

- Carte : `1234567890123456`
- PIN : `1234`

## Installation

```bash
git clone https://github.com/ton-nom-utilisateur/atm-project.git
cd atm-project

cp .env.example .env
touch database/database.sqlite

composer install
php artisan migrate --seed

npm install && npm run dev
php artisan serve
