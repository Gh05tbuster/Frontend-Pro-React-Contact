import { Component } from "react";
import ContactRecord from "../ContactRecord/ContactRecord";
import style from '../Contact/Contact.module.css';

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.contacts = props.contacts;
        this.deleteContact = props.deleteContact;

        this.deleteRow = this.deleteRow.bind(this);
    }

    deleteRow(id) {
        this.deleteContact(id);
    }

    render () {
        if (this.contacts)
            return (
                <table className="contactTable">
                    <tbody>
                        {this.contacts.map(contact => (
                        // <tr key={contact.id}>
                        //     <td>{contact.firstName}</td>
                        //     <td>{contact.lastName}</td>
                        //     <td>{contact.phone}</td>
                        //     <td className={style.redX} onClick={() => this.deleteRow(contact.id)}>×</td>
                        // </tr>
                            <ContactRecord contact={contact} handleDeleteRow={this.deleteRow}/>
                        ))}
                    </tbody>
                </table>
            );
    }
}

export default ContactList;