module.exports = {
  api: {
    input: 'http://localhost:8080/api/openapi.json', // fetch from running backend
    output: {
      mode: 'single',
      target: './src/app/services/api.ts',
      client: 'fetch', // or 'axios'
      prettier: true,
      override: {
        // keep default mutator; add customizations here if needed
      }
    }
  }
};