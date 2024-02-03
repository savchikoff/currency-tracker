beforeEach(() => {
  cy.visit('http://localhost:8000');
});

describe('Theme switching', () => {
  it('should make theme toggle not checked', () => {
    cy.get('[data-cy=toggle-checkbox]').click({ force: true });
    cy.get('[data-cy=toggle-checkbox]').should('not.be.checked');
  });

  it('should save the theme to cache when toggled', () => {
    cy.get('[data-cy=toggle-checkbox]').click({ force: true });
    cy.window().its('localStorage').invoke('getItem', 'theme').then((theme) => {
      expect(JSON.parse(theme)).to.equal('dark');
    });
  });

  it('should change colors when the theme is toggled', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-cy=toggle-checkbox]').click({ force: true });
    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)');
  });
})