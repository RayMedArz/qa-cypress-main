describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/sortedList')
    cy.get('input').type('Cosa 1')
    cy.wait(2000)
    cy.get('.form_btn').click()
    cy.wait(1000)
    cy.get('input').type('Cosa 2')
    cy.wait(2000)
    cy.get('.form_btn').click()
  })
})
