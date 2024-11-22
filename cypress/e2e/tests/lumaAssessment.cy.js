/// <reference types="cypress" />
import homePage from "../pages/HomePage"
import accessAndRetentionPage from "../pages/AccessAndRetentionPage"

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
        homePage.header.switchToAcessAndRetentionLink();
        accessAndRetentionPage.header.getNavBar().should('be.visible');
        accessAndRetentionPage.getAcessAndRetentionContentIFrame().should('be.visible');
        accessAndRetentionPage.footer.getFooter().should('be.visible');

    })


})


