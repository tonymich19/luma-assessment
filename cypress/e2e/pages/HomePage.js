import BasePage from "./BasePage";

class HomePage extends BasePage {

    #elements = {
        heroSectionSpace : () => cy.get('.hero-full-width-image-section'),
    };

    getHeroSection() {
        return this.#elements.heroSectionSpace();
    };

}

export default HomePage;
