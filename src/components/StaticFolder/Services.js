import React from 'react';
import logo1 from '../../assets/img/logo.png';
import logo4 from '../../assets/img/app/app-1.png';
import '../../assets/css/style.css';
import 'tachyons'
import '../../assets/css/bootsnav.css';
import '../../assets/css/responsive.css';
import '../../assets/css/animate.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/magnific-popup.css';
import LoginUserMenu from "../common/header-component/loginUserMenu";
import NavBar from "../helperComponents/navBar";

function Services() {

    return (
      <div>
          <NavBar />
            <div id="features" className="features-area cell-items bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2>Our Features</h2>
                                <p>
                                    we, as a online dispute resolution platform, facilitates its
                                    users to resolve their disputes/conflicts in an efficient, user/
                                    eco-friendly and cost-effective manner.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 features-thumb">
                            <img src={logo4} alt="Thumb"/>
                        </div>
                        <div className="col-lg-7 features-items">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 single-item">
                                    <div className="item">
                                        <div className="icon">
                                            <i className="flaticon-scroll"/>
                                        </div>
                                        <div className="info">
                                            <h4>Quick Resolution of disputes</h4>
                                            <p>
                                                Disputes involving lesser claim amount may even be
                                                resolved in hours. A comparatively quick resolution has
                                                been proven to be possible in high end disputes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 single-item">
                                    <div className="item">
                                        <div className="icon">
                                            <i className="flaticon-intersect"/>
                                        </div>
                                        <div className="info">
                                            <h4>EASY ACCESSIBILITY</h4>
                                            <p>
                                                No worries about taking high roads or getting stuck in
                                                traffic or taking off from work. Parties can attend
                                                hearings at any time from anywhere.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 single-item">
                                    <div className="item">
                                        <div className="icon">
                                            <i className="flaticon-rgb"/>
                                        </div>
                                        <div className="info">
                                            <h4>COST EFFECTIVE</h4>
                                            <p>
                                                No fear of experiencing holes in your pockets. Services
                                                are offered at extremely low cost, especially when
                                                compared to litigation and other physical means of
                                                Alternative Dispute Resolution proceedings. Thus, the
                                                platform is well suited for resolving micro level claims
                                                to large scale disputes at low cost
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 single-item">
                                    <div className="item">
                                        <div className="icon">
                                            <i className="flaticon-resolution"/>
                                        </div>
                                        <div className="info">
                                            <h4>CONFIDENTIALITY AND SECURITY</h4>
                                            <p>
                                                Details of the parties, specifics of the disputes and an
                                                account of the hearings are maintained in a confidential
                                                manner.Privacy of the parties is our utmost priority.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
