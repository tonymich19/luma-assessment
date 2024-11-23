/// <reference types="cypress" />
import pages from "../pages/pages"; // Centraliza todas as páginas
import { urls } from "../../fixtures/testData"; // Importa URLs diretamente
import { validatePage } from "../../utils/pageValidation"; // Função utilitária para validação de páginas

describe('Luma Health Navigation Tests', () => {
    beforeEach('Access base URL', () => {
        pages.homePage.visit('/');
    });

    it('Homepage Validation', () => {
        validatePage(pages.homePage, urls.home, ['heroSection']);
    });

    it.only('Navigation Links', () => {
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
        ];

        // Realiza a primeira navegação manualmente
        pages.homePage.header.navigateTo(navigationSteps[0].linkName);
        validatePage(navigationSteps[0].page, navigationSteps[0].url);

        // Realiza as navegações subsequentes
        for (let i = 1; i < navigationSteps.length; i++) {
            const previousStep = navigationSteps[i - 1];
            const currentStep = navigationSteps[i];

            previousStep.page.header.navigateTo(currentStep.linkName);
            validatePage(currentStep.page, currentStep.url, i === navigationSteps.length - 1 ? ['welcomeLogin'] : []);
        }
    });

    it('404 Page Validation', () => {
        pages.homePage.visit('/nonexistentpage');
        // Validações específicas da página 404
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
