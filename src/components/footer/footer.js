import React, { Component } from 'react';
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';


class Footer extends Component {
    render() {
        return(
            <div className="container">
            <div className="row rowSix">
                <div className="col-md-6">Copyright MyPortfolio All Rights Reserved Designed by BootstrapMade/</div>
                <div className="col-md-6 socials d-flex">
                    <div><FaInstagram /></div>
                    <div><FaFacebook /></div>
                    <div><FaTwitter /></div>
                </div>
            </div>
        </div>
        )
    }
}
export default Footer;