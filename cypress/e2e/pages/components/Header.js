class Header {
    
    #elements = {
        navBar : () => cy.get('#navbar'),
        navBarLogo : () => cy.get('.navbar-logo > img'),
        navBarPlatformLink : () => cy.get('#navbar').find('li.mobile-accordion').first(),
        navBarAccessAndRetention : () => cy.get('#navbar').contains('Access & Retention'),
        navBarWhoWeServeLink : () => cy.get('#navbar').find('.main-menu-v2 > :nth-child(2)'),
        navBarIntegrationsLink : () => cy.get('#navbar').find('.main-menu-v2 > :nth-child(3)'),
        navBarLearnLink : () => cy.get('#navbar').find('.main-menu-v2 > :nth-child(4)'),
        navBarAboutUsLink : () => cy.get('#navbar').find('.main-menu-v2 > :nth-child(5)'),

    };

    getNavBar() { 
        return this.#elements.navBar();
    };

    switchToAcessAndRetentionLink() {
        return this.#elements.navBarAccessAndRetention()
                                .click({force: true});
    };


    // getNavBarLogo() { return this.#elements.navBarLogo()};
    // mouseOverNavBarPlatformLink() { return this.#elements.navBarPlatformLink()};
    // getNavBarWhoWeServeLink() { return this.#elements.navBarWhoWeServeLink()};
    // getNavBarIntegrationsLink() { return this.#elements.navBarIntegrationsLink()};
    // getNavBarLearnLink() { return this.#elements.navBarLearnLink()};
    // getNavBarAboutUsLink() { return this.#elements.navBarAboutUsLink()};

}

export default Header;