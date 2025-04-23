describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/formFill')
    cy.fixture('form1').as('formData') // Cargar los datos del fixture
    cy.get('@formData').then((formData) => {
      cy.get(':nth-child(1) > input').type(formData.fName)
      cy.get(':nth-child(2) > input').type(formData.lName)
      cy.get(':nth-child(3) > input').type(formData.email)
      cy.get(':nth-child(4) > input').type(formData.password)
      cy.get('.btn_section > .form_btn').click()
      cy.wait(2000)
      cy.get(':nth-child(1) > input').clear().type(formData.fName2)
      cy.get(':nth-child(2) > input').clear().type(formData.lName2)
      cy.get(':nth-child(3) > input').clear().type(formData.email2)
      cy.get(':nth-child(4) > input').clear().type(formData.password2)
      cy.get('.btn_section > .form_btn').click()
      cy.wait(2000)
      cy.get('.orange').click()
    })
    
  })
})