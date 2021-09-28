describe('2-factor authorization', () => {
  it('should enable and disable 2FA properly', () => {
    let twoFactorEnabled = false;
    cy.intercept('GET', '/api/user/getQrCode', (req) => {
      if (twoFactorEnabled) {
        req.reply((res) => {
          res.statusCode = 401;
          res.body = 'null';
        });
      } else {
        req.reply({ fixture: 'requests/2fa-qr-code' });
      }
    })
      .intercept(
        { method: 'POST', url: '/api/user/enable2FA' },
        {
          isSuccess: true,
          errorCode: 0,
        },
      )
      .intercept(
        { method: 'POST', url: '/api/user/disable2FA' },
        {
          isSuccess: true,
          errorCode: 0,
        },
      );

    cy.intercept('GET', '/api/user', {
      fixture: 'requests/profile',
    }).visit('/account/security');

    cy.get('*[data-cy="2fa:enable"]')
      .click()
      .get('input[name=confirmationCode]')
      .type('123456')
      .get('button[type=submit]')
      .click()
      .then(() => {
        twoFactorEnabled = true;
      })
      .get('button[data-cy=close]')
      .click();

    cy.get('*[data-cy="2fa:disable"]')
      .should('be.visible')
      .click()
      .get('input[name=confirmationCode]')
      .type('123456')
      .get('button[type=submit]')
      .click()
      .then(() => {
        twoFactorEnabled = false;
      })
      .get('button[data-cy=close]')
      .click()
      .get('button[data-cy="2fa:enable"]')
      .should('be.visible');
  });
});
