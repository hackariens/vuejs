describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vuejs.traefik.me');
    cy.screenshot('first-page');
  })
})