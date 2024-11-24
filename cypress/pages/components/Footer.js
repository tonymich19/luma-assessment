class Footer {

    #elements = {
        footerContainer: () => cy.get('.footer-main-coontent'),
    }

    getFooter() { 
        cy.log('footer')
        return this.#elements.footerContainer()
    };

}
export default Footer;