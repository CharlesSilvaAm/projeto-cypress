describe('Chave Pix', () => {

    beforeEach(() => {
        cy.visit('https://testathon-dbcbank-front-time5-vs2.onrender.com')
        cy.fixture('loginData').then((login)=>{

            transferPage.elements.inputCpf().type(login.cpf)
            transferPage.elements.inputPassword().type(login.password)
            transferPage.elements.btnLogin().click()
        })
    })

    it('Validar cadastrar chave pix com sucesso', () => {
        cy.wait(5000)
        transferPage.elements.btnGerenciarPix().should('be.visible').click()
        transferPage.elements.btnCriarChavePix().should('be.visible').click()
        
        
    })
})
