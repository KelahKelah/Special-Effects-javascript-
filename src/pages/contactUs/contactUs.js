import React, { Component } from 'react';
import {BsGeoAlt, BsPhone, BsEnvelope} from 'react-icons/bs'
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
    <>   
        <div className="container-fluid contact-container py-5">
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <h2 className="about-heading py-5">Contact Us</h2>
                </div>
            </div>
        </div> 

        <div className="container-fluid py-5">
            <div className="contact-row d-flex">
                <div className="contact-container1">
                    <div className="semi-container">
                        <div className="contact-item-wrapper my-5">
                            <h2>Contact Us</h2>
                        </div>
                        <div>
                            <div className="d-flex contact-item-wrapper my-5">
                                <BsGeoAlt />
                                <p className="mb-0 p-2">Ogbete market</p>
                            </div>
                            <div className="d-flex contact-item-wrapper my-5">
                                <BsPhone />
                                <p className="mb-0 p-2">+2349069249181</p>
                            </div>
                            <div className="d-flex contact-item-wrapper my-5">
                                <BsEnvelope />
                                <p className="mb-0 p-2">naetogodson@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <form className="row form-container d-flex">
                    <div className="col-md-6"></div>

                    <div className="col-md-6"> 
                        <div className="form-group ">
                            <label>Full Name</label>
                            <input type='text' id="fullName" value="" className="name-field" />
                        </div>
                        <div className="form-group">
                            <label>Number</label>
                            <input type='number' id="number" value="" className="number-field" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type='email' id="email" value="" className="email-field" />
                        </div>
                        <div className="form-group meaasge-field">
                            <label>Message</label>
                            <input type='text-area' id="message" value="" className="text-field" />
                        </div>

                        <button type="button" className="btn btn-outline-warning btn-lg m-5" >Explore</button>
                    </div>

                </form>


            </div>
        </div>

    </>
    )
}

}
export default ContactUs;