class HeaderPage {
  elements = {
    txtName: () => cy.get('span.text-base.font-bold'),
    txtAccount: () => cy.get('div.flex.flex-col.gap-1 > span').contains('Conta:'),
    txtBranch: () => cy.get('div.flex.flex-col.gap-1 > span').contains('Agência:')
  }

  waitForName(timeout = 10000) {
    // This will wait up to 10 seconds (or the specified timeout) for the name element to be visible.
    cy.get('span.text-base.font-bold', { timeout })
    .should('be.visible')
    .and('contain', ' ');
    }
}

export default new HeaderPage();
