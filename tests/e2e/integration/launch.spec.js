describe('Actions', () => {
  it('launches landing page', () => {
    cy.visit('/')
    cy.title().should('eq', 'Johannes Schweig')
    // find welcome message
    cy.get('#welcome').contains('I am Johannes, a UX Designer based in Berlin, and this is my work.')
    // find three projects
    cy.get('.tile.responsive').its('length').should('eq', 3)
    // find about
    cy.get('#about')
    // find legal link
    cy.get('#legal')
  })
})
