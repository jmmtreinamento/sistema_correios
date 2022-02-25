describe('ML', () => {
    
    it('acessar a página de cadastro do Correios', () => {
        cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');
    });

    it('iniciar login', () => {
        cy.get('#username').click;
        cy.get('#username').type('carlospedro1872@gmail.com')
    });

    it('preencher a senha', () => {
        cy.get('#password').click;
        cy.get('#password').type('carloscarlos123{enter}')
        cy.wait(2000)
    });

    it('entrar buscar cep', () => {
        cy.get('#busca-cep').click;
    });


    it('preencher o cnpj', () => {
        cy.get('#cnpj').click;
        cy.get('#cnpj').type('95.830.039/0001-42')
    });

    it('preencher a razão social', () => {
        cy.get('#cnpj').click;
        cy.get('#razao-social').type('Jmm Soluções')
    });

    it('preencher o email', () => {
        cy.get('#email').click;
        cy.get('#email').type('carlospedro1872@gmail.com')
    });

    it('preencher o ddd', () => {
        cy.get('#ddd').click;
        cy.get('#ddd').type('99');
    });

    it('preencher o numero', () => {
        cy.get('#fone').click;
        cy.get('#fone').type('981858646');
    });

    it('preencher o ie', () => {
        cy.get('#ie').click;
        cy.get('#ie').type('12330226-91233');
    });

    it('preencher o nome fantasia', () => {
        cy.get('#nome-fantasia').click;
        cy.get('#nome-fantasia').type('carlinhos');
    });

    it('preencher a senha', () => {
        cy.get('#senha').click;
        cy.get('#senha').type('carloscarlos123')
    });

    it('clicar em salvar', () => {
        cy.get('.primario').click;
    });

    it('clicar em cadastrar', () => {
        cy.wait(2000);
        cy.get(':nth-child(2) > span > a').click();
    });
});