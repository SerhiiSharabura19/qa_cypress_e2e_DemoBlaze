const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            username: faker.internet.username(),
            email: faker.internet.email(),
            password: 'Aa12345!',
          };
        },
      });
    },
  },
});
