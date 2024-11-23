class Header {
    // Element selectors centralizados para navegação
    #elements = {
        navBar: () => cy.get('#navbar'),
        navBarLogo: () => cy.get('.navbar-logo > img'),
        navLinks: {
            platform: () => cy.get('#navbar').find('li.mobile-accordion').first(),
            accessAndRetention: () => cy.get('#navbar').contains('Access & Retention'),
            registrationAndPrep: () => cy.get('#navbar').contains('Registration and Prep'),
            patientCommunication: () => cy.get('#navbar').contains('Patient Communication'),
            staffEfficiency: () => cy.get('#navbar').contains('Staff Efficiency'),
            whoWeServe: () => cy.get('.mobile-accordion ul .title.header-title-purple').contains('Who We Serve'),
            ehrIntegrations: () => cy.get('#navbar').contains('EHR Integrations'),
            learnHUB: () => cy.get('.mobile-accordion .learn-hub').contains('Learn Hub'),
            aboutUs: () => cy.get('.main-menu-v2 > .mobile-accordion:last-child ul .title.header-title').contains('About us'),
            getADemo: () => cy.get('#navbar > .actions > .primary'),
            logIn: () => cy.get('#header_login'),
        }
    };

    getNavBar() {
        return this.#elements.navBar();
    }

    navigateTo(linkName) {
        
        const link = this.#elements.navLinks[linkName];
        if (typeof link === 'function') {
            link().click({ force: true });
        } else {
            throw new Error(`Link '${linkName}' não está definido no Header. Links disponíveis: ${Object.keys(this.#elements.navLinks).join(', ')}`);
        }
    }

    navigateToLogIn() {
        this.#elements.navLinks.logIn().invoke('removeAttr', 'target').click({ force: true });
    }
}

export default Header;
