import BasePage from "./BasePage";

class AboutUSPage extends BasePage{
    constructor(){
        super();
    };

    #elements = {
        aboutUsPageTitle : () => cy.get('h1'),
    }

    getPageContent() {
        return this.#elements.aboutUsPageTitle();
    }

}
export default new AboutUSPage();