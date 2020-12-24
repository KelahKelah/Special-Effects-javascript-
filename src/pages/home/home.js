import React, {Component} from 'react';
import CurtainOne from '../../assets/nateKings.jpeg';
import CurtainTwo from '../../assets/nateJKingsSix.jpeg';
import CurtainThree from '../../assets/nateKingSeven.jpeg';
import CurtainFour from '../../assets/nateKIngsFour.jpeg';
import CurtainSix from '../../assets/nateKingsTwo.jpeg';
import Ceo from '../../assets/ceo.jpg';
import './home.css';


class Home extends Component {
    componentDidMount() {
    }
    render() {
        return(
            <div>
                {/* SHOW SINGLE PRODUCT ONE */}
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-6 one">
                            <img src={CurtainOne} alt="" className="single-img-show" /> 
                            <div className="single-img-show-extention"></div>
                        </div>
                        <div className="col-lg-6">
                            <p className="p-5">Started from N1000</p>
                            <h3 className="single-img-detail p-5">Printed memory foam brief modern throw pillow case</h3>
                            <button type="button" className="btn btn-outline-primary btn-lg m-5">Explore</button>
                        </div>
                    </div>
                </div>

                {/* SHOW SINGLE PRODUCT TWO */}
                <div className="container py-5">
                    <div className="row py-5">
                        
                        <div className="col-lg-6 two">
                            <p className="p-5">Started from N1000</p>
                            <h3 className="single-img-detail p-5">Printed memory foam brief modern throw pillow case</h3>
                            <button type="button" className="btn btn-outline-primary btn-lg m-5">Explore</button>
                        </div>

                        <div className="col-lg-6">
                            <img src={CurtainOne} alt="" className="single-img-show" /> 
                            <div className="single-img-show-extention"></div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT ITEM SECTION */}
                <div className="container-fluid products-container">
                    
                    <h3 className="product-heading py-5">Trending Items</h3>

                    <div className="row product-row">
                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainThree} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Printed memory foam brief modern throw pillow case</h4>
                            <p>From N1000</p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainSix} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Printed memory foam brief modern throw pillow case</h4>
                            <p>From N1000</p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainFour} className="img-fluid itemImg" />
                                <h4 className="single-product-item">Printed memory foam brief modern throw pillow case</h4>
                                <p>From N1000</p>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainThree} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Printed memory foam brief modern throw pillow case</h4>
                            <p>From N1000</p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainSix} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Printed memory foam brief modern throw pillow case</h4>
                            <p>From N1000</p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainFour} className="img-fluid itemImg" />
                                <h4 className="single-product-item">Printed memory foam brief modern throw pillow case</h4>
                                <p>From N1000</p>
                            </div>                        
                        </div>

                    </div>

                </div>

                <div className="container-fluid about-container">
                    <div className="row">
                        <div className="col-ls-6 col-sm-6 about-col">
                            <img src={Ceo} alt="ceo" className="ceo-img my-5" />
                            <p className="about-ceo-text py-4">"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <p className="ceo-name-text">Nato Chukwu</p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Home;