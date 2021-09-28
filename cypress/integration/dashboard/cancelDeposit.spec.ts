describe('Cancel deposit', () => {
  it('send cancel request properly', () => {
    cy.intercept('/api/account/allHoldings', {
      fixture: 'requests/deposits',
    }).visit('/dashboard');

    cy.get('*[data-cy=deposit]')
      .click()
      .get('button[data-cy=cancel-order]')
      .click()
      .intercept('/api/Purchase/CancelPurchase', {
        fixture: 'responses/success',
      })
      .as('cancel-request')
      .get('button[data-cy=confirm]')
      .click();

    cy.wait('@cancel-request')
      .its('response')
      .should('have.a.property', 'statusCode', 200);
  });
});
