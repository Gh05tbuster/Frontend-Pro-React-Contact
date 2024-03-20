import { Component } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import style from './Contact.module.css';
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state ={
            contacts: [],
            idCount: 0,
        }

        this.addContact = this.addContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            res.forEach(contact => {
                const obj = {
                    id: contact.id,
                    firstName: contact.name.split(' ')[0],
                    lastName: contact.name.split(' ')[1],
                    phone: contact.phone
                }
                this.addContact(obj);
            });
        })
    }

    // increaseIdCount(n) {
    //     this.setState({idCount: this.state.idCount + n})
    // }

    addContact(newContact) {
        this.setState({idCount: this.state.idCount+1});
        this.setState({contacts: [...this.state.contacts, newContact]})
        // this.setState(prevState => ({
        //     idCount: prevState.idCount + 1,
        //     contacts: [...prevState.contacts, newContact]
        // }));
    }

    deleteContact(id) {
        console.log(this.state.contacts.filter(el => el.id !== id));
        this.setState({contacts: this.state.contacts.filter(el => el.id !== id)})
    }

    render() {
        return (
            <>
                <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} />
                <ContactForm currentId={this.state.idCount} addContact={this.addContact}/>
            </>
        );
    }
}

export default Contact;