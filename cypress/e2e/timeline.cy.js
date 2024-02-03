beforeEach(() => {
  cy.visit("http://localhost:8000/#/timeline")
});

describe('Timeline chart testing', () => {
  it('should draw a chart', () => {
    cy.get("[data-cy=currency-tab-USD]").click({ force: true });
    const desiredDate = '2022-02-14';
    cy.get('[data-cy=date-picker]')
      .clear()
      .type(desiredDate)
      .trigger('change');
    cy.get('[data-cy=currencies-chart]')
      .should('be.visible');
  });

  it('should randomize a chart', { defaultCommandTimeout: 7000 }, () => {
    cy.get("[data-cy=currency-tab-USD]").click({ force: true });
    const desiredDate = '2022-02-14';
    cy.get('[data-cy=date-picker]')
      .clear()
      .type(desiredDate)
      .trigger('change')
      .get('[data-cy=currencies-chart]')
      .should('be.visible')
      .get('[data-cy=notification]')
      .should('be.visible');
    cy.get('[data-cy=randomize-btn]')
      .click()
      .get('[data-cy=notification]')
      .should('be.visible');
  });

  it('should update a chart', () => {
    cy.get("[data-cy=currency-tab-USD]").click({ force: true });
    const desiredDate = '2022-02-14';
    cy.get('[data-cy=date-picker]')
      .clear()
      .type(desiredDate)
      .trigger('change')
      .get('[data-cy=currencies-chart]')
      .should('be.visible')
      .get('[data-cy=notification]')
      .should('be.visible');
    cy.get('[data-cy=update-btn]')
      .click()
      .get('[data-cy=chart-modal]')
      .should('be.visible');
    const dateForChange = '2022-02-15';
    const now = new Date(dateForChange).toDateString();
    cy.get('[data-cy=date-timeline-select]').select(now);
    cy.get('[data-cy=high-input]').type("120");
    cy.get('[data-cy=close-input]').type("100");
    cy.get('[data-cy=open-input]').type("50");
    cy.get('[data-cy=low-input]').type("40");
    cy.get('[data-cy=chart-change-btn]').click()
      .get('[data-cy=notification]')
      .should('be.visible');
  });

})