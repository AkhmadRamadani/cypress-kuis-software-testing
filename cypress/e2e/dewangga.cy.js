Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  context('Webinar', () => {
  
    describe('Register Webinar', () => {
       
        
        //login
        beforeEach('Login', () => {
            cy.visit('https://newwebionid.000webhostapp.com/login.php')
            cy.get('input[name="NAMA"]').type('joko@mail.com')
            cy.get('input[name="PASSWORD"]').type('123456')
            cy.get('button[name="LOGIN"]').click()
        })
        
        //Search a Webinar
        it('Search Webinar Success', () => {
            cy.visit('https://newwebionid.000webhostapp.com/index.php')
            cy.get('.search-animated').click()
            cy.get('#keyword').type('photoshop{enter}')
        })

        it('Search Webinar Fail', () => {
            cy.visit('https://newwebionid.000webhostapp.com/index.php')
            cy.get('.search-animated').click()
            cy.get('#keyword').type('poto{enter}')
        })

        //Register a Webinar
        it('Register a Webinar', () => {
          cy.visit('https://newwebionid.000webhostapp.com/index.php')
          cy.get('a[href="index.php?page=kategori"]')
            .click({ force: true })

          cy.get('[href="?page=detail&id=2"] > .col-lg-4 > .item-box > .card > .card-img-top').click()
        //   cy.get('.align-items-center > :nth-child(2) > .btn').click()

        })

        //Cek Status
        it('Cek status Webinar', () => {
          cy.visit('https://newwebionid.000webhostapp.com/index.php')
          cy.get('a[href="index.php?page=eventku"]').click()
          cy.get('#v-pills-profile-tab').click()
          cy.get('#v-pills-messages-tab').click()  
        })
      
        //Like Webinar
        it('Like Webinar', () => {
          cy.visit('https://newwebionid.000webhostapp.com/index.php')
          cy.get('[href="?page=detail&id=2"] > .col-lg-4 > .item-box > .card > .card-img-top').click()
          cy.get('.form-vertical > button').click()
        })
    })
  })
  