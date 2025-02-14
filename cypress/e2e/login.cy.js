import users from '../fixtures/loginData.json'
import loginPage from '../support/pages/loginPage'


describe('Login', () => {

    it('Login com sucesso', () => {
        const user = users.admin

        loginPage.login(user)
        loginPage.messageSuccess()


    })

    it('Tentativa de login com usuário invalido', () => {
        const user = users.user_invalid

        loginPage.login(user)
        loginPage.messageInvalid()

    })

    it('Tentativa de login com cpf em branco', () => {
        const user = users.cpf_empty

        loginPage.login(user)
        loginPage.messageInvalid()
    })

    it('Tentativa de login com senha em branco', () => {
        const user = users.password_empty

        loginPage.login(user)
        loginPage.messageInvalid()
    })

    it('Validação de botão Entrar com campos vazios', () => {
        const user = users.user_empty

        loginPage.go()
        loginPage.fill(user)
        loginPage.btnLoginDisabled()
    })

})
