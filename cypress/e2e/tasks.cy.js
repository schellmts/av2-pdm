describe('Criação de Tarefa', () => {
    it('Deve adicionar uma tarefa à lista', () => {
        cy.visit('http://localhost:8082');

        cy.get('input[placeholder="Digite uma tarefa"]').click();

        cy.get('input[placeholder="Digite uma tarefa"]').type('Comprar leite');

        cy.contains('Adicionar Tarefa').click();

        cy.contains('Comprar leite').should('exist');
        cy.get('input[type="checkbox"]').click();

        cy.get('input[type="checkbox"]').should('be.checked');
        cy.contains('Comprar leite').should('have.css', 'text-decoration-line', 'line-through');
    });
});
