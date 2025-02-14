class PasswordPage {

  getDigitButton(digit) {
    return cy.contains('div.cursor-pointer', digit);
  }

  pressDigits(password) {
    password.split('').forEach((digit) => {
      this.getDigitButton(digit).click();
    });
  }

  pressTransactionPwdAndConfirm(password) {
    this.pressDigits(password);
    cy.contains('button', 'Confirmar').click();
  }
}

export default new PasswordPage();
