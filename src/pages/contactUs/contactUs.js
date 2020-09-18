import React, { Component } from 'react';
import './contact.css';

// Using class Component because we need to set state of user data in contact us

class ContactUs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            number: '',
            email: '',
            message: ''
        };
    }

    render() {
    return(
        <div className="container contact-container">
            <form className="row form-container">
                <div className="col-12 form-group ">
                    <label>Full Name</label>
                    <input type='text' id="fullName" value="" className="name-field" />
                </div>
                <div className="col-12 form-group">
                    <label>Number</label>
                    <input type='number' id="number" value="" className="number-field" />
                </div>
                <div className="col-12 form-group">
                    <label>Email</label>
                    <input type='email' id="email" value="" className="email-field" />
                </div>
                <div className="col-12 form-group meaasge-field">
                    <label>Message</label>
                    <input type='text-area' id="message" value="" className="text-field" />
                </div>
                    {/* <button type='submit'>Contact us</button> */}
            </form>
        </div>
    )
}

}
export default ContactUs;