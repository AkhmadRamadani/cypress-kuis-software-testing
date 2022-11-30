Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
    const email = "user@gmail.com";
    const password = "password";
  
  describe("Ajukan Mentor", () => {
    const biodata = "Like games";
    const last_degree = "d4";
    const occupation = "none";
    // const bukti_ijazah = "cypress/fixtures/Owl.jpg";
    // const image2 = "cypress/fixtures/Owl.jpg";
    // const bukti_ijazah_small = "cypress/fixtures/Owl.jpg";
    // const image2_small = "cypress/fixtures/Owl.jpg";
    it("Form Inputan Terisi Sempurna", () => {
      
      cy.visit("https://newwebionid.000webhostapp.com/login.php");
      cy.get("#username-field > .form_login").type(email);
      cy.get("#password").type(password);
      cy.get(".btn").click();
      cy.get(".sidebarCollapse").click();
      cy.get(".menu-extras > .dropdown-toggle").click();
      cy.get("#more > :nth-child(1) > a").click();
      cy.get(".modal-body > :nth-child(1) > .form-control").type(biodata);
      cy.get('#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(2) > .form-control').type(last_degree);
      cy.get("#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(3) > .form-control").type(occupation);
      cy.fixture("Owl.jpg", { encoding: null }).as("myFixture");
      cy.fixture("Owl.jpg", { encoding: null }).as("myFixture1");
      cy.get(
        ":nth-child(4) > .input-group > .custom-file > .form-control"
        ).selectFile("@myFixture");
        cy.get('#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(5) > .input-group > .custom-file > .form-control').selectFile(['@myFixture1']);
          cy.get(".btn-primary").click();
        });
        
        it("Form Inputan Tidak Terisi", () => {
          
      cy.visit("https://newwebionid.000webhostapp.com/login.php");
      cy.get("#username-field > .form_login").type(email);
      cy.get("#password").type(password);
      cy.get(".btn").click();
          cy.get(".sidebarCollapse").click();
          cy.get(".menu-extras > .dropdown-toggle").click();
          cy.get("#more > :nth-child(1) > a").click();
          cy.get(".modal-body > :nth-child(1) > .form-control").type("");
          cy.get('#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(2) > .form-control').type("");
          cy.get("#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(3) > .form-control").type("");
      cy.fixture("", { encoding: null }).as("myFixture2");
      cy.fixture("", { encoding: null }).as("myFixture3");
      cy.get(
        ":nth-child(4) > .input-group > .custom-file > .form-control"
      ).selectFile(["myFixture2"]);
      cy.get(
        "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(5) > .input-group > .custom-file > .form-control"
      ).selectFile(["myFixture3"]);
      cy.get(".btn-primary").click();
    });
  
    it("Form Inputan Terisi Dengan Data File yang Cukup Besar", () => {
      cy.visit("https://newwebionid.000webhostapp.com/login.php");
      cy.get("#username-field > .form_login").type(email);
      cy.get("#password").type(password);
      cy.get(".btn").click();
      cy.get(".sidebarCollapse").click();
      cy.get(".menu-extras > .dropdown-toggle").click();
      cy.get("#more > :nth-child(1) > a").click();
      cy.get(".modal-body > :nth-child(1) > .form-control").type(biodata);
      cy.get(
        "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(2) > .form-control"
        ).type(last_degree);
        cy.get(
          "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(3) > .form-control"
          ).type(occupation);
          cy.fixture("BGUltra.jpg", { encoding: null }).as("myFixture4");
          cy.fixture("BGUltra.jpg", { encoding: null }).as("myFixture5");
          cy.get(
            ":nth-child(4) > .input-group > .custom-file > .form-control"
            ).selectFile(["myFixture4"]);
      cy.get(
        "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(5) > .input-group > .custom-file > .form-control"
      ).selectFile(['myFixture5']);
    });
  
  });