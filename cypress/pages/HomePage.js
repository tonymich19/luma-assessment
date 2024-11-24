import BasePage from "./BasePage";

class HomePage extends BasePage {
    constructor(){
        super();
    }

    #elements = {
        heroSectionSpace : () => cy.get('.hero-full-width-image-section'),
    };

    getPageContent() {
        return this.#elements.heroSectionSpace();
    };

    visit(url) {
        cy.visit(url,  {
            failOnStatusCode: false,
          });      
    };

}

export default new HomePage();
