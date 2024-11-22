/// <reference types="cypress" />
import homePage from "../pages/HomePage"
import accessAndRetentionPage from "../pages/AccessAndRetentionPage"
import registrationAndPrepPage from "../pages/RegistrationAndPrepPage"
import patientCommunicationPage from "../pages/PatientCommunicationPage"
import staffEfficiencyPage from "../pages/StaffEfficiencyPage"
import whoWeServePage from "../pages/WhoWeServePage"
import eHRIntegrationsPage from "../pages/EHRIntegrationsPage"

describe('open luma health url', () =>{

    before('Access base URL', () => {
        homePage.visit('/');
        
    })

    it('Homepage Validation', () => {

        //Verify that the homepage loads successfully.
        cy.url().should('eq', 'https://www.lumahealth.io/');

        //Check that main elements on the homepage (e.g., navigation bar, hero section, footer) are visible and functional.
        homePage.header.getNavBar().should('be.visible');
        homePage.getHeroSection().should('be.visible');
        homePage.footer.getFooter().should('be.visible');

    });
    
    it.only('Navigation Links', () => {

        //Test that all main navigation links direct the user to the correct pages.
        // Ensure that each page loads successfully and displays the expected content.

        // #Access and Retention Page
        homePage.header.switchToAcessAndRetentionPage();
        cy.url().should('eq', 'https://www.lumahealth.io/patient-success-platform/patient-access-and-retention/');
        accessAndRetentionPage.header.getNavBar().should('be.visible');
        accessAndRetentionPage.getAcessAndRetentionContentIFrame().should('be.visible');
        accessAndRetentionPage.footer.getFooter().should('be.visible');

        // #Registration and Prep Page
        accessAndRetentionPage.header.switchToRegistrationAndPrepPage();
        cy.url().should('eq', 'https://www.lumahealth.io/patient-success-platform/patient-registration/');
        registrationAndPrepPage.header.getNavBar().should('be.visible');
        registrationAndPrepPage.getRegistrationAndPrepIFrame().should('be.visible');
        registrationAndPrepPage.footer.getFooter().should('be.visible');

        // #Patient Communication Page
        registrationAndPrepPage.header.switchToPatientCommunicationPage();
        cy.url().should('eq', 'https://www.lumahealth.io/patient-success-platform/patient-communication/');
        patientCommunicationPage.header.getNavBar().should('be.visible');
        patientCommunicationPage.getPatientCommunicationIFrame().should('be.visible');
        patientCommunicationPage.footer.getFooter().should('be.visible');

        // #Staff Efficiency Page
        patientCommunicationPage.header.switchToStaffEfficiencyPage();
        cy.url().should('eq', 'https://www.lumahealth.io/patient-success-platform/staff-efficiency/');
        staffEfficiencyPage.header.getNavBar().should('be.visible');
        staffEfficiencyPage.getStaffEffiencyIFrame().should('be.visible');
        staffEfficiencyPage.footer.getFooter().should('be.visible');

        // #Who We Serve
        staffEfficiencyPage.header.switchToWhoWeServePage();
        cy.url().should('eq', 'https://www.lumahealth.io/who-we-serve/');
        whoWeServePage.header.getNavBar().should('be.visible');
        whoWeServePage.getWhoWeServeIFrame().should('be.visible');
        whoWeServePage.footer.getFooter();
        
        // #EHR Integrations
        whoWeServePage.header.switchToEHRIntegrationsPage();
        cy.url().should('eq', 'https://www.lumahealth.io/integrations-2/');
        eHRIntegrationsPage.header.getNavBar().should('be.visible');
        eHRIntegrationsPage.getEHRIntegrationsIFrame().should('be.visible');
        eHRIntegrationsPage.footer.getFooter().should('be.visible');

        

    })


})


