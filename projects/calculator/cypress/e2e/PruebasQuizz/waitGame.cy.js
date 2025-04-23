describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/waitGame')
    cy.get('[data-testid="startBtn"]').click()
    cy.wait(5000)
    cy.get('.delete').click()
  })
})