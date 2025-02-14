import users from '../fixtures/userData.json'
import login from '../support/pages/loginPage'
import transferPage from '../support/pages/transferPage'
import tedPage from '../support/pages/tedPage'
import headerPage from '../support/pages/headerPage'
import passwordPage from '../support/pages/passwordPage'
import sideBarFinPage from '../support/pages/sideBarFinPage'


describe('TED', () => {

    it('transação TED com sucesso', () => {
        const user = users.admin
        login.submit(user)
        cy.get('.gap-14 > .flex', { timeout: 100000 }).should('be.visible')
        headerPage.waitForName(100000);
        transferPage.clickTed();
        tedPage.fillCompleteDefaultForm();
        tedPage.clickConfirmDetails();
        passwordPage.pressTransactionPwdAndConfirm("8520");
        tedPage.verifyTransferSuccessMessage();

    })



})
