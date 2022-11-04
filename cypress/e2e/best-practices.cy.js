beforeEach(() => {
  cy.visit("localhost");
})

/**
   * Do not use selectors that are too specific
   * to isolate them from CSS or JS changes.
   * 
   * Instead, use data-* attributes to select elements.
   */
describe('Selecting Elements', () => {
  // TODO: Figure out where to add data-* attributes
  it.skip('Always recommended way', () => { 
    /**
     * 1. Add data-* attributes to the element if it does not exist.
     * 2. Use the data-* attribute to select the element.
     */
    cy.get('[data-cy="lfm-button"]');
  })

  it('Situational way', () => {
    // Only coupled to the text content of the element.
    cy.contains('List all movies').click();
  })
})

/**
 * You hardly need to ever assign variables to return values,
 * if you do, then you probably need to refactor.
 */
describe('Assigning Return Values', () => {
  it('Storing and comparing values', () => {
    // To access what a command returns, use the .then() method.
    cy.get('button').then(($btn) => {
      const txt = $btn.text();

      cy.get('.header__title').should(($title) => {
        expect($title.text()).not.to.eq(txt);
      })

    })
  })

  it('Debugging values', () => {
    /**
     * Must have browser debugger/console open for this to work!
     */
    cy.get('button').then(($btn) => {
      debugger // pauses execution here, like a breakpoint
    })
  })

  // TODO: Add button whose text content differs each click to source code.
  it.skip('Dealing with mutable objects', () => {
    // Only for this exception do we use variables in Cypress.
    // When state has changed, and we need to compare the new state.
    cy.get('button').then(($btn) => {
      const txt = $btn.text();

      cy.get('button')
        .click()
        .then(($btn) => {
          expect($btn.text()).not.to.eq(txt);
        })
    })
  })
})