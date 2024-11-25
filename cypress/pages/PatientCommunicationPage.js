import BasePage from "./BasePage";

class PatientCommunicationPage extends BasePage {
    constructor(){
        super();
    };

    #elements = {
        patientCommunicationIFrame : () => cy.get('.iframe-full-height'),
    }

    getPageContent() {
        return this.#elements.patientCommunicationIFrame();
    }

}
export default new PatientCommunicationPage();