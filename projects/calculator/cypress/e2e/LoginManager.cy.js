describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3)>.btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type('John Doe')
    cy.get(':nth-child(2) > .form-control').type('123456')
    cy.get(':nth-child(3) > .form-control').type('30000')
    cy.get('form.ng-dirty > .btn').click()
  })
})