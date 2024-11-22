import BasePage from "./BasePage";

class AccessAndRetentionPage extends BasePage {
    constructor(){
        super();
    }

    #elements = {
        accessAndRetentionIFrame : () => cy.get('.iframe-full-height'),
    };

    getAcessAndRetentionContentIFrame() {
        return this.#elements.accessAndRetentionIFrame();
    }

}
export default new AccessAndRetentionPage();