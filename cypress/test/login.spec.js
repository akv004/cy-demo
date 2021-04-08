describe('App router Tests', function () {

    beforeEach(() => {

    });

    afterEach(() => {
    });

    it('login to cvs', function () {
      cy.visit("www.abc.com")
      cy.wait(1000)
      cy.get('#signInBtn').click()
      cy.wait(1000)
      cy.get('#email').type('abc@gmail.com')
      cy.wait(1000)
      cy.get('.btn').click();
    });
});
