import { Component } from "react";
import style from '../Contact/Contact.module.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.currentId = props.currentId;
        this.addContact = props.addContact;
        this.state ={
            newContact: {
                id: '',
                firstName: '',
                lastName: '',
                phone: ''
            },
            formHidden: true
        }

        this.handleShowForm = this.handleShowForm.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        // this.validateFirstName = this.validateFirstName.bind(this);
        // this.validateLastName = this.validateLastName.bind(this);
        // this.validatePhone = this.validatePhone.bind(this);
    }

    handleShowForm() {
        this.setState({formHidden: false});
    }

    handleChange(event, marker) {
        switch(marker) {
            case 'firstName': 
                this.setState(prevState => ({
                    newContact: {
                        ...prevState.newContact,
                        firstName: event.target.value
                    }
                })); 
            break;

            case 'lastName': 
                this.setState(prevState => ({
                    newContact: {
                        ...prevState.newContact,
                        lastName: event.target.value
                    }
                })); 
            break;

            case 'phone': 
                this.setState(prevState => ({
                    newContact: {
                        ...prevState.newContact,
                        phone: event.target.value
                    }
                })); 
            break;

            default: break;
        }
    }

    handleSave() {
        if (this.validateFirstName() && this.validateLastName() && this.validatePhone())
        {
            this.setState(prevState => ({
                newContact: {
                ...prevState.newContact,
                id: this.currentId+1
                }
            })); 
            this.addContact(this.state.newContact);
            this.setState({formHidden: true});
            this.setState({
                newContact: {
                    firstName: '',
                    lastName: '',
                    phone: ''
                },
            })
        }
    }

    validateFirstName() {
        if (this.state.newContact.firstName) return true;
    }

    validateLastName() {
        if (this.state.newContact.lastName) return true;
    }

    validatePhone() {
        if (this.state.newContact.phone) return true;
    }

    handleCancel() {
        this.setState({formHidden: true});
    }

    render() {
        return(
            <>
                <button className={style.btn} onClick={this.handleShowForm}>Add contact</button>

                <div className={`${this.state.formHidden ? style.hidden : ''} ${style.popupWrapper}`}>
                    <div className={style.contactForm}>
                        <input 
                            type="text" 
                            placeholder="First name" 
                            onChange={(event) => this.handleChange(event,'firstName')} 
                            value={this.state.newContact.firstName}
                            className={style.textInput}
                        />
                        <input 
                            type="text" 
                            placeholder="Last name" 
                            onChange={(event) => this.handleChange(event, 'lastName')} 
                            value={this.state.newContact.lastName}
                            className={style.textInput}
                        />
                        <input 
                            type="text" 
                            placeholder="Phone number" 
                            onChange={(event) => this.handleChange(event, 'phone')} 
                            value={this.state.newContact.phone}
                            className={style.textInput}
                        />
                        <div className={style.btnGroup}>
                            <button type="button" className={`${style.btn} ${style.green}`} onClick={this.handleSave}>Save</button>
                            <button type="button" className={`${style.btn} ${style.red}`} onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactForm;