import BasePage from "./BasePage";

class HomePage extends BasePage {
    constructor(){
        super();
    }

    #elements = {
        heroSectionSpace : () => cy.get('.hero-full-width-image-section'),
    };

    getHeroSection() {
        return this.#elements.heroSectionSpace();
    };

    visit(url) {
        cy.visit(url);
    };

}

export default new HomePage();
