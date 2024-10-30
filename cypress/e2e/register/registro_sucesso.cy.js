/// <reference types="Cypress" />

describe('Registro de Usuário', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.url().should('include', '/cadastrarusuarios');
  });

  it('Registro de Usuário com sucesso', () => {
    cy.get('input[name="nome"]')
      .type('Ítalo Teste Usuário')
      .should('have.value', 'Ítalo Teste Usuário');
    cy.get('input[name="email"]')
      .type('italo.gundes@outlook.com')
      .should('have.value', 'italo.gundes@outlook.com');
    cy.get('input[name="password"]').type('1234').should('have.value', '1234');
    cy.get('input[name="administrador"]').check().should('be.checked');
  });
});
