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
                        <h2 className="about-heading py-5">Products</h2>
                    </div>
                </div>
            </div>


            <div className="container-fluid products-container py-5">
                    
                    <h3 className="product-heading py-5">Trending Items</h3>

                    <div className="row product-row">
                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainTwo} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Red and white Turkey curtains</h4>
                            <p>From N13,500</p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainSix} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Poka dots Full length satin curtains</h4>
                            <p>From N7000</p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainFour} className="img-fluid itemImg" />
                                <h4 className="single-product-item">Cream Satin Full length curtains</h4>
                                <p>From N10,500</p>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainThree} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Off white satin full curtains</h4>
                            <p>From N7,000</p>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <img src={CurtainOne} className="img-fluid itemImg" />
                            <h4 className="single-product-item" >Gray and cream London curtain</h4>
                            <p>From N4,300</p>
                        </div>   

                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <img src={CurtainSeven} className="img-fluid itemImg" />
                                <h4 className="single-product-item">Flower green curtain</h4>
                                <p>From N3000</p>
                            </div>                        
                        </div>

                    </div>

                </div>


        </>
    )
}
export default Products;