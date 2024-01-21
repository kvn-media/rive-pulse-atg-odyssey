// src/utils/api.js
const apiBaseUrl = 'https://api.example.com';

const api = {
  get: async (endpoint) => {
    const response = await fetch(`${apiBaseUrl}/${endpoint}`);
    return response.json();
  },

  post: async (endpoint, data) => {
    const response = await fetch(`${apiBaseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Add more methods as needed (e.g., put, delete)
};

export default api;