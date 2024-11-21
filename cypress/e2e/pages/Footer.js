class Footer {

    #elements = {
        footerContainer: () => cy.get('footer > .container'),
    }

    getFooter() { 
        return this.#elements.footerContainer()
    };

}
export default Footer;