describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/speedGame')
    cy.get('[data-testid="startBtn"]').click()
    cy.waitUntil(() => Cypress.$('.delete').length > 0,{
      timeout: 11000, 
      interval: 500 
    }) 
    cy.get('.delete').click()
    
  })
})