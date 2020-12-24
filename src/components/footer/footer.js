import React, { Component } from 'react';
import {FaTwitter, FaFacebook, FaInstagram,FaGooglePlus} from 'react-icons/fa'
// import {TiSocialInstagramCircular} from ' react-icons/ti' ;
import './footer.css';

class Footer extends Component {
    render() {
        return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-sm-6 d-flex">
                        <ul className="d-flex">
                            <li className="">Home</li>
                            <li className="">About</li>
                            <li className="">Products</li>
                            <li className="">Home</li>
                        </ul>

                        <ul className="icons">
                        {/* <TiSocialInstagramCircular /> */}
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaGooglePlus />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-fluid footer-copyright">
                <div className="row">
                    <div className="col-md-10">
                        <p>Copyright ©2020 All rights reserved | This Website was made by Kelechi Ekebor</p>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
export default Footer;