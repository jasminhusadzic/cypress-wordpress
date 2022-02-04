
export class Navigation {
    
    settings = {
        
       general: {

            navigate: () => {
                this.settings.settingsTab
                    .should('be.visible')
                    .click();
            },

            get generalTab() {
                return cy.contains('.wp-first-item .current', 'General');
            }
        },

        get settingsTab () {
            return cy.contains('.wp-menu-name', 'Settings');
        }
    }
    
    advancedAds = {

        ads: {
            navigate: () => {
                this.advancedAds.advancedAdsTab
                    .should('be.visible')
                    .click();
                this.advancedAds.ads.adsTab
                    .should('be.visible')
                    .click();
                
            },
            
            get adsTab() {
                return cy.get('ul.wp-submenu a[href="edit.php?post_type=advanced_ads"]');
            }
        },
        
        get advancedAdsTab() {
            return cy.contains('.wp-menu-name', 'Advanced Ads');
        }
    }
}
