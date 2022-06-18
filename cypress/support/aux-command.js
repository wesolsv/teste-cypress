Cypress.Commands.add('login', (user, password) =>{
    cy.get('#login-user').type(user);
    cy.get('#login-password').type(password, {log: false});
    cy.contains('button', 'Entrar').click();
})

Cypress.Commands.add('accTelaNot', () =>{
    cy.get('#side_agentes').click();
    cy.get('#side_agente_notificacoes').click();
})