import { BasePage } from "./base-page";

export class LoginPage extends BasePage {

    
    login = (options= {username: '', password: ''}) => {
        this.usernameInput.should('be.visible')
            .clear()
        cy.wait(500);
        this.usernameInput.type(options.username);
        this.passwordInput.should('be.visible')
            .clear()
            .type(options.password);
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