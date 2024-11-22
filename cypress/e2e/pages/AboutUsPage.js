import BasePage from "./BasePage";

class AboutUSPage extends BasePage{
    constructor(){
        super();
    };

    #elements = {
        aboutUsPageTitle : () => cy.get('h1'),
    }

    getAboutUsPageTitle(){
        return this.#elements.aboutUsPageTitle();
    }

}
export default new AboutUSPage();