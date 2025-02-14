class transferPage {
    elements = {
        inputAmount: () => cy.get('input[name="money"]', { timeout: 100000 }),
        inputBranch: () => cy.get('input[name="agency"]', { timeout: 100000 }),
        inputAccount: () => cy.get('input[name="account"]', { timeout: 100000 }),
        inputDigit: () => cy.get('input[name="digit"]', { timeout: 100000 }),
        inputDescription: () => cy.get('textarea[name="description"]', { timeout: 100000 }),
        btnContinueTransfer: () => cy.get('button[type="submit"]', { timeout: 100000 }),
        btnConfirmDetails: () => cy.get(':nth-child(9) > .flex > .bg-primary', { timeout: 100000 }),
        transferSuccessMessage: () => cy.get('h3.flex.items-center.justify-between.text-2xl.font-medium.text-primary.mb-4', { timeout: 100000 })
    }

    fillCompleteDefaultForm() {
        this.fillAmount(1);
        this.fillBranch('0001');
        this.fillAccount('23277');
        this.fillDigit('9');
        this.fillDescription('Teste');
        this.clickContinueTransfer();
    }
    
    fillAmount(amount) {
        this.elements.inputAmount().type(amount);
    }

    fillBranch(branch) {
        this.elements.inputBranch().type(branch);
    }

    fillAccount(account) {
        this.elements.inputAccount().type(account);
    }

    fillDigit(digit) {
        this.elements.inputDigit().type(digit);
    }
    
    fillDescription(description) {
        this.elements.inputDescription().type(description);
    }

    clickContinueTransfer() {
        this.elements.btnContinueTransfer().click();
    }

    clickConfirmDetails() {
        this.elements.btnConfirmDetails().click();
    }

    verifyTransferSuccessMessage(msg = 'Transferência realizada com sucesso') {
        this.elements.transferSuccessMessage()
            .should('contain.text', msg);
    }
    
}

export default new transferPage();
