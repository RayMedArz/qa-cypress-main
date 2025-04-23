describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/concatStrings')
    cy.get('.strings_section > :nth-child(2)').click()
    cy.get('.string1').invoke('text').then((stringA) => {
      cy.get('.string2').invoke('text').then((stringB) => {
        const concatenatedString = stringA.trim() + stringB.trim()
        cy.get('input').type(concatenatedString)
    })
    })
    cy.get('.text-center > .form_btn').click()
  })
})