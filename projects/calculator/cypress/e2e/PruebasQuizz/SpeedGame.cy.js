describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/speedGame')
    cy.get('[data-testid="startBtn"]').click()
    cy.waitUntil(() => Cypress.$('.delete').length > 0,{
      timeout: 11000, // Tiempo máximo de espera (en milisegundos)
      interval: 500 // Intervalo entre intentos (en milisegundos)
    }) 
    cy.get('.delete').click()
    
  })
})