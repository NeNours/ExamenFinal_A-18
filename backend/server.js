const express = require('express');
const cors = require('cors')
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(express.json());


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'gr007,,',
    database: 'ProjetDB'
};

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
    if (error) throw error;
    console.log('Connected to the database');
});

app.get('/projects/:id', (req, res) => {
    const sql = `SELECT * FROM projets WHERE code_projet = ?`;
    connection.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.error('Erreur de récupération', err);
            return res.status(500).send('Erreur Serveur');
        }
        
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('Project Not Found');
        }
    });
});

app.get('/projects', (req, res) => {
    const sql = `SELECT * FROM projets`;
    connection.query(sql, [], (err, results) => {
        if (err) {
            console.error('Erreur de récupération', err);
            return res.status(500).send('Erreur Serveur');
        }
        
        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).send('Projects Not Found');
        }
    });
});

app.post('/projects', (req, res) => {
    const newProject = req.body; 
    const sql = `INSERT INTO projets (code_projet, description) VALUES (?, ?)`; 

    connection.query(sql, [newProject.code_projet, newProject.description], (err, result) => { 
        if (err) {
            console.error('Erreur de sauvegarde', err);
            return res.status(500).send('Erreur Serveur');
        }
        
        
        res.status(201).json(newProject);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
