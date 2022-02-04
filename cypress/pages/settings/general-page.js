import { BasePage } from "../base-page";

export class GenerallSettingsPage extends BasePage {

    header = {

        shouldHeaderExist: () => {
            this.header.settingsHeading
                .should('be.visible');
        },

        get settingsHeading() {
            return cy.contains('h1', 'General Settings');
        }
    }

}