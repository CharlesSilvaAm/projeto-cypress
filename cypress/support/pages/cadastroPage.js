import { faker } from '@faker-js/faker';
import { cpf } from 'cpf-cnpj-validator';

class CadastroPage {

go() {
    cy.visit('https://testathon-dbcbank-front-time5-vs2.onrender.com');
    cy.get('.inline-flex').click();
}

fill() {
    const user = {
        cpf: cpf.generate(),
        email: faker.internet.email(),
        name: faker.person.fullName().replace(/[^A-Za-zÀ-ÿ\s]/g, ''),
        data_birthdate: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toLocaleDateString('pt-BR'),
        phoneNumber: `55 9${Math.floor(Math.random() * 90000000) + 10000000}`
    };

    cy.get('input[name="document"]').type(user.cpf);
    cy.get('input[name="phoneNumber"]').type(user.phoneNumber);
    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="emailConfirmation"]').type(user.email);
    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="birthdate"]').type(user.data_birthdate);
}

submit() {
    cy.get('.inline-flex').click();
}

register() {
    this.go();
    this.fill();
    this.submit();
}


fillBankDetails(input) {
    const transactionPwd = faker.string.numeric(4);

    cy.get('input[name="loginPwd"]').type(input.password);
    cy.get('input[name="loginPwdConfirmation"]').type(input.confirmPassword);
    cy.get('input[name="transactionPwd"]').type(transactionPwd);
    cy.get('input[name="transactionPwdConfirmation"]').type(transactionPwd);
}

submitConfirm() {
    cy.get('.peer').click()
    cy.get('button[type="submit"]', { timeout: 10000 }).click()

}

registerBankDetails(input) {

    this.fillBankDetails(input);
    this.submitConfirm();
}

messageRegisterSuccess() {
    cy.get('.text-xl', { timeout: 20000 }).should('be.visible').and('contain', 'CONTA CRIADA COM SUCESSO!')
}


}

export default new CadastroPage