describe('Withdraw', () => {
  it('should send request properly', () => {
    cy.intercept('/api/account/balances', {
      fixture: 'requests/balances',
    }).visit('/wallet');

    cy.get('*[data-cy="tab:balance"]')
      .click()
      .get('*[data-cy="wallet:ETH"]')
      .click()
      .get('*[data-cy=modal]')
      .should('be.visible');

    cy.get('input[name=amount]')
      .type('10')
      .get('input[name=address]')
      .type('0xd19953700d87cdfb09284e8a9e16278e10d9fe9f')
      .get('button[type=submit]')
      .click()
      .intercept('/api/Transfer/transfer', { fixture: 'responses/withdraw' })
      .get('button[data-cy=confirm]')
      .click()
      .get('button[data-cy=done]')
      .should('be.visible');
  });
});
