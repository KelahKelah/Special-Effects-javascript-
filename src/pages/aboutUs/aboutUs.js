import React from 'react';
import Ceo from '../../assets/ceo.jpg';
import './aboutUs.css';

// Using functional Component because we only need ui no logic 
function AboutUs() {
    return(
        <>
            <div className="container-fluid about-container py-5">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <h2 className="about-heading py-5">About</h2>
                    </div>
                </div>
            </div>


                {/* SHOW SINGLE PRODUCT  */}
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-ls-6 col-sm-6 about-text">
                            <p className="about-ceo-text py-4">Our company is brand of seasoned professionals out with the aim of bringing  unequivocal convenience to your homes and offices</p>                      
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


            {/* OUR SERVICES  */}
            <div className="about-us-info pt-170 pb-100 section-bg container">
                <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-info mb-60">
                            <div className="info-caption">
                                <h4>Clean and Services</h4>
                                <p>For each project we establish relationships with partners who we know will help us. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-info mb-60">
                            <div className="info-caption">
                                <h4>Clean and Modern</h4>
                                <p>For each project we establish relationships with partners who we know will help us. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-info mb-60">
                            <div className="info-caption">
                                <h4>Clean and Modern</h4>
                                <p>For each project we establish relationships with partners who we know will help us. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs;