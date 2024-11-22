class Header {
    
    #elements = {
        navBar : () => cy.get('#navbar'),
        navBarLogo : () => cy.get('.navbar-logo > img'),
        navBarPlatformLink : () => cy.get('#navbar').find('li.mobile-accordion').first(),
        navBarAccessAndRetentionLink : () => cy.get('#navbar').contains('Access & Retention'),
        navBarRegistrationAndPrepLink : () => cy.get('#navbar').contains('Registration and Prep'),
        navBarPatientCommunicationLink : () => cy.get('#navbar').contains('Patient Communication'),
        navBarStaffEffieciencyLink : () => cy.get('#navbar').contains('Staff Efficiency'),
        navBarWhoWeServeLink : () => cy.get('.mobile-accordion ul .title.header-title-purple').contains('Who We Serve'),
        navBarEHRIntegrationsLink : () => cy.get('#navbar').contains('EHR Integrations'),
    };

    getNavBar() { 
        return this.#elements.navBar();
    };

    switchToAcessAndRetentionPage() {
        return this.#elements.navBarAccessAndRetentionLink()
                                .click({force: true});
    };

    switchToRegistrationAndPrepPage() {
        return this.#elements.navBarRegistrationAndPrepLink()
                                .click({force: true});
    };

    switchToPatientCommunicationPage() {
        return this.#elements.navBarPatientCommunicationLink()
                                .click({force: true});
    }

    switchToStaffEfficiencyPage() {
        return this.#elements.navBarStaffEffieciencyLink()
                                .click({force: true});
    }

    switchToWhoWeServePage() {
        return this.#elements.navBarWhoWeServeLink()
                                .click({force: true});
    }

    switchToEHRIntegrationsPage() {
        return this.#elements.navBarEHRIntegrationsLink()
                                .click({force: true});
    }   

}
export default Header;