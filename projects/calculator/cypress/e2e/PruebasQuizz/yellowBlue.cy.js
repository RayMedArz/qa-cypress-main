describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/yellowOrBlue')
    cy.get('.form_btn').click()

   
    cy.get('.color').invoke('text').then((colorText) => {
      if (colorText.trim() === 'yellow') {
        cy.get('.yellow').click()
      } else if (colorText.trim() === 'blue') {
        cy.get('.blue').click()
      } else {
        throw new Error(`Texto inesperado: ${colorText}`)
      }
    })
  })
})