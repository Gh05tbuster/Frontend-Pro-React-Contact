import { Component } from "react";
import style from '../Contact/Contact.module.css';

class ContactRecord extends Component {
    constructor(props) {
        // super({id, firstName, lastName, phone, handleDeleteRow});
        super(props);

        this.id = +props.contact.id;
        this.firstName = props.contact.firstName;
        this.lastName = props.contact.lastName;
        this.phone = props.contact.phone;
        this.handleDeleteRow = props.handleDeleteRow;
    }
    
    render () {
        return (
            <tr key={this.id}>
                <td>{this.firstName}</td>
                <td>{this.lastName}</td>
                <td>{this.phone}</td>
                <td className={style.redX} onClick={() => this.handleDeleteRow(this.id)}>×</td>
            </tr>
        );
    } 
}

export default ContactRecord;