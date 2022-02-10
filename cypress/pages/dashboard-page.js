import { BasePage } from "./base-page";

export class DashboardPage extends BasePage {

    shouldBeLoaded = () => {
        cy.location('pathname').should('contain', '/wp-admin' );
    }

    adminBar = {

        shouldBeVisible: () => {
            this.adminBar.adminBarHeader.should('be.visible');
        },

        get adminBarHeader() {
            return cy.get('#wpadminbar');
        }
    }

    navigation = {

        shouldBeVisible: () => {
            this.navigation.navigationBar.should('be.visible');
        },
        
        get navigationBar() {
            return cy.get('#adminmenuback');
        }
    }

    main = {

        shouldBeVisible: () => {
            this.main.mainContent.should('be.visible');
        },

        get mainContent() {
            return cy.get('#wpbody-content');
        }
    }
}