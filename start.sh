#!/bin/bash

# Installe les dépendances
composer install --no-interaction --prefer-dist --optimize-autoloader

# Génère la clé d'application
php artisan key:generate

# Exécute les migrations (optionnel, si tu veux)
php artisan migrate --force

# Exécute les seeders (optionnel, si tu veux)
php artisan db:seed --force

# Sert l'application Laravel sur le bon port
php artisan serve --host=0.0.0.0 --port=$PORT
