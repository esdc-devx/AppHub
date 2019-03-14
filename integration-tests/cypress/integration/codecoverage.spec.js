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

  it('should have the correct class on the test data', () => {
    cy.get("#cctable")
      .children("tbody")
      .children("tr")
      .should(($listofelements) => {
        // use jquery's map to grab all of their classes
        // jquery's map returns a new jquery object
        const classes = $listofelements.map((i, el) => {
          return Cypress.$(el).attr('class')
        })

        // call classes.get() to make this a plain array
        expect(classes.get()).to.deep.eq([
          'success',
          'success',
          'success',
          'warning',
          'danger'
        ]);        
      });
  });

})