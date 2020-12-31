import React, {Component} from 'react';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import {FaShoppingCart, FaSearch, FaCaretDown, FaBars} from 'react-icons/fa'
import './header.css';


class Header extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            showMobileMenu : false
        }
    }

    render() {
        return(
            <div className="container-fluid header-container d-flex justify-content-around py-2">
                <div className="row" id="Nav">
                    <div className="p-3">
                        <div className="logo">Nate nateKings</div>
                    </div>
                    <div className="mx-5 menu">
                        <ul className="custom-menu p-3 mx-5 mb-0">
                            <BrowserRouter>
                                <Link className="menu-items px-4" to="/home">Home</Link> 
                                <Link className="menu-items px-4" to="/about"> About Us</Link>
                                <Link className="menu-items px-4" to="/products">Products<span><FaCaretDown /></span></Link> 
                                <Link className="menu-items px-4" to="/contact">Contact Us</Link> 
                            </BrowserRouter>
                        </ul>
                    </div>

                { this.state.showMobileMenu? 
                    // {/* MOBILE MENU STARTS  */}
                    <div className="mx-5 menu-mobile-wrapper" id="mobile-id">
                        <p className="close" onClick={() => this.setState({showMobileMenu: false})}>x</p>
                        <ul className="custom-menu-mobile mb-0">
                            <BrowserRouter>
                                <Link className="mobile-menu-items" to="/home">Home</Link> 
                                <Link className="mobile-menu-items" to="/about"> About Us</Link>
                                <Link className="mobile-menu-items" to="/products">Products<span><FaCaretDown /></span></Link> 
                                <Link className="mobile-menu-items" to="/contact">Contact Us</Link> 
                            </BrowserRouter>
                        </ul>
                    </div>
                    // {/* MOBILE MENU ENDS  */}

                : null
                 }
                    <div className="fixed-for-mobile">
                        <ul className="p-3 mb-0 d-flex">
                            <FaShoppingCart className="header-icons mx-2" />
                            <FaSearch className="header-icons mx-2" />
                            {/* TOGGLE HAMBURGER FOR MOBILE VIEW  */}
                            <FaBars className="hamburger-icon mx-2" onClick={() => {this.setState({showMobileMenu: true})}} />
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;