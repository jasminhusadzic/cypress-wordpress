/// <reference types="cypress" />
import { adsPage, generalSettingsPage, loginPage } from '../../utils/initialize'
import { dashboardPage } from '../../utils/initialize'


describe('Advanced Ads basic plugin checks', () => {

    before( () => {
        loginPage.open('/');
    })

    beforeEach( () => {
        cy.reload();
        loginPage.login({username: 'Jasmin', password: '$z6n&0PkZl$G2lIx3mHuvtlA'});
    })
    
    it('Verify sections of Dashboard page are loaded properly', () => {
        dashboardPage.adminBar.shouldBeVisible();
        dashboardPage.navigation.shouldBeVisible();
        dashboardPage.main.shouldBeVisible();
    })

    it('Verify General settings page is loaded properly', () => {
        dashboardPage.getNavigation().settings.general.navigate();
        generalSettingsPage.header.shouldHeaderExist();
        generalSettingsPage.shouldDestinationIsCorrect({path: 'options-general.php'});
    })

    it('Verify Advanced - Ads doesn not contain ads', () => {
        dashboardPage.getNavigation().advancedAds.ads.navigate();
        adsPage.shouldDestinationIsCorrect({path: 'post_type=advanced_ads'});
        adsPage.shouldNotContainsAds();
    })
})
