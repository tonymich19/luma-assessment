import BasePage from "./BasePage";

class LearnHUBPage extends BasePage {
    constructor(){
        super();
    };

    #elements = {
        learnHUBPageTitle : () => cy.get('h1'),
    }

    getPageContent() {
        return this.#elements.learnHUBPageTitle();
    }

}
export default new LearnHUBPage();