class Header {
    
    #elements = {
        navBar: () => cy.get('#navbar'),
        navBarAccessAndRetentionLink: () => cy.get('#navbar').contains('Access & Retention'),
        navBarRegistrationAndPrepLink: () => cy.get('#navbar').contains('Registration and Prep'),
        navBarPatientCommunicationLink: () => cy.get('#navbar').contains('Patient Communication'),
        navBarStaffEfficiencyLink: () => cy.get('#navbar').contains('Staff Efficiency'),
        navBarWhoWeServeLink: () => cy.get('.mobile-accordion ul .title.header-title-purple').contains('Who We Serve'),
        navBarEHRIntegrationsLink: () => cy.get('#navbar').contains('EHR Integrations'),
        navBarLearnHUBLink: () => cy.get('#navbar').contains('Learn Hub'),
        navBarAboutUsLink: () => cy.get('.main-menu-v2 > .mobile-accordion:last-child ul .title.header-title').contains('About us'),
        navBarGetADemoLink: () => cy.get('#navbar > .actions > .primary'),
        navBarLoginLink: () => cy.get('#header_login'),
    };

    getNavigationLink(linkName) {
        const links = {
            accessAndRetention: this.#elements.navBarAccessAndRetentionLink,
            registrationAndPrep: this.#elements.navBarRegistrationAndPrepLink,
            patientCommunication: this.#elements.navBarPatientCommunicationLink,
            staffEfficiency: this.#elements.navBarStaffEfficiencyLink,
            whoWeServe: this.#elements.navBarWhoWeServeLink,
            ehrIntegrations: this.#elements.navBarEHRIntegrationsLink,
            learnHUB: this.#elements.navBarLearnHUBLink,
            aboutUs: this.#elements.navBarAboutUsLink,
            getADemo: this.#elements.navBarGetADemoLink,
            login: this.#elements.navBarLoginLink,
        };

        return links[linkName]();
    }

    navigateTo(linkName) {
        const link = this.getNavigationLink(linkName);
        return link.invoke('removeAttr', 'target').click({ force: true }); 
    }

    getNavBar() {
        return this.#elements.navBar();
    }

}

export default Header;
