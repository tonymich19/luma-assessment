/// <reference types="cypress" />
import homePage from "../pages/HomePage"
import accessAndRetentionPage from "../pages/AccessAndRetentionPage"
import registrationAndPrepPage from "../pages/RegistrationAndPrepPage"
import patientCommunicationPage from "../pages/PatientCommunicationPage"
import staffEfficiencyPage from "../pages/StaffEfficiencyPage"
import whoWeServePage from "../pages/WhoWeServePage"
import eHRIntegrationsPage from "../pages/EHRIntegrationsPage"
import learnHUBPage from "../pages/LearnHUBPage"
import aboutUsPage from "../pages/AboutUsPage"
import getADemoPage from "../pages/GetADemoPage"
import logInPage from "../pages/LogInPage"
import notFoundPage from "../pages/NotFoundPage"

describe('open luma health url', () =>{
    let data;
    
    beforeEach('Access base URL', () => {
        homePage.visit('/');
        cy.fixture('testData').then((testData) => {
            data = testData;
        })
        
    })

    it('Homepage Validation', () => {

        //Verify that the homepage loads successfully.
        cy.url().should('eq', data.urls.home);

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
        cy.url().should('eq', data.urls.patientAccessAndRetention);
        accessAndRetentionPage.header.getNavBar().should('be.visible');
        accessAndRetentionPage.getAcessAndRetentionContentIFrame().should('be.visible');
        accessAndRetentionPage.footer.getFooter().should('be.visible');

        // #Registration and Prep Page
        accessAndRetentionPage.header.switchToRegistrationAndPrepPage();
        cy.url().should('eq', data.urls.patientRegistration);
        registrationAndPrepPage.header.getNavBar().should('be.visible');
        registrationAndPrepPage.getRegistrationAndPrepIFrame().should('be.visible');
        registrationAndPrepPage.footer.getFooter().should('be.visible');

        // #Patient Communication Page
        registrationAndPrepPage.header.switchToPatientCommunicationPage();
        cy.url().should('eq', data.urls.partientCommunication);
        patientCommunicationPage.header.getNavBar().should('be.visible');
        patientCommunicationPage.getPatientCommunicationIFrame().should('be.visible');
        patientCommunicationPage.footer.getFooter().should('be.visible');

        // #Staff Efficiency Page
        patientCommunicationPage.header.switchToStaffEfficiencyPage();
        cy.url().should('eq', data.urls.staffEffiency);
        staffEfficiencyPage.header.getNavBar().should('be.visible');
        staffEfficiencyPage.getStaffEffiencyIFrame().should('be.visible');
        staffEfficiencyPage.footer.getFooter().should('be.visible');

        // #Who We Serve Page
        staffEfficiencyPage.header.switchToWhoWeServePage();
        cy.url().should('eq', data.urls.whoWeServe);
        whoWeServePage.header.getNavBar().should('be.visible');
        whoWeServePage.getWhoWeServeIFrame().should('be.visible');
        whoWeServePage.footer.getFooter();
        
        // #EHR Integrations Page
        whoWeServePage.header.switchToEHRIntegrationsPage();
        cy.url().should('eq', data.urls.eHRIntegrations);
        eHRIntegrationsPage.header.getNavBar().should('be.visible');
        eHRIntegrationsPage.getEHRIntegrationsIFrame().should('be.visible');
        eHRIntegrationsPage.footer.getFooter().should('be.visible');

        // #Learn HUB Page
        eHRIntegrationsPage.header.switchToLearnHUBPage();
        cy.url().should('eq', data.urls.learnHUB);
        learnHUBPage.header.getNavBar().should('be.visible');
        learnHUBPage.getLearnHUBPageTitle().should('be.visible');
        learnHUBPage.footer.getFooter().should('be.visible');

        // #About Us Page
        learnHUBPage.header.switchToAboutUSPage();
        cy.url().should('eq', data.urls.aboutUs);
        aboutUsPage.header.getNavBar().should('be.visible');
        aboutUsPage.getAboutUsPageTitle().should('be.visible');
        aboutUsPage.footer.getFooter().should('be.visible');

        // #Get a Demo Page
        aboutUsPage.header.switchToGetADemoPage();
        cy.url().should('eq', data.urls.getADemo);
        getADemoPage.header.getNavBar().should('be.visible');
        getADemoPage.getGetADemoIFrame().should('be.visible');
        getADemoPage.footer.getFooter().should('be.visible');

        // #Login Page
        getADemoPage.header.switchToLoginPage();
        cy.url().should('eq', data.urls.logIn);
        logInPage.getWelcomeLogin().should('be.visible');

    })

    it('Contact Form', () => {

        //Verify that navigating to a non-existent page returns a 404 error
        //Check that the 404 error page displays correctly with the expected messaging.
        homePage.visit("/nonexistentpage");
        notFoundPage.header.getNavBar().should('be.visible');
        notFoundPage.getPageNotFoundTitle()
                        .should('be.visible')
                        .and('contain.text', 'Page Not Found');
        notFoundPage.getPageNotFoundMessage()
                        .should('be.visible')
                        .and('contain.text', 'The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.');
        notFoundPage.footer.getFooter().should('be.visible');

    })

})


