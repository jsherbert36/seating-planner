module.exports = {
  api: {
    input: './openapi.json', // path in frontend produced by maven copy or manual
    output: {
      mode: 'single',
      target: './src/app/api/generated.ts',
      client: 'fetch', // or 'axios'
      prettier: true,
      override: {
        // keep default mutator; add customizations here if needed
      }
    }
  }
};