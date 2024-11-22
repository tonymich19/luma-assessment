import BasePage from "./BasePage";

class GetADemoPage extends BasePage {
    constructor(){
        super();
    };

    #elements = {
        getADemoIFrame : () => cy.get('.iframe-full-height')
    }

    getGetADemoIFrame(){
        return this.#elements.getADemoIFrame();
    }

}
export default new GetADemoPage();