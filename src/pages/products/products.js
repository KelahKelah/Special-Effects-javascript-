import React from 'react';
import CurtainOne from '../../assets/nateKings.jpeg';
import CurtainTwo from '../../assets/nateJKingsSix.jpeg';
import CurtainThree from '../../assets/nateKingSeven.jpeg';
import CurtainFour from '../../assets/nateKIngsFour.jpeg';
import CurtainSix from '../../assets/nateKingsTwo.jpeg';
import CurtainSeven from '../../assets/nateKIngsFive.jpeg';
import './products.css';

// Using functional Component because we only need ui no logic 
function Products() {
    return(
        <>
            <div className="container-fluid about-container py-5">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <h2 className="about-heading py-5">Our Products</h2>
                    </div>
                </div>
            </div>

   {/* PRODUCT ITEM SECTION */}
   <div className="container-fluid products-container py-5">
                    
                    <h3 className="product-heading py-5">Trending Products</h3>

                    <div className="row product-row">
                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainTwo} className="img-fluid itemImg" />
                            <h4 className="single-product-item py-3" >Red and white Turkey curtains</h4>
                            <p className="product-price">From N13,500 to <span>N12,500</span></p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainSix} className="img-fluid itemImg" />
                            <h4 className="single-product-item py-3" >Poka dots Full length satin curtains</h4>
                            <p className="product-price">From N7000 to <span>N6000</span></p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainFour} className="img-fluid itemImg" />
                                <h4 className="single-product-item py-3">Cream Satin Full length curtains</h4>
                                <p className="product-price">From N10,500 to <span>N9,500</span> </p>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainThree} className="img-fluid itemImg" />
                            <h4 className="single-product-item py-3" >Off white satin full curtains</h4>
                            <p className="product-price">From N7,000 to <span>N6,000</span> </p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainOne} className="img-fluid itemImg" />
                            <h4 className="single-product-item py-3" >Gray and cream London curtain</h4>
                            <p className="product-price">From N5,300 to <span>N4,500</span></p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainSeven} className="img-fluid itemImg" />
                                <h4 className="single-product-item py-3">Flower green curtain</h4>
                                <p className="product-price">From N4,000 to <span>N3,500</span></p>
                            </div>                        
                        </div>

                    </div>

                </div>


        </>
    )
}
export default Products;