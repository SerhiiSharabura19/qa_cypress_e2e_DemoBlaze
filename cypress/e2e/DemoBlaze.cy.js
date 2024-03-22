/// <reference types='cypress' />
describe('Demo Blaze Store', () => {
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('/');
  });

  it('should register a new user', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type(user.username);
    cy.get('#sign-password').type(user.password, `{enter}`);
  });

  it('should login the user', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password, `{enter}`);
  });

  it('should login the user', () => {
    cy.contains('[href="prod.html?idp_=1"]', 'Samsung galaxy s6').click();
    cy.get('[onclick="addToCart(1)"]').click();
  });
});
