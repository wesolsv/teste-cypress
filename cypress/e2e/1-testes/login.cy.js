describe('Criar notificacao para agentes', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('login-credenciais-validas', () =>{
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', 'Home').should('be.visible');
    })

})