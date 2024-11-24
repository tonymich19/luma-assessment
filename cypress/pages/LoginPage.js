class LoginPage {

    #elements = {
        welcomeLogin: () => cy.get('.jss27'),
    }

    getPageContent() {
        return this.#elements.welcomeLogin();
    }

}
export default new LoginPage();