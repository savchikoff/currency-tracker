beforeEach(() => {
  cy.visit('http://localhost:8000');
});

describe('Convertor modal testing', () => {
  it('should open convertor modal while clicking on the currency card', () => {
    cy.get("[data-cy=currency-card-EUR]").click();
    cy.get("[data-cy=convertor-modal]").should('be.visible');
  })
  it('should not convert because of the incorrect value', () => {
    cy.get("[data-cy=currency-card-USD]").click();
    cy.get("[data-cy=convertor-modal]").should('be.visible');
    cy.get("[data-cy=modal-convertor-input]").type("20,45485");
    cy.get("[data-cy=modal-convertor-select]").click();
    cy.get("[data-cy=modal-convertor-currency-ARS]").click();
    cy.get("[data-cy=convertor-btn]").click();
    cy.get('[data-cy=converted-amount]').invoke('text').should('equal', 'Converted amount: 0 ARS');
  })
  it('should convert and give converted value', () => {
    cy.get("[data-cy=currency-card-ARS]").click();
    cy.get("[data-cy=convertor-modal]").should('be.visible');
    cy.get("[data-cy=modal-convertor-input]").type("30");
    cy.get("[data-cy=modal-convertor-select]").click();
    cy.get("[data-cy=modal-convertor-currency-USD]").click();
    cy.get("[data-cy=convertor-btn]").click();
    cy.get('[data-cy=converted-amount]').invoke('text').then((text) => {
      const number = Number(text.match(/\d+(\.\d+)?/)[0]);
      cy.log(number);

      cy.wrap(number).should('be.greaterThan', 0);
    });
  })
})