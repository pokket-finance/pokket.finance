describe('Change password', () => {
  it('should show 2-fa code input if enabled', () => {
    cy.intercept('/api/user', { fixture: 'requests/profile-2fa' }).visit(
      '/account/security',
    );

    cy.get('button[data-cy=change-password]')
      .click()
      .get('input[name=twoFactorCode]')
      .should('be.visible');
  });
  it('should send change password request', () => {
    cy.intercept('/api/user', { fixture: 'requests/profile' }).visit(
      '/account/security',
    );

    cy.get('button[data-cy=change-password]')
      .click()
      .get('input[name=oldPassword]')
      .type('123456')
      .get('input[name=newPassword]')
      .type('123456')
      .intercept('/api/User/changePassword', { fixture: 'responses/success' })
      .get('button[type=submit]')
      .click()
      .get('button[data-cy=done]')
      .should('be.visible');
  });
  it('should error message on failure', () => {
    cy.intercept('/api/user', { fixture: 'requests/profile' }).visit(
      '/account/security',
    );

    cy.get('button[data-cy=change-password]')
      .click()
      .get('input[name=oldPassword]')
      .type('123456')
      .get('input[name=newPassword]')
      .type('123456')
      .intercept('/api/User/changePassword', { fixture: 'responses/error' })
      .get('button[type=submit]')
      .click()
      .get('*[data-cy=error]')
      .should('be.visible');
  });
});
