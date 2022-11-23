Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

context('Category', () => {
  


  describe('Create category', () => {
    beforeEach(() => {
      cy.visit('https://newwebionid.000webhostapp.com/login.php')
      cy.get('input[name="NAMA"]').type('admin@gmail.com')
      cy.get('input[name="PASSWORD"]').type('123')
      cy.get('button[name="LOGIN"]').click()
    })
    it('Create category with a valid data', () => {

      cy.get('a[href="index.php?page=kategori"]').click()

      cy.contains('button', 'Add').click()

      cy.get('input[name="title"]').type('Test')

      /// click using input name kirim
      cy.get('input[name="kirim"]').click({ multiple: true, force: true })

      /// cek if the data is exist
      cy.contains('Test').should('exist')
    })

    /// create category with empty data
    it('Create category with empty data', () => {
      cy.get('a[href="index.php?page=kategori"]').click()

      cy.contains('button', 'Add').click()

      /// check if there is a error message
      cy.on('fail', (err, runnable) => {
        cy.contains('Please fill out this field.').should('exist')

      })
    })

    /// create category with same data
    it('Create category with same data', () => {
      cy.get('a[href="index.php?page=kategori"]').click()

      cy.contains('button', 'Add').click()

      cy.get('input[name="title"]').type('Test')

      /// click using input name kirim
      cy.get('input[name="kirim"]').click({ multiple: true, force: true })

      /// check if there is a error message

      /// keep cypress running after fail
      cy.on('fail', (err, runnable) => {
        // keep cypress running after fail
        cy.contains('This category already exist.').should('exist')

        
      })

    })



  })

  describe('Delete category', () => {
    
    before(() => {
      cy.visit('https://newwebionid.000webhostapp.com/login.php')
      cy.get('input[name="NAMA"]').type('admin@gmail.com')
      cy.get('input[name="PASSWORD"]').type('123')
      cy.get('button[name="LOGIN"]').click()
      /// insert data before test
      cy.get('a[href="index.php?page=kategori"]').click()

      cy.contains('button', 'Add').click()

      cy.get('input[name="title"]').type('Hapus tes')

      /// click using input name kirim
      cy.get('input[name="kirim"]').click({ multiple: true, force: true })
    })
    it('Delete category', () => {

      cy.get('a[href="index.php?page=kategori"]').click()

      /// find the element and click the delete button
      cy.get('td:contains("Hapus tes")').first().parent().find('a:contains("Delete")').click({ multiple: true, force: true })

      /// find delete button and click
      cy.get('input[name="delete_kategori"]').click({ multiple: true, force: true })

      /// check if there only one data
      cy.contains('Hapus tes').should('not.exist')

    })
  })
})
