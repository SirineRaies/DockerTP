# Créer l'image basée sur node:lts-alpine
FROM node:lts-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port du serveur
EXPOSE 9000

# Variable d'environnement pour MongoDB
ENV MONGO_URI=mongodb://mongo:27017/mern-app

# Démarrer l'application
CMD ["npm", "start"]

