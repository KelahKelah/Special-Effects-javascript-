import React, {Component} from 'react';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import {FaShoppingCart, FaSearch, FaCaretDown, FaBars} from 'react-icons/fa';
import './header.css';


class Header extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            showMobileMenu : false
        }
    }

    handleRoutes = (path) => {
        this.props.history.push(path)
    }

    render() {
        console.log('value of this.props',this.props)

        return(
            <div className="container-fluid header-container d-flex justify-content-around py-2">
                <div className="row" id="Nav">
                    <div className="p-3">
                        <div className="logo">Nate nateKings</div>
                    </div>
                    <div className="mx-5 menu">
                        <ul className="custom-menu p-3 mx-5 mb-0">
                            <div className="mobile-menu-items px-4" onClick={()=>this.handleRoutes("/home")} >Home</div>
                            <div className="mobile-menu-items px-4" onClick={()=>this.handleRoutes("/about")} >About</div>
                            <div className="mobile-menu-items px-4" onClick={()=>this.handleRoutes("/products")} >Products</div>
                            <div className="mobile-menu-items px-4" onClick={()=>this.handleRoutes("/contact")} >Contact</div>
                        </ul>
                    </div>

                { this.state.showMobileMenu? 
                    // {/* MOBILE MENU STARTS  */}
                    <div className="mx-5 menu-mobile-wrapper" id="mobile-id">
                        <p className="close" onClick={() => this.setState({showMobileMenu: false})}>x</p>
                        <ul className="custom-menu-mobile mb-0">
                        {/* <BrowserRouter>  */}
                            <div className="mobile-menu-items px-4" onClick={this.handleRoutes("/home")} >Home</div>
                            <div className="mobile-menu-items px-4" onClick={this.handleRoutes("/about")} >About</div>
                            <div className="mobile-menu-items px-4" onClick={this.handleRoutes("/products")} >Products</div>
                            <div className="mobile-menu-items px-4" onClick={this.handleRoutes("/contact")} >Contact</div>
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
export default withRouter(Header);
