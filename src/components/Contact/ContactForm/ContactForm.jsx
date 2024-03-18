import { Component } from "react";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSave() {
        
    }

    handleCancel() {

    }

    render () {
        return (
            <div className="popupWrapper">
                <div className="contactForm">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                    <input type="text" placeholder="Phone number"/>
                    <div className="btnGroup">
                        <button type="button" className="btn green" onClick={this.handleSave}>Save</button>
                        <button type="button" className="btn red" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;