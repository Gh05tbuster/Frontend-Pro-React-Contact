import { Component } from "react";

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state ={
            contacts: []
        }

        this.handleDeleteRow = this.handleDeleteRow.bind(this);
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
            this.setState({contacts: res});
        })
    }

    handleDeleteRow(id) {
        this.setState({contacts: this.state.contacts.filter(el => el.id !== id)})
    }

    render () {
        return (
            <table className="contactTable">
                <tbody>
                    {this.state.contacts.map(contact => (
                        <tr >
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                            <td className="delRow" key={contact.id} onClick={() => this.handleDeleteRow(contact.id)}>×</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        );
    }
}

export default ContactList;