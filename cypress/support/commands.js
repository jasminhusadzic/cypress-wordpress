// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add( "clearWordPressCookies", () => {
    cy.clearCookie( 'wordpress_a8b94154380982c3184a469b8aa525c6' );
    cy.clearCookie( 'wordpress_a8b94154380982c3184a469b8aa525c6' );
    cy.clearCookie( 'wordpress_logged_in_a8b94154380982c3184a469b8aa525c6' );
    cy.clearCookie( 'wordpress_test_cookie' );
  });

Cypress.Commands.add( "getWordPressCookies", () => {
cy.getCookies()
    .then( (cookies) => {
    cy.writeFile( 'cookies.json', cookies );
    });
});

Cypress.Commands.add( "setWordPressCookies", () => {

    cy.readFile( 'cookies.json' )
      .then( (cookies) => {
        cookies.forEach( (cookie) => {
          // cy.log( JSON.stringify( cookie ) ); // See the cookie contents
          cy.setCookie( cookie.name, cookie.value, {
            domain: Cypress.env('domain'),
            path: cookie.path,
            secure: cookie.secure,
            httpOnly: cookie.httpOnly,
            expiry: cookie.expiry
          });
        });
      });
  });
