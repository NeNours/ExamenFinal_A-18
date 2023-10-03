# Utilisez une image Node officielle comme image de base
FROM node:16

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/client

# Copiez package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez les autres fichiers du client dans le conteneur
COPY . .

# Commande pour exécuter le client
CMD [ "node", "index.js" ]
