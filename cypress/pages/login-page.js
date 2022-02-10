import { BasePage } from "./base-page";

export class LoginPage extends BasePage {

   
    
    login = () => {
        const env = Cypress.env('environment');
        const username = Cypress.env(env).username
        const password = Cypress.env(env).password
        this.usernameInput.should('be.visible')
            .clear()
        cy.wait(500);
        this.usernameInput.type(username);
        this.passwordInput.should('be.visible')
            .clear()
            .type(password);
        this.loginButton.should('be.visible')
            .click();
    }

    get usernameInput () {
        return cy.get('#user_login');
    }

    get passwordInput () {
        return cy.get('#user_pass');
    }

    get loginButton () {
        return cy.get('#wp-submit');
    }
}