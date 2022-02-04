import { Navigation } from "./components/navigation-component";

export class BasePage {

    open = (path) => {
        cy.visit(path);
    }

    getNavigation = () => {
        return new Navigation();
    }

    shouldDestinationIsCorrect = (options = { path: ''}) => {
        cy.url()
            .should('contain', options.path)
    }
}