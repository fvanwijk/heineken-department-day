describe('Hello world', () => {
  beforeEach(() => {
    cy.visit('/');
  });


  it('should show "Hello world"', () => {
    cy.get('#container').contains('Hello world');
  });
});
