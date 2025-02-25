describe('Login Test', () => {
    it('Should login successfully with correct credentials', () => {
        cy.visit('http://localhost:8082');
        cy.get('input[placeholder="Email"]').click().then(() => {
            cy.get('input[placeholder="Email"]').type('matheus@email.com');
        });
        cy.get('input[placeholder="Senha"]').click().then(() => {
            cy.get('input[placeholder="Senha"]').type('123');
        });
        cy.contains('LOGIN').click();
    });
});
