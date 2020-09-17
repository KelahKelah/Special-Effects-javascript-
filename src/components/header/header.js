import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
            <div className="container-fluid">
                <div className="row rowOne p-4" id="Nav">
                    <div>
                        <div>Nate nateKings</div>
                    </div>
                    <ul className="custom-menu mb-0">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contac Us</li>
                    </ul>
                </div>

                <div className="row rowTwo py-5" data-toggle="" data-target="#Nav">
                    <div className="col-md-11">We focus on <span>Quality</span> design</div>
                    <div className="col-md-1"><span>&times;</span></div>
                </div>

            </div>
        )
    }
}
export default Header;