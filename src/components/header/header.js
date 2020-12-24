import React, {Component} from 'react';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import './header.css';
import Home from '../../pages/home/home';
import AboutUs from '../../pages/aboutUs/aboutUs';
import ContactUs from '../../pages/contactUs/contactUs';

class Header extends Component {
    // constructor(props) {
        
    // }

    render() {
        return(
            <div className="container-fluid header-container">
                {/* <div className="row rowOne p-4" id="Nav">
                    <div>
                        <div>Nate nateKings</div>
                    </div>
                    <ul className="custom-menu py-3 mb-0">
                        <BrowserRouter>
                            <Link to="/home" component={Home}></Link> Home
                            <Link to="/about" component={AboutUs}></Link> About Us
                            <Link to="/contact" component={ContactUs}></Link> Contac Us
                        </BrowserRouter>
                    </ul>
                </div>

                <div className="row intro py-5" data-toggle="" data-target="#Nav">
                    <div className="col-md-11">We focus on <span>Quality</span> design</div>
                    <div className="col-md-1"><span>&times;</span></div>
                </div> */}

            </div>
        )
    }
}
export default Header;