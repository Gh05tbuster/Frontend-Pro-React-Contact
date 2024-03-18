import { Component } from "react";

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state ={
            contacts: [],
            idCount: 0,
            newContact: {
                id: 0,
                firstName: '',
                lastName: '',
                phone: ''
            }
        }

        this.handleDeleteRow = this.handleDeleteRow.bind(this);
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
                // this.setState({contacts: [...this.state.contacts, obj]});
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

    handleChange(event, marker) {
        switch(marker) {
            case 'fn': this.setState(prevState => ({
                newContact: {
                  ...prevState.newContact,
                  firstName: event.target.value
                }
              })); 
              break;
            case 'ln': this.setState(prevState => ({
                newContact: {
                  ...prevState.newContact,
                  lastName: event.target.value
                }
              })); 
              break;
            case 'phn': this.setState(prevState => ({
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
        this.setState(prevState => ({
            newContact: {
              ...prevState.newContact,
              id: this.state.idCount+1
            }
        })); 
        this.setState({idCount: this.state.idCount+1})
        this.setState({contacts: [...this.state.contacts, this.state.newContact]})
    }

    handleCancel() {

    }

    render () {
        return (
            <div className="contact">
                <table className="contactTable">
                    <tbody>
                        {this.state.contacts.map(contact => (
                            <tr>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.phone}</td>
                                <td className="delRow" key={contact.id} onClick={() => this.handleDeleteRow(contact.id)}>×</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="btn">Add contact</button>

                <div className="popupWrapper hidden">
                <div className="contactForm">
                    <input type="text" placeholder="First name" onBlur={(event) => this.handleChange(event,'fn')}/>
                    <input type="text" placeholder="Last name" onBlur={(event) => this.handleChange(event, 'ln')}/>
                    <input type="text" placeholder="Phone number" onBlur={(event) => this.handleChange(event, 'phn')}/>
                    <div className="btnGroup">
                        <button type="button" className="btn green" onClick={this.handleSave}>Save</button>
                        <button type="button" className="btn red" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ContactList;