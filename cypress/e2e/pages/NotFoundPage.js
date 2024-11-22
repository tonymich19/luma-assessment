import BasePage from "./BasePage";

class NotFoundPage extends BasePage {
    constructor(){
        super();
    }

    #elements = {
        pageNotFoundTitle : () => cy.get('.entry-title'),
        pageNotFoundMessage : () => cy.get('p'),
    };

    getPageNotFoundTitle() {
        return this.#elements.pageNotFoundTitle();
    };

    getPageNotFoundMessage() {
        return this.#elements.pageNotFoundMessage();
    }


}
export default new NotFoundPage();