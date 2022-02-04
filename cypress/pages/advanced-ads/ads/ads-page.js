import { BasePage } from "../../base-page";

export class AdsPage extends BasePage {

    shouldNotContainsAds = () => {
        this.noAdsInfo
            .should('be.visible');
    }

    get noAdsInfo() {
        return cy.contains('td', 'No Ads found');
    }

}