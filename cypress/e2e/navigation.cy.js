beforeEach(() => {
  cy.visit('http://localhost:8000/');
});

describe('Navigation testing', () => {
  it('should display the logo', () => {
    cy.get('[data-cy=navbar-logo]').should('be.visible');
  });

  it('should display 4 navigation links', () => {
    cy.get('[data-cy=navbar-links]').children().should('have.length', 4);
  });

  it("should check navigation links names", () => {
    cy.get("[data-cy=nav-Home]").invoke("text").should("eq", "Home");
    cy.get("[data-cy=nav-Timeline]").invoke("text").should("eq", "Timeline");
    cy.get("[data-cy=nav-BankCard]").invoke("text").should("eq", "BankCard");
    cy.get("[data-cy=nav-Contacts]").invoke("text").should("eq", "Contacts");
  });

  it('should navigate to the correct path when a link is clicked', () => {
    cy.get("[data-cy=nav-Home]").click();
    cy.url().should("eq", "http://localhost:8000/#/");

    cy.get("[data-cy=nav-Timeline]").click();
    cy.url().should("eq", "http://localhost:8000/#/timeline");

    cy.get("[data-cy=nav-BankCard]").click();
    cy.url().should("eq", "http://localhost:8000/#/bank-card");

    cy.get("[data-cy=nav-Contacts]").click();
    cy.url().should("eq", "http://localhost:8000/#/contacts");
  });

})