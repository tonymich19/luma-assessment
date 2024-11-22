import BasePage from "./BasePage";

class AccessAndRetentionPage extends BasePage {
    constructor(){
        super();
    }

    #element = {
        accessAndRetentionIFrame : () => cy.get('.iframe-full-height'),
    };

    getAcessAndRetentionContentIFrame() {
        return this.#element.accessAndRetentionIFrame();
    }

}
export default new AccessAndRetentionPage();