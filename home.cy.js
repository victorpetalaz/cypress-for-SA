describe('Teste E2E - Página Home', () => {
  const urlBase = 'http://127.0.0.1:5500'; 

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Frontend/home.html');
  });

  it('Deve carregar a página com o título correto', () => {
    cy.title().should('eq', 'Home | Connext');

    cy.get('.navbar-brand').should('contain', 'Connext');
  });

  it('Deve exibir as informações principais do projeto', () => {
    cy.get('h1').should('contain', 'Bem-vindo ao Connext');

    cy.contains('h2', 'Sobre o Projeto').should('be.visible');
  });

  it('O botão de Login/Cadastro deve ter o link correto', () => {
    cy.get('a.btn-warning')
      .should('be.visible')
      .and('contain', 'Login / Cadastro')
      .and('have.attr', 'href', 'login.html');
  });
});