import React, {Component} from 'react';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import {FaShoppingCart, FaSearch, FaCaretDown} from 'react-icons/fa'
import './header.css';
// import Home from '../../pages/home/home';
// import AboutUs from '../../pages/aboutUs/aboutUs';
// import ContactUs from '../../pages/contactUs/contactUs';

class Header extends Component {
    // constructor(props) {
        
    // }

    render() {
        return(
            <div className="container-fluid header-container d-flex justify-content-around py-2">
                <div className="row" id="Nav">
                    <div className="p-3">
                        <div>Nate nateKings</div>
                    </div>
                    <div className="mx-5">
                        <ul className="custom-menu p-3 mx-5 mb-0">
                            <BrowserRouter>
                                <Link className="menu-items px-4" to="/home">Home</Link> 
                                <Link className="menu-items px-4" to="/about"> About Us</Link>
                                <Link className="menu-items px-4" to="/products">Products<span><FaCaretDown /></span></Link> 
                                <Link className="menu-items px-4" to="/contact">Contact Us</Link> 
                            </BrowserRouter>
                        </ul>
                    </div>
                    
                    <div>
                        <ul className="p-3 mb-0">
                            <FaShoppingCart className="header-icons mx-2" />
                            <FaSearch className="header-icons mx-2" />
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;