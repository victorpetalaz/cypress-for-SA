describe('Teste E2E - Página de Cadastro', () => {
  const urlBase = 'http://127.0.0.1:5500';

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Frontend/cadastro.html');
  });

  it('Deve preencher todos os campos e clicar em cadastrar', () => {
 
    cy.intercept('POST', '**/*', { statusCode: 200 }).as('envioForm');

    cy.get('#nome').type('Teste Cypress');
    cy.get('#email').type('teste@cypress.com');
    cy.get('#senha').type('SenhaForte123');
    cy.get('#confirmarSenha').type('SenhaForte123');
    cy.get('#formCadastro button[type="submit"]').click();

  });

  it('Validação de HTML5: Não deve aceitar e-mail inválido', () => {
    cy.get('#nome').type('Usuario Erro');
    cy.get('#email').type('emailinvalido.com'); 
    cy.get('#senha').type('12345678');
    cy.get('#confirmarSenha').type('12345678');

    cy.get('#formCadastro button[type="submit"]').click();
    cy.get('#email').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });

  it('Validação de Senha: Deve identificar senhas diferentes', () => {
    cy.get('#nome').type('Usuario Senha Errada');
    cy.get('#email').type('senha@errada.com');
    cy.get('#senha').type('12345678');
    cy.get('#confirmarSenha').type('87654321');
    cy.get('#formCadastro button[type="submit"]').click();
  });

  it('Link "Fazer Login" deve funcionar', () => {
    cy.contains('Fazer Login').should('have.attr', 'href', 'login.html');
  });
});