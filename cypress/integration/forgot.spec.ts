describe('Forgot password page', () => {
  it('should request password reset email', () => {
    cy.visit('/user/forgot');

    cy.get('input[name=email]').type('test@example.com');

    cy.intercept(
      { method: 'POST', url: '/api/User/forgetPassword' },
      { fixture: 'requests/forgot-password' },
    );
    cy.get('button[type=submit]').click();

    cy.get('p[data-cy=reset-email-sent]').should('be.visible');
  });
});

describe('Reset password page', () => {
  it('should send password reset request', () => {
    cy.visit('/user/reset?token=123');

    cy.get('input[name=password]')
      .type('test123A!')
      .get('input[name=verificationCode]')
      .type('123456')
      .intercept('/api/Verify', { fixture: 'responses/success' })
      .intercept(
        { method: 'POST', url: '/api/user/resetPassword' },
        { fixture: 'responses/success' },
      )
      .get('button[type=submit]')
      .click();

    cy.location('pathname')
      .should('eq', '/user/login')
      .location('search')
      .should('eq', '?reset=true');
  });
});
