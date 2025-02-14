class LoginPage {


    go() {
        cy.visit('https://testathon-dbcbank-front-time5-vs2.onrender.com')
    }

    fill(user) {

        if (user.cpf) {
            cy.get('input[name="cpf"]').type(user.cpf)
        }

        if (user.password) {
            cy.get('input[name="password"]').type(user.password)
        }

    }

    submit() {
        cy.get('button[type="submit"]').click()
        
    }

    login(user) {
        this.go()
        this.fill(user)
        this.submit()
    }

    messageInvalid() {
        cy.get('div.text-sm.font-semibold', { timeout: 10000 }).should('contain', 'Ops, Login inválido');

    }

    messageSuccess() {
        cy.get('.gap-14 > .flex', { timeout: 10000 }).should('be.visible')
    }

    btnLoginDisabled() {
        cy.get('button[type="submit"]')
            .should('be.disabled')
            .and('contain', 'Entrar')
    }


    
}
    

export default new LoginPage