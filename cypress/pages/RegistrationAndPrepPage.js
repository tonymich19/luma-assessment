import BasePage from "./BasePage";


class RegistrationAndPrepPage extends BasePage {
    constructor(){
        super();
    }

    #elements = {
        registrationAndPrepIFrame : () => cy.get('.iframe-full-height'),
    };

    getPageContent() {
        return this.#elements.registrationAndPrepIFrame();
    }

}
export default new RegistrationAndPrepPage();