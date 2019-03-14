/// <reference types="Cypress" />

context('Code Coverage', () => {

  beforeEach(() => { 
    cy.visit('localhost:4848');
  });

  /* Normally we would inject Axe for each test; however, we aren't currently
   * modifying the state of the page so we don't need to checkA11y more then once.  
   */
  it('Tests a11y on the page',() =>{

    cy.injectAxe();
    cy.checkA11y({ 
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"]
      }
    });

  })

  it('Finds the code coverage table', () => {
    cy.get("#cctable");
  });
  
  it('Loads five items from the API', () => {
    cy.get("#cctable")
      .children("tbody")
      .children("tr")
      .should((listofelements) => {
        expect(listofelements).to.have.length(5);
      });
  });

  it('should have the class success on the first three test items', () => {
    cy.get("#cctable")
      .children("tbody")
      .children("tr")
      .should(($listofelements) => {
        $listofelements.slice(0,2).each((item) => {
          item.should('have.class', 'success');
        });
      });
  });

  it('should have the class warning on the fourth test item', () => {
    cy.get("#cctable")
      .children("tbody")
      .children("tr")
      .eq(3)
      .should('have.class', 'warning');
  });

  it('should have the class danger on the fifth test item', () => {
    cy.get("#cctable")
      .children("tbody")
      .children("tr")
      .eq(4)
      .should('have.class', 'danger');
  });
  

})