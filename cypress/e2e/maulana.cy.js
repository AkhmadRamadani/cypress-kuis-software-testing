Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe('Login', () => {
    const email = 'test@gmail.com';
    const password = 'Admin1234'
  
    it('Input Email Benar dan Password Salah', () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php")
      cy.get('#username-field > .form_login').type('test@gmail.com')
      cy.get('#password').type('testSalah')
  
      cy.get('.btn').click()
  
    });
  
    it('Input Email Salah dan Password Benar', () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php")
      cy.get('#username-field > .form_login').type('rosandy1118@gmail.com')
      cy.get('#password').type(password)
  
      cy.get('.btn').click()
  
    });
  
    it('Input Email Salah dan Password Salah', () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php")
      cy.get('#username-field > .form_login').type('rosandy111@gmail.com')
      cy.get('#password').type('pass1234')
  
      cy.get('.btn').click()
  
    });
  
    it('Login Tanpa Inputan', () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php")
      cy.get('.btn').click()
  
    });
  
    it('Login Sebagai Admin Password Salah', () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php")
      cy.get('#username-field > .form_login').type('ram@gmail.com')
      cy.get('#password').type(password)
  
      cy.get('.btn').click()
  
    });
  
    it('Form Inputan Terisi Sempurna', () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php")
      cy.get('#username-field > .form_login').type(email)
      cy.get('#password').type(password)
  
      cy.get('.btn').click()
  
    });
  
    it('Login Sebagai Admin', () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php")
      cy.get('#username-field > .form_login').type('ram@gmail.com')
      cy.get('#password').type('123')
  
      cy.get('.btn').click()
  
    });
  
  })