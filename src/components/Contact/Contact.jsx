import { Component } from "react";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

class Contact extends Component {
    render () {
        return (
            <>
                <ContactList />
                {/* <ContactForm />  */}
            </>
            
        );
    }

}

export default Contact;