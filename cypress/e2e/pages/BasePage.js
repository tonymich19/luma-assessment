import Header from './Header'
import Footer from './Footer';

class BasePage {
    constructor(){
        this.header = new Header();
        this.footer = new Footer();
    };

    visit(url) {
        cy.visit(url);
    };
}
export default BasePage;