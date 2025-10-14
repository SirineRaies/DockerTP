# 🐳 Guide Docker Compose - Application Full Stack

Ce projet utilise Docker Compose pour orchestrer une application complète avec Frontend React, Backend Express et MongoDB.

## 📋 Table des matières

- [Architecture](#architecture)
- [Construction et exécution](#construction-et-exécution)
- [Accès aux services](#accès-aux-services)
- [Commandes utiles](#commandes-utiles)
- [Dépannage](#dépannage)

## 🏛️ Architecture

Le projet est composé de trois services principaux :

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Frontend      │────▶│    Backend      │────▶│    MongoDB      │
│   (React)       │     │   (Express)     │     │   (Database)    │
│   Port: 3000    │     │   Port: 9000    │     │   Port: 27017   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```


## ⚙️ Construction et exécution des conteneurs

### Démarrage complet avec build

```bash
docker compose up --build
```

Cette commande :
- 🏗️ Construit les images Docker à partir des Dockerfile
- 🚀 Crée et lance les conteneurs
- 🔄 Orchestre l'ordre de démarrage grâce à `depends_on` (le serveur démarre après MongoDB, le client après le serveur)
- 📊 Affiche les logs en temps réel

### Démarrage en arrière-plan

```bash
docker compose up -d
```

L'option `-d` (detached) exécute les conteneurs en arrière-plan.

## 🌐 Accès aux services

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend (React)** | [http://localhost:3000](http://localhost:3000) | Interface utilisateur |
| **Backend (Express)** | [http://localhost:9000](http://localhost:9000) | API du serveur |
| **MongoDB** | `mongo:27017` (interne) | Base de données NoSQL |

> **Note** : MongoDB n'est accessible que depuis le réseau Docker interne pour des raisons de sécurité.

## 📦 Commandes utiles

### Gestion des services

#### ▶️ Démarrer tous les services
```bash
docker compose up -d
```

#### 🛑 Arrêter les services
```bash
docker compose stop
```

#### 🗑️ Arrêter et supprimer les conteneurs
```bash
docker compose down
```

### Construction et reconstruction

#### 🔁 Reconstruction complète des images
```bash
docker compose up --build
```

#### 🔨 Construire sans démarrer
```bash
docker compose build
```

### Monitoring et logs

#### 📋 Voir les logs de tous les services
```bash
docker compose logs
```

### Inspection et debug

#### 📊 Lister les conteneurs en cours d'exécution
```bash
docker compose ps
```
### Gestion des volumes

#### 📁 Lister les volumes
```bash
docker volume ls
```
## 🔍 Dépannage

### Les conteneurs ne démarrent pas

1. **Vérifier les logs** :
```bash
docker compose logs
```

### Mise à jour des dépendances

Après avoir modifié `package.json` :
```bash
docker compose down
docker compose build --no-cache
docker compose up
```

## 🔒 Bonnes pratiques

- ✅ Utilisez toujours `docker compose down` avant de quitter pour libérer les ressources
- ✅ Committez le `docker-compose.yml` mais pas les fichiers `.env` sensibles
- ✅ Utilisez des volumes pour persister les données MongoDB
- ✅ Documentez les variables d'environnement dans `.env.example`
- ✅ Testez régulièrement avec `--build` pour détecter les problèmes de build

## 📚 Ressources

- [Documentation Docker](https://docs.docker.com/)
- [Documentation Docker Compose](https://docs.docker.com/compose/)
- [Best practices pour Dockerfile](https://docs.docker.com/develop/dev-best-practices/)


## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).
