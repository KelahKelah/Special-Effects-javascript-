import React, {Component} from 'react';
import CurtainOne from '../../assets/nateKings.jpeg';
import CurtainTwo from '../../assets/nateJKingsSix.jpeg';
import CurtainThree from '../../assets/nateKingFour.jpeg';
import CurtainFour from '../../assets/nateKIngsFour.jpeg';
import CurtainFive from '../../assets/nateKIngsThree.jpeg';
import CurtainSix from '../../assets/nateKingsTwo.jpeg';
import Ceo from '../../assets/ceo.jpg';
import './home.css';


class Home extends Component {
    componentDidMount() {

    }
    render() {
        return(
            <div className="container">
                <div className="row rowOne" id="Nav">
                    <div className="col-md-12"></div>
                </div>
                <div className="row rowTwo" data-toggle="" data-target="#Nav">
                    <div className="col-md-6">My Portfolio</div>
                    <div className="col-md-6"></div>
                </div>
                <div className="row rowThree">
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
                        <img src={CurtainOne} alt="Image" className="itemImg" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
                        <img src={CurtainTwo} alt="Image" className="itemImg" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
                        <img src={CurtainThree} alt="Image" className="itemImg" />
                    </div>
                </div>
                <div className="row rowFour">
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
                        <img src={CurtainFour} alt="Image" className="itemImg" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
                        <img src={CurtainFive} alt="Image" className="itemImg" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
                        <img src={CurtainSix} alt="Image" className="itemImg" />
                    </div>
                </div>
                <div className="row rowFive">
                    <div className="col-md-12 itemFive">
                        <img src={Ceo} alt="" className="ceoImg" />
                        <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.</em></p>
                        <p></p>
                    </div>
                </div>
                <div className="row rowSix">
                    <div className="col-md-6">Copyright MyPortfolio All Rights Reserved Designed by BootstrapMade/</div>
                    <div className="col-md-6">Twitter facebook </div>
                </div>

            </div>
        )
    }
}
export default Home;