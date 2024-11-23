export const validatePage = (page, url) => {
    cy.url().should('eq', url);
    page.header.getNavBar().should('be.visible');
    page.footer.getFooter().should('be.visible');
};