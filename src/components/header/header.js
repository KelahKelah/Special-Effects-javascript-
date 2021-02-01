import React, {Component} from 'react';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import {FaShoppingCart, FaSearch, FaBars} from 'react-icons/fa';
import Logo from '../../assets/mainLogo.png';
import './header.css';


class Header extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            showMobileMenu : false
        }
    }

    toggleHamburger() {
        console.log()
        this.setState({showMobileMenu:true})
    }

    handleRoutes = (path) => {
        this.props.history.push(path)
    }

    render() {

        return(
            <div className="container-fluid header-container py-2">
                <div className="row" id="Nav">
                    <div className="logo-wrapper">
                        <img src={Logo} alt="Logo" className="logo" />
                        <p className="logo-text pt-1 px-1">NateKings</p>
                    </div>
                    <div className="mx-5 menu">
                        <ul className="custom-menu p-3 mx-5 mb-0">
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/home")} >Home</div>
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/about")} >About</div>
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/products")} >Products</div>
                            <div className="menu-items px-4" onClick={()=>this.handleRoutes("/contact")} >Contact</div>
                        </ul>
                    </div>
                    <div className="fixed-for-mobile">
                        <ul className="p-3 mb-0 d-flex">
                            <FaShoppingCart className="header-icons mx-2" />
                            <FaSearch className="header-icons mx-2" />
                            {/* TOGGLE HAMBURGER FOR MOBILE VIEW  */}
                            <FaBars className="hamburger-icon mx-2" onClick={() => {this.setState({showMobileMenu: true})}} />
                        </ul>
                    </div>

                { this.state.showMobileMenu? 
                    // {/* MOBILE MENU STARTS  */}
                    <div className="menu-mobile-wrapper fadein-animation" id="mobile-id">
                        <p className="close m-2" onClick={() => this.setState({showMobileMenu: false})}>x</p>
                        <ul className="custom-menu-mobile mb-0">
                        {/* <BrowserRouter>  */}
                            <div className="mobile-menu-items mt-2 p-3" onClick={()=>this.handleRoutes("/home")} >Home</div>
                            <div className="mobile-menu-items mt-2 p-3" onClick={()=>this.handleRoutes("/about")} >About</div>
                            <div className="mobile-menu-items mt-2 p-3" onClick={()=>this.handleRoutes("/products")} >Products</div>
                            <div className="mobile-menu-items mt-2 p-3" onClick={()=>this.handleRoutes("/contact")} >Contact</div>
                        </ul>
                    </div>
                    // {/* MOBILE MENU ENDS  */}

                : null
                 }
                   
                </div>

            </div>
        )
    }
}
export default withRouter(Header);
