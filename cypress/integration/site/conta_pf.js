describe('ML', () => {
    
    /*it('acessar a página de cadastro do Correios', () => {
        cy.visit('https://meucorreios.correios.com.br/app/cadastro/cadastro.php');
    });

    it('preencher o campo CPF', () => {
        cy.wait(2000);
        cy.get('#cpf').type("76856143168");
    });

    it('preencher o campo Nome', () => {
        cy.wait(1000);
        cy.get('#nome').type("Eric Oliveira");
    });

    it('selecionar o campo Sexo', () => {
        cy.wait(1000);
        cy.get('#sexo').select("Masculino");
    });

    it('preencher o campo Dia de Nascimento', () => {
        cy.wait(1000);
        cy.get('#dn-dia').type("28");
    });

    it('selecionar o campo Mês de Nascimento', () => {
        cy.wait(1000);
        cy.get('#dn-mes').select("Janeiro");
    });

    it('preencher o campo Ano de Nascimento', () => {
        cy.wait(1000);
        cy.get('#dn-ano').type("2002");
    });

    it('preencher o campo Celular', () => {
        cy.wait(1000);
        cy.get('#celular').type("67882103211");
    })

    it('preencher o campo Email', () => {
        cy.wait(1000);
        cy.get('#email').type("oyoygod@gmail.com");
    })

    it('preencher o campo Senha', () => {
        cy.wait(1000);
        cy.get('#senha').type("d28j01a02");
    })

    it('concordar com os termos de Privacidade', () => {
        cy.wait(1000);
        cy.get('#privacidade').click();
    })

    it('concordar com os termos de Serviço', () => {
        cy.wait(1000);
        cy.get('#servico').click();
    })

    it('clicar em criar cadastro', () => {
        cy.wait(2000);
        cy.get('#b-salvar').click();
    });*/

    it('acessar a página Correios', () => {
        cy.visit('https://meucorreios.correios.com.br/app/index.php');
    });

    it('clicar em Entrar', () => {
        cy.wait(2000);
        cy.get('.primario').click();
    });

    it('iniciar login', () => {
        cy.get('#username').click;
        cy.get('#username').type('orfeu369@gmail.com')
    });

    it('preencher a senha', () => {
        cy.get('#password').click;
        cy.get('#password').type('d28j01a02{enter}')
        cy.wait(2000)
    });





    it('conferir Meus Objetos', () => {
        cy.wait(2000);
        cy.contains('#meus-objetos', /Meus Objetos/);
    });

    it('conferir Busca CEP', () => {
        cy.wait(2000);
        cy.contains('#busca-cep', /Busca CEP/);
    });

    it('conferir Busca Agência', () => {
        cy.wait(2000);
        cy.contains('#busca-agencia', /Busca Agência/);
    });

    it('conferir Minhas Importações', () => {
        cy.wait(2000);
        cy.contains('#minhas-importacoes', /Minhas Importações/);
    });

    it('conferir Preço e Prazo', () => {
        cy.wait(2000);
        cy.contains('#preco-prazo', /Preço e Prazo/);
    });

});