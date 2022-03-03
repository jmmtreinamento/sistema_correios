describe('ML', () => {
    
    it('acessar a página de dos correios', () => {
        cy.visit('https://www.correios.com.br/#');
    });

    it('pausar o slide', () => {
        cy.get('#pausa-solucoes > .ic-pause-out').click();
        cy.scrollTo(0, 1000) 
    });

});   