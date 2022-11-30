describe('empty spec', () => {

    /// 1. ===========================================================================
  
    it('passes', () => {
      cy.visit('https://newwebionid.000webhostapp.com/registrasi.php')
    })
  
    it('Register with college account', () => {
  
      /// expect to show registration form
      cy.get('.form-form').should('be.visible')
  
      /// expect to show username-field input
      cy.get('#username-field').should('be.visible')
  
      /// find name and input with name
      cy.get('#name').type('Raditya Catur Narendra')
  
      /// expect to show email-field input
      cy.get('#email-field').should('be.visible')
  
      /// find email and input with college email
      cy.get('#email').type('2051720198@student.polinema.ac.id')
  
      /// expect to show password-field input
      cy.get('#password-field').should('be.visible')
  
      /// find password and input with random numbers
      cy.get('#password').type('12345678')
  
      /// find submit button by name
      cy.get('.btn').click()
    })
  
    /// 2. ===========================================================================
  
    it('passes', () => {
      cy.visit('https://newwebionid.000webhostapp.com/registrasi.php')
    })
  
    it('Register with uncorrect format of email', () => {
  
      /// expect to show registration form
      cy.get('.form-form').should('be.visible')
  
      /// expect to show username-field input
      cy.get('#username-field').should('be.visible')
  
      /// find name and input with name
      cy.get('#name').type('Raditya Catur Narendra')
  
      /// expect to show email-field input
      cy.get('#email-field').should('be.visible')
  
      /// find email and input with uncorrect format of email
      cy.get('#email').type('2051720198')
  
      /// expect to show password-field input
      cy.get('#password-field').should('be.visible')
  
      /// find password and input with random numbers
      cy.get('#password').type('12345678')
  
      /// find submit button by name
      cy.get('.btn').click()
    })
  
    /// 3. ===========================================================================
  
    it('passes', () => {
      cy.visit('https://newwebionid.000webhostapp.com/registrasi.php')
    })
  
    it('Register with uncorrect format of username (with symbols)', () => {
  
      /// expect to show registration form
      cy.get('.form-form').should('be.visible')
  
      /// expect to show username-field input
      cy.get('#username-field').should('be.visible')
  
      /// find name and input with uncorrect format of username (with symbols)
      cy.get('#name').type('Rad!tya Catur Na123n|)ra')
  
      /// expect to show email-field input
      cy.get('#email-field').should('be.visible')
  
      /// find email and input college email
      cy.get('#email').type('2051720199@student.polinema.ac.id')
  
      /// expect to show password-field input
      cy.get('#password-field').should('be.visible')
  
      /// find password and input with random numbers
      cy.get('#password').type('12345678')
  
      /// find submit button by name
      cy.get('.btn').click()
    })
  
    /// 4. ===========================================================================
  
    it('passes', () => {
      cy.visit('https://newwebionid.000webhostapp.com/registrasi.php')
    })
  
    it('Register with a registered username AND email', () => {
  
      /// expect to show registration form
      cy.get('.form-form').should('be.visible')
  
      /// expect to show username-field input
      cy.get('#username-field').should('be.visible')
  
      /// find name and input with a registered username
      cy.get('#name').type('Raditya Catur Narendra')
  
      /// expect to show email-field input
      cy.get('#email-field').should('be.visible')
  
      /// find email and input with a registered username
      cy.get('#email').type('2051720198@student.polinema.ac.id')
  
      /// expect to show password-field input
      cy.get('#password-field').should('be.visible')
  
      /// find password and input with random numbers
      cy.get('#password').type('12345678')
  
      /// find submit button by name
      cy.get('.btn').click()
    })
  })