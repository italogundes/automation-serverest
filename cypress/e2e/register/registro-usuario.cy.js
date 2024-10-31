/// <reference types="Cypress" />

describe('Registro de Usuário', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.url().should('include', '/cadastrarusuarios');
  });

  it('Registro de Usuário Administrador com sucesso', () => {
    cy.get('input[name="nome"]')
      .type('Ítalo Teste Usuário')
      .should('have.value', 'Ítalo Teste Usuário');
    cy.get('input[name="email"]')
      .type('italo.gundes@teste.com')
      .should('have.value', 'italo.gundes@teste.com');
    cy.get('input[name="password"]').type('1234').should('have.value', '1234');
    cy.get('input[name="administrador"]').check().should('be.checked');

    cy.contains('button', 'Cadastrar').click();

    cy.get('.alert')
      .should('be.visible')
      .contains('Cadastro realizado com sucesso');

    cy.wait(5000);
    cy.url().should('include', '/home');
  });

  it.only('Registro de Usuário já cadastrado', () => {
    cy.get('input[name="nome"]')
      .type('Ítalo Teste Usuário')
      .should('have.value', 'Ítalo Teste Usuário');
    cy.get('input[name="email"]')
      .type('italo.gundes@teste.com')
      .should('have.value', 'italo.gundes@teste.com');
    cy.get('input[name="password"]').type('1234').should('have.value', '1234');
    cy.get('input[name="administrador"]').check().should('be.checked');

    cy.contains('button', 'Cadastrar').click();

    cy.get('.alert')
      .should('be.visible')
      .contains('Este email já está sendo usado');
  });
});
