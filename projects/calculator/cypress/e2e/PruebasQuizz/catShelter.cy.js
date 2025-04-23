describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/catshelter')
    cy.get('.cat_shelter_header > .link_btn').click()
    cy.fixture('cat').as('catData')
    cy.get('@catData').then((catData) => {
      cy.get('.list_form > :nth-child(1) > input').type(catData.name1)
      cy.get('textarea').type(catData.desc1)
      cy.get(':nth-child(1) > label > input').check()
      cy.get('.text-center > .form_btn').click()
      cy.get('.cat_shelter_header > .link_btn').click()
      cy.get('.list_form > :nth-child(1) > input').type(catData.name2)
      cy.get('textarea').type(catData.desc2)
      cy.get(':nth-child(1) > label > input').check()
      cy.get('.text-center > .form_btn').click()

      cy.get('.collection').then((catList) => {
        cy.wrap(catList).contains(catData.name1).parent().find('.new_home').click()
        cy.wrap(catList).contains(catData.name2).parent().find('.new_home').click()
      })
    })
  })
})