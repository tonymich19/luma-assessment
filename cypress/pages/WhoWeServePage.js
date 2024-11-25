import BasePage from "./BasePage";

class WhoWeServePage extends BasePage {
    constructor(){
        super();
    };

    #elements = {
        whoWeServeIFrame : () => cy.get('.iframe-full-height'),
    }

    getPageContent() {
        return this.#elements.whoWeServeIFrame();
    }

}
export default new WhoWeServePage();