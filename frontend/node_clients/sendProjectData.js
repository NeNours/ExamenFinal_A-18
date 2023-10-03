const axios = require('axios');

class ProjectDataSender {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async sendProjectData(projectData) {
    try {
      const response = await this.api.post('/projects', projectData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'envoi des données du projet:", error);
      throw error;
    }
  }
}

module.exports = ProjectDataSender;
