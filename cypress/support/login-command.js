Cypress.Commands.add('login', (user, password) =>{
    cy.get('#login-user').type(user);
    cy.get('#login-password').type(password, {log: false});
    cy.contains('button', 'Entrar').click();
})