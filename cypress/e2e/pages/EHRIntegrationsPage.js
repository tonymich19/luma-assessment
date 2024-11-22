import BasePage from "./BasePage";

class EHRIntegrationsPage extends BasePage {
    constructor(){
        super();
    };

    #elements = {
        eHRIntegrationsIFrame : () => cy.get('.iframe-full-height'),
    }

    getEHRIntegrationsIFrame(){
        return this.#elements.eHRIntegrationsIFrame();
    }

}
export default new EHRIntegrationsPage();