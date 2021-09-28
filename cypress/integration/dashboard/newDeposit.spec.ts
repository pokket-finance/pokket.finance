describe('Create deposit modal', () => {
  it('should send new deposit request properly', () => {
    cy.intercept('GET', '/getInfo', { fixture: 'requests/products' }).visit(
      '/products',
    );

    cy.intercept('GET', '/api/account/ETH', {
      fixture: 'responses/tokenBalance',
    })
      .get('*[data-cy="token:ETH"]')
      .click()
      .get('*[data-cy=modal]')
      .should('be.visible');

    cy.get('input[name=quantity]')
      .type('10')
      .get('button[type=submit]')
      .click()
      .get('*[data-cy="collateral:USDT"]')
      .click()
      .get('button[type=submit]')
      .click()
      .get('*[data-cy="autoRoll:false"]')
      .click()
      .get('button[type=submit]')
      .click();

    cy.intercept(
      { method: 'POST', url: '/api/Purchase' },
      { fixture: 'requests/new-deposit' },
    )
      .as('new-deposit-request')
      .get('button[type=submit]')
      .click()
      .wait('@new-deposit-request')
      .its('response')
      .should('have.property', 'statusCode', 200);
  });
});
