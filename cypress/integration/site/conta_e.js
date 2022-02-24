describe('ML', () => {
    
    it('acessar a página de cadastro do Correios', () => {
        cy.visit('https://meucorreios.correios.com.br/app/cadastro/estrangeiro/cadastro.php');
    });
    it("selecionar opção estrangeiro", () =>{
        cy.get('[type="radio"]').check('0')
    }); 
    it("inserir idcorreios", () =>{
        cy.get("#id-correios").type("samuelteste2022");
    });
    it("inserir cei", () =>{
        cy.get("#cie").type("06438846376");
    });
    it("inserir nome", () =>{
        cy.get("#nome").type("Samuel Oliveira da Silva");
    });
    it("inserir email", () =>{
        cy.get("#email").type("samuelimportacoes@gmail.com");
    });
    it("inserir telefone", () =>{
        cy.get("#celular").type("99982349471");
    });
    it("inserir data de nascimento", () =>{
        cy.get("#nascimento").type("1996-11-05");
    });
    it("selecionar sexo", () =>{
        cy.get('[type="radio"]').check('M')
    });
    it("inserir senha", () =>{
        cy.get("#senha").type("A!s2d3f4");
    });
    it("enviar cadastro", () =>{
        cy.get("#b-salvar").click();

    });
    /*it('clicar em cadastrar', () => {
        cy.wait(2000);
        cy.get(':nth-child(2) > span > a').click();
    });*/
});