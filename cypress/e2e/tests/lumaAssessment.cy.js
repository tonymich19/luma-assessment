/// <reference types="cypress" />
import pages from "../../pages/pages";
import { urls } from "../../fixtures/testData";
import { validatePage } from "../../utils/pageValidation";

describe('Luma Health Navigation Tests', () => {
    beforeEach('Access base URL', () => {
        const viewportWidth = Cypress.env('viewportWidth') || Cypress.config('viewportWidth');
        const viewportHeight = Cypress.env('viewportHeight') || Cypress.config('viewportHeight');

        cy.viewport(Number(viewportWidth), Number(viewportHeight));
        cy.log(`Running tests in resolution: ${viewportWidth}x${viewportHeight}`);
        pages.homePage.visit('/');
    });

    it('Homepage Validation', () => {
        //Verify that the homepage loads successfully. 
        //Check that main elements on the homepage are visible and functional.
        validatePage(pages.homePage, urls.home);
    });

    it('Navigation Links', () => {

        //Test that all main navigation links direct the user to the correct pages. 
        //Ensure that each page loads uccessfully and displays the expected content.
        const navigationSteps = [
            { page: pages.accessAndRetentionPage, url: urls.patientAccessAndRetention, linkName: 'accessAndRetention' },
            { page: pages.registrationAndPrepPage, url: urls.patientRegistration, linkName: 'registrationAndPrep' },
            { page: pages.patientCommunicationPage, url: urls.partientCommunication, linkName: 'patientCommunication' },
            { page: pages.staffEfficiencyPage, url: urls.staffEffiency, linkName: 'staffEfficiency' },
            { page: pages.whoWeServePage, url: urls.whoWeServe, linkName: 'whoWeServe' },
            { page: pages.eHRIntegrationsPage, url: urls.eHRIntegrations, linkName: 'ehrIntegrations' },
            { page: pages.learnHUBPage, url: urls.learnHUB, linkName: 'learnHUB' },
            { page: pages.aboutUsPage, url: urls.aboutUs, linkName: 'aboutUs' },
            { page: pages.getADemoPage, url: urls.getADemo, linkName: 'getADemo' },
            { page: pages.logInPage, url: urls.logIn, linkName: 'login' },
        ];

        pages.homePage.header.navigateTo(navigationSteps[0].linkName)
            .then(() => {
                validatePage(navigationSteps[0].page, navigationSteps[0].url);
            });

        for (let i = 1; i < navigationSteps.length; i++) {
            const previousStep = navigationSteps[i - 1];
            const currentStep = navigationSteps[i];

            previousStep.page.header.navigateTo(currentStep.linkName)
                .then(() => {
                    validatePage(currentStep.page, currentStep.url, i === navigationSteps.length - 1 ? ['welcomeLogin'] : []);
                });
        }
    });

    it('404 Page Validation', () => {

        //Verify that navigating to a non-existent page returns a 404 error. 
        //Check that the 404 error page displays correctly with the expected messaging
        pages.homePage.visit('/nonexistentpage');
        pages.notFoundPage
            .getPageNotFoundTitle()
            .should('be.visible')
            .and('contain.text', 'Page Not Found');

        pages.notFoundPage
            .getPageNotFoundMessage()
            .should('be.visible')
            .and('contain.text', 'The page you were looking for could not be found.');

    });
});
