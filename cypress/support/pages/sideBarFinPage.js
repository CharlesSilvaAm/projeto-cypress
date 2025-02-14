class SideBarFinPage {
    // Element selectors with a 15-second timeout
    elements = {
      btnTransfer: () => cy.get('a[href="/admin/financas/transferencia"]', { timeout: 15000 }),
      btnDeposit: () => cy.get('a[href="/admin/financas/deposito"]', { timeout: 15000 }),
      btnWithdraw: () => cy.get('a[href="/admin/financas/saque"]', { timeout: 15000 })
    };
  
    // Click methods
    clickTransfer() {
      this.elements.btnTransfer().click();
    }
  
    clickDeposit() {
      this.elements.btnDeposit().click();
    }
  
    clickWithdraw() {
      this.elements.btnWithdraw().click();
    }
  }
  
  export default new SideBarFinPage();
  