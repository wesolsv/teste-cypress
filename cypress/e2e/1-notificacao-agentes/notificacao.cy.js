describe('Criar notificacao para agentes', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login(Cypress.env('userName'), Cypress.env('password'));
    })

    it('acessar-notificacao-agentes', () =>{
        cy.accTelaNot();
        cy.url().should('eq', 'https://sacnew.ascbrazil.com.br/agente-notificacoes');
        cy.contains('h1', ' Notificações de agente').should('be.visible');
    })

    it('criar-notificacao-agentes', () =>{
        cy.accTelaNot();
        cy.get('.btn-add-new').click();
        cy.get('#nom_msg').type('teste mensagem');
        cy.contains('button', 'Salvar').click();     
        cy.get('#tblBody tr')
            .contains('tr', 'teste mensagem')
            .and('contain', 'user_qa');
    })
})