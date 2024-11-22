import Header from './components/Header'
import Footer from './components/Footer';

class BasePage {
    constructor(){
        this.header = new Header();
        this.footer = new Footer();
    };

}
export default BasePage;