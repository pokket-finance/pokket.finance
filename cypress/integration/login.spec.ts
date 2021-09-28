describe('Login page', () => {
  it('should send login request properly', () => {
    cy.intercept('GET', '/api/Captcha/RefreshCode', {
      fixture: 'requests/captcha',
    });
    cy.visit('/user/login');

    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=password]').type('test@example.com');
    cy.get('input[name=captcha]').type('1581');

    cy.intercept(
      {
        method: 'POST',
        url: '/api/user/signin',
      },
      { fixture: 'requests/login' },
    );
    cy.get('button[type=submit]').click();

    cy.intercept(
      {
        method: 'POST',
        url: '/api/account/allHoldings',
      },
      'null',
    ).intercept({ method: 'POST', url: '/api/account/balances' }, 'null');
    cy.location('pathname').should('eq', '/dashboard');
  });
  it('should show 2fa input is two-factor authentication is enabled', () => {
    cy.intercept('GET', '/api/Captcha/RefreshCode', {
      fixture: 'requests/captcha',
    });
    cy.visit('/user/login');

    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=password]').type('test@example.com');
    cy.get('input[name=captcha]').type('1581');

    cy.intercept(
      {
        method: 'POST',
        url: '/api/user/signin',
      },
      { fixture: 'requests/login-2fa' },
    );
    cy.get('button[type=submit]').click();

    cy.get('input[name=authCode]').should('be.visible').type('123456');

    cy.intercept(
      { method: 'POST', url: '/api/User/verifyMfa' },
      { fixture: 'requests/login' },
    );
    cy.get('button[type=submit]').click();

    cy.intercept(
      {
        method: 'POST',
        url: '/api/account/allHoldings',
      },
      'null',
    ).intercept({ method: 'POST', url: '/api/account/balances' }, 'null');
    cy.location('pathname').should('eq', '/dashboard');
  });
});
