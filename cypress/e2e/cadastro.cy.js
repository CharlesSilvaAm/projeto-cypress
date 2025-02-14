import data from '../fixtures/cadastroDta.json'
import dataPage from '../support/pages/cadastroPage'

describe('cadastro', () => {

    it('Cadastro com sucesso', () => {

        const inputBankDetails = data.data_bank_details

        dataPage.register()
        dataPage.registerBankDetails(inputBankDetails)
        dataPage.messageRegisterSuccess()

    })
    
})