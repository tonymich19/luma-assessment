export const validatePage = (page, url) => {
    cy.url().should('eq', url);
    
    if (page.getPageContent && typeof page.getPageContent === 'function') {
        page.getPageContent().should('be.visible');
    }

    if(url != 'https://next.lumahealth.io/login') {
        page.header.getNavBar().should('be.visible');    
        page.footer.getFooter().should('be.visible');
    }
};
