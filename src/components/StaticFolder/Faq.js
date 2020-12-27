import React from 'react';
import logo1 from '../../assets/img/logo.png';
import logo8 from '../../assets/img/banner/contact.png';
import '../../assets/css/style.css';
import 'tachyons'
import '../../assets/css/bootsnav.css';
import '../../assets/css/responsive.css';
import '../../assets/css/animate.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/magnific-popup.css';
import LoginUserMenu from "../common/header-component/loginUserMenu";
import NavBar from "../helperComponents/navBar";

function Faq() {

    return (
        <div>
            <NavBar />
            <div className="faq-area bg-gray default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2>Now what’s in your mind?</h2>
                                <p>
                                    Learning day desirous informed expenses material returned six
                                    the. She enabled invited exposed him another. Reasonably
                                    conviction solicitude me mr at discretion reasonable. Age out
                                    full gate bed day lose.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 thumb">
                            <img src={logo8} alt="Thumb"/>
                        </div>
                        <div className="col-lg-6 faq-items default-padding-bottom">
                            <div className="faq-content">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h4
                                                className="mb-0"
                                                data-toggle="collapse"
                                                data-target="123collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                How is it better when compared to the court procedure?
                                            </h4>
                                        </div>

                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="123accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Qui consectetur at, sunt maxime, quod alias ullam
                                                    officiis, ex necessitatibus similique odio aut!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h4
                                                className="mb-0 collapsed"
                                                data-toggle="collapse"
                                                data-target="123collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                What do you mean by online resolution of disputes?
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="123accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Qui consectetur at, sunt maxime, quod alias ullam
                                                    officiis, ex necessitatibus similique odio aut!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h4
                                                className="mb-0 collapsed"
                                                data-toggle="collapse"
                                                data-target="123collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                What is the legal validity of the process?
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="123accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Qui consectetur at, sunt maxime, quod alias ullam
                                                    officiis, ex necessitatibus similique odio aut!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h4
                                                className="mb-0 collapsed"
                                                data-toggle="collapse"
                                                data-target="123collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                Which process is better suited for my dispute?
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseFour"
                                            className="collapse"
                                            aria-labelledby="headingFour"
                                            data-parent="123accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Qui consectetur at, sunt maxime, quod alias ullam
                                                    officiis, ex necessitatibus similique odio aut!
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
        </div>
    );
}

export default Faq;
