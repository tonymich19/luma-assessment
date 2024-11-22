import BasePage from "./BasePage";

class LoginPage extends BasePage {
        constructor(){
            super();
        };
    
        #elements = {
            welcomeLogin : () => cy.get('.jss27')
        }
    
        getWelcomeLogin(){
            return this.#elements.welcomeLogin();
        }
    
    }
    export default new LoginPage();