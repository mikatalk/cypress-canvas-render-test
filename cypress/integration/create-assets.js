context('Viewport', () => {
  beforeEach(() => {
    cy.viewport(512, 512);
  })
  
  it('cy.viewport() - set the viewport size and dimension', () => {
    cy.intercept('http://127.0.0.1:8006/model/PrimaryIonDrive.glb').as('glb');
    cy.visit('http://127.0.0.1:8006/page.html');
    // cy.wait('@glb');
    cy.wait(500);
    // cy.captureCanvas();
    cy.get('canvas#three').first().screenshot('canvas-' + (Cypress.browser.isHeadless ? 'headless' : 'headed'))
  })
})
