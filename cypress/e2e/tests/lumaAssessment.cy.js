/// <reference types="cypress" />
import HomePage from "../pages/HomePage"

describe('open luma health url', () =>{
    const homePage = new HomePage();

    it('Homepage Validation', () => {

        homePage.visit('/');
        //Verify that the homepage loads successfully.
        cy.url().should('eq', 'https://www.lumahealth.io/');

        //Check that main elements on the homepage (e.g., navigation bar, hero section, footer) are visible and functional.
        homePage.header.getNavBar().should('be.visible');
        homePage.getHeroSection().should('be.visible');
        homePage.footer.getFooter().should('be.visible');

    })
})