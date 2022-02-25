describe('ML', () => {
    
    it('acessar a página de cadastro do Correios', () => {
        cy.visit('https://meucorreios.correios.com.br/app/cadastro/cadastro.php');
    });

    /*it('clicar em cadastrar', () => {
        cy.wait(2000);
        cy.get(':nth-child(2) > span > a').click();
    });*/
});