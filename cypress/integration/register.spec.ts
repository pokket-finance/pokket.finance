describe('Register page', () => {
  it('should send register request properly', () => {
    cy.intercept('GET', '/api/Captcha/RefreshCode', {
      fixture: 'requests/captcha',
    });
    cy.visit('/user/register');

    cy.intercept(
      { method: 'POST', url: '/api/user/signup' },
      { fixture: 'requests/signup' },
    );
    cy.get('input[name=email]')
      .type('test@example.com')
      .get('input[name=password]')
      .type('test1234')
      .get('input[name=captcha]')
      .type('1581')
      .get('*[data-cy=checkbox-check]')
      .click()
      .get('button[type=submit]')
      .click();

    cy.get('*[data-cy=check-email]').should('be.visible');
  });
});
