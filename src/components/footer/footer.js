import React, { Component } from 'react';
import {FaTwitter, FaFacebook, FaInstagram,FaGooglePlus} from 'react-icons/fa';
// import {Link, BrowserRouter } from 'react-router-dom';
import './footer.css';

class Footer extends Component {

    handleRoutes = (path) => {
        console.log('value of history',this.props)
        this.props.history.push(path)
    }

    render() {
        return(
        <>
           <div className="container-fluid footer-container d-flex justify-content-around py-2">
                <div className="row py-5" id="Nav">
                    <div className="p-3">
                        <div>NateKings</div>
                    </div>
                   
                    <div className="mx-5">
                        <ul className="custom-menu p-3 mx-5 mb-0">
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/home")} >Home</div>
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/about")} >About</div>
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/products")} >Products</div>
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/contact")} >Contact</div>
                        </ul>
                    </div>

                    <div>
                        <ul className="p-3 mb-0">
                            <FaTwitter className="socials-icons mx-2" />
                            <FaFacebook className="socials-icons mx-2" />
                            <FaInstagram className="socials-icons mx-2" />
                            <FaGooglePlus className="socials-icons mx-2" />
                        </ul>
                    </div>
                </div>

            </div>

            <div className="container-fluid footer-copyright">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center py-4">Copyright ©2020 All rights reserved | This Website was made by Kelechi Ekebor</p>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
export default Footer;