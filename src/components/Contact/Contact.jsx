import { Component } from "react";
import style from './Contact.module.css';
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state ={
            contacts: [],
            idCount: 0,
            newContact: {
                id: '',
                firstName: '',
                lastName: '',
                phone: ''
            },
            formHidden: true
        }

        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleShowForm = this.handleShowForm.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            const arr =[];
            res.forEach(contact => {
                const obj = {
                    id: contact.id,
                    firstName: contact.name.split(' ')[0],
                    lastName: contact.name.split(' ')[1],
                    phone: contact.phone
                }
                arr.push(obj);
            });
            return arr;
        })
        .then(res => {
            this.setState({
                contacts: res,
                idCount: res.length
            });
        })
    }

    handleDeleteRow(id) {
        this.setState({contacts: this.state.contacts.filter(el => el.id !== id)})
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
        if (this.validateFirstName && this.validateLastName && this.validatePhone)
        {
            this.setState(prevState => ({
                newContact: {
                ...prevState.newContact,
                id: this.state.idCount+1
                }
            })); 
            this.setState({idCount: this.state.idCount+1})
            this.setState({contacts: [...this.state.contacts, this.state.newContact]})
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

    render () {
        return (
            <div className={style.contact}>
                <table className="contactTable">
                    <tbody>
                        {this.state.contacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.phone}</td>
                                <td className={style.redX} onClick={() => this.handleDeleteRow(contact.id)}>×</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

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
            </div>
        );
    }
}

export default Contact;