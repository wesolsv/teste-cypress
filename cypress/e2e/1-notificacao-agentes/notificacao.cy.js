describe('Criar notificacao para agentes', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login(Cypress.env('userName'), Cypress.env('password'));
    })

    it('acessar-notificacao-agentes', () =>{
        cy.get('#side_agentes').click();
        cy.get('#side_agente_notificacoes').click();
        cy.url().should('eq', 'https://sacnew.ascbrazil.com.br/agente-notificacoes');
        cy.contains('h1', ' Notificações de agente').should('be.visible');
    })

    it('criar-notificacao-agentes', () =>{
        cy.get('#side_agentes').click();
        cy.get('#side_agente_notificacoes').click();
        cy.contains('h1', ' Notificações de agente').should('be.visible');
        cy.get('.btn-add-new').click();
        cy.get('#nom_msg').type('Mensagem de teste inclusa');
        cy.contains('button', 'Salvar').click();
        cy.contains('#tblBody', 'Mensagem de teste inclusa').should('be.visible');
    })

})