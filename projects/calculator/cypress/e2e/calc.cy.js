describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('x').click()
    cy.contains('6').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '12')
  })

  it('Prueba Resta',()=>{
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('6').click()
    cy.contains('-').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '4')
  })
})