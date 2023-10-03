const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const SERVER_URL = 'http://host.docker.internal:3000';  

function searchById(id) {
    axios.get(`${SERVER_URL}/projects/${id}`)
        .then(response => {
            console.log("Project Data:", response.data);
            displayMenu();
        })
        .catch(error => {
            if (error.response && error.response.status === 404) {
                console.error("Projet Non trouver.");
            } else {
                console.error("Une erreur est subvenu:", error.message);
            }
            displayMenu();
        });
}

function displayMenu() {
    console.log('================= MENU ==================');
    console.log('1. Trouver par code du projet');
    console.log('2. Exit');
    console.log('========================================');
    rl.question('Please Selectionner une option: ', (answer) => {
        switch(answer) {
            case '1':
                rl.question('Entrer le code du projet: ', (projectId) => {
                    searchById(projectId);
                });
                break;
            case '2':
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Choix invalide, Selectionner un choix valide.');
                displayMenu();
                break;
        }
    });
}

displayMenu();  
