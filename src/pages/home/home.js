import React, {Component} from 'react';
import CurtainOne from '../../assets/nateKings.jpeg';
import CurtainTwo from '../../assets/nateJKingsSix.jpeg';
import CurtainThree from '../../assets/nateKingSeven.jpeg';
import CurtainFour from '../../assets/nateKIngsFour.jpeg';
import CurtainSix from '../../assets/nateKingsTwo.jpeg';
import CurtainSeven from '../../assets/nateKIngsFive.jpeg';
import Window from '../../assets/windowTwo.jpeg';
import Ceo from '../../assets/ceo.jpeg';
import './home.css';


class Home extends Component {
    
    // componentDidMount() {
        handleExplore = () => {
            this.props.history.push('/products')

        }
    // }

    render() {
        return(
            <div>
                {/* SHOW SINGLE PRODUCT ONE */}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <img src={CurtainOne} alt="" className="single-img-show" /> 
                            <div className="single-img-show-extention"></div>
                        </div>
                        <div className="col-lg-6 col-sm-12 fadein-animation">
                            <p className="single-product-price p-4">Started from N1000</p>
                            <h3 className="single-img-detail p-3">Modern and Luxury Interior Designs</h3>
                            <button type="button" className="btn btn-outline-warning btn-lg m-5" onClick={this.handleExplore} >Explore</button>
                        </div>
                    </div>
                </div>

                {/* SHOW SINGLE PRODUCT TWO */}
                <div className="container py-5">
                    <div className="row pb-5">
                        
                        <div className="col-lg-6 col-sm-12 fadein-animation">
                            <p className="single-product-price p-4">Started from N1000</p>
                            <h3 className="single-img-detail p-3">Modern and Luxury Interior Designs</h3>
                            <button type="button" className="btn btn-outline-warning btn-lg m-5" onClick={this.handleExplore} >Explore</button>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <img src={Window} alt="" className="single-img-show" /> 
                            <div className="single-img-show-extention"></div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT ITEM SECTION */}
                <div className="container-fluid products-container py-5">
                    
                    <h3 className="product-heading py-5">Trending Products</h3>

                    <div className="row product-row">
                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainTwo} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Red and white Turkey curtains</h4>
                            <p className="product-price">From N13,500 to <span>N12,500</span></p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainSix} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Poka dots Full length satin curtains</h4>
                            <p className="product-price">From N7000 to <span>N6000</span></p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainFour} className="img-fluid itemImg" />
                                <h4 className="single-product-item">Cream Satin Full length curtains</h4>
                                <p className="product-price">From N10,500 to <span>N9,500</span> </p>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainThree} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Off white satin full curtains</h4>
                            <p className="product-price">From N7,000 to <span>N6,000</span> </p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainOne} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Gray and cream London curtain</h4>
                            <p className="product-price">From N5,300 to <span>N4,500</span></p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainSeven} className="img-fluid itemImg" />
                                <h4 className="single-product-item">Flower green curtain</h4>
                                <p className="product-price">From N4,000 to <span>N3,500</span></p>
                            </div>                        
                        </div>

                    </div>

                </div>
                {/* // */}

                {/* ABOUT CEO  */}
                <div className="container-fluid about-container">
                    <div className="row">
                        <div className="col-ls-6 col-sm-6 about-col">
                            <img src={Ceo} alt="ceo" className="ceo-img my-5" />
                            <p className="about-ceo-text py-4">A certified interior decoration expert for over a decaded.He also has great passion of community development and always ready to beautify your home</p>
                            <p className="ceo-name-text">Nnaeto Brendan Ezeokwelume</p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Home;