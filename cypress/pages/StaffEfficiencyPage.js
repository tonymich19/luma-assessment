import BasePage from "./BasePage";

class StaffEfficiencyPage extends BasePage {
    constructor(){
        super();
    };

    #elements = {
        staffEffiencyIFrame : () => cy.get('.iframe-full-height'),
    }

    getPageContent() {
        return this.#elements.staffEffiencyIFrame();
    }

}
export default new StaffEfficiencyPage();