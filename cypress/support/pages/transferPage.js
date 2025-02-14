class transferPage{

    elements = {
        inputCpf: () => cy.get('input[name="cpf"]'),
        inputPassword: () => cy.get('input[name="password"]'),
        btnLogin: () =>  cy.get('button[type="submit"]'),
        btnGerenciarPix: () =>  cy.get('.items-start.justify-between > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(3)'),
        btnCriarChavePix: () => cy.get('.inline-flex'),
        btnTipoChavePix: () => cy.xpath("//*[@id="radix-:r5:"]/button[1]")
    }
}

export default new transferPage();