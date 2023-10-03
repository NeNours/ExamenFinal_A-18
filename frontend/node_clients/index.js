const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const sendProjectData = require('./sendProjectData');
const getProjectData = require('./getProjectData');

// Route d'accueil pour tester si le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  // Route pour envoyer des données à l'API backend
  app.post('/sendProject', (req, res) => {
    const data = {
      Code_projet: 'PROJ123',
      Description: 'Un exemple de projet'
    };
  
    sendProjectData(data)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  });
  
  // Route pour obtenir des données de l'API backend
  app.get('/getProject/:code', (req, res) => {
    const code = req.params.code;
    
    getProjectData(code)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  });
  app.listen(port, () => {
    console.log(`Client running at http://localhost:${port}/`);
  });
  