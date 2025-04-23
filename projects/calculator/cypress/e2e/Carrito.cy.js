describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get(':nth-child(5)> .stepper-input > .quantity').click().clear().type('3')
      cy.get(':nth-child(5) > .product-action > button').click()

      cy.get(':nth-child(1)> .stepper-input > .quantity').click().clear().type('5')
      cy.get(':nth-child(1) > .product-action > button').click()
      cy.get(':nth-child(15)> .stepper-input > .quantity').click().clear().type('8')
      cy.get(':nth-child(15) > .product-action > button').click()
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
      cy.get('select').select('Mexico')
      cy.get('.chkAgree').click()
      cy.get('button').click()
    })
  })