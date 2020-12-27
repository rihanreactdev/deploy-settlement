import React from 'react';
import logo1 from '../../assets/img/logo.png';
import logo2 from '../../assets/img/app/app-4.png';
import logo4 from '../../assets/img/app/app-1.png';
import logo5 from '../../assets/img/app/screnshoot-1.jpg';
import logo6 from '../../assets/img/app/screnshoot-2.jpg';
import logo7 from '../../assets/img/app/screnshoot-3.jpg';
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

function Main() {

    return (
        <div>
            <NavBar />
            <div
                id="home"
                className="banner-area content-double shape-line bg-theme-small normal-text"
            >
                <div className="box-table">
                    <div className="box-cell">
                        <div className="container">
                            <div className="double-items">
                                <div className="row align-center">
                                    <div className="col-lg-5 left-info simple-video">
                                        <div className="content" data-animation="animated fadeInUpBig">
                                            <h1>Resolve Legal Disputes <span>online</span></h1>
                                            <p>
                                                The settlement table is an online platform for resolving
                                                disputes, out of the Court in timely and cost effective
                                                manner. The platform is tailored to suit the needs of the
                                                parties and the procedures followed have legal
                                                recognition. Be it any dispute, commercial or family
                                                matters, employment or rental issues, you have our word.
                                            </p>
                                            <a className="btn circle btn-theme border btn-md" href="123"
                                            >Get Started</a>
                                            <a
                                                className="popup-youtube video-play-button"
                                                href="https://www.youtube.com/watch?v=owhuBrGIOsE">
                                                <i className="fa fa-play"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 right-info">
                                        <img src={logo2} alt="Thumb"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="wavesshape">*/}
                        {/*  <img src={logo3} alt="Shape"/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            <div id="about" className="about-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 default info">
                            <h4>Story about us</h4>
                            <h2>Solve your Legal disputes <br/>with expert Lawyers</h2>
                            <p>
                                The platform ensures full fledged and comprehensive online
                                redressal of disputes/conflicts,with the help of technology that
                                is easily accessible and reliable.
                            </p>
                            <a href="123" className="btn circle btn-theme effect btn-md">Read more</a>
                            <div className="bottom-info">
                                <h3>Why Choose Us</h3>
                                <p>
                                    We are a team of professionals who are devoted to provide
                                    accessible dispute resolution services with uncompromising
                                    quality, at low cost. ‘Everything for everyone’ is the principle
                                    guiding us.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-info">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="item">
                                        <i className="flaticon-ticket"/>
                                        <h4>Register your disputes</h4>
                                        <p>
                                            Downs those still witty an balls so chief so. Moment an
                                            little remain no lively
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="item">
                                        <i className="flaticon-speech-bubble"/>
                                        <h4>Upload your documents</h4>
                                        <p>
                                            Downs those still witty an balls so chief so. Moment an
                                            little remain no lively
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="item">
                                        <i className="flaticon-email"/>
                                        <h4>Resolve with expertise</h4>
                                        <p>
                                            Downs those still witty an balls so chief so. Moment an
                                            little remain no lively
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="item">
                                        <i className="flaticon-file"/>
                                        <h4>Get Settled!</h4>
                                        <p>
                                            Downs those still witty an balls so chief so. Moment an
                                            little remain no lively
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            <div id="overview" className="overview-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2>Quick overview of Services</h2>
                                <p>
                                    The platform offers the following options to the parties to
                                    choose the appropriate method for solving their dispute
                                    effectively. The description given below will help the parties
                                    to choose the process at ease.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center overview-items">
                            <ul id="tabs" className="nav nav-tabs">
                                <li className="nav-item">
                                    <a
                                        href="123"
                                        data-target="123tab1"
                                        data-toggle="tab"
                                        className="active nav-link"
                                    >
                                        <i className="flaticon-test"/>
                                        Arbitration
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="123"
                                        data-target="123tab2"
                                        data-toggle="tab"
                                        className="nav-link"
                                    >
                                        <i className="flaticon-heart"/>
                                        Mediation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="123"
                                        data-target="123tab3"
                                        data-toggle="tab"
                                        className="nav-link"
                                    >
                                        <i className="flaticon-dental-checkup"/>
                                        Conciliation
                                    </a>
                                </li>
                            </ul>
                            <div id="tabsContent" className="tab-content">
                                <div id="tab1" className="tab-pane fade active show">
                                    <img src={logo5} alt="Thumb"/>
                                </div>
                                <div id="tab2" className="tab-pane fade">
                                    <img src={logo6} alt="Thumb"/>
                                </div>
                                <div id="tab3" className="tab-pane fade">
                                    <img src={logo7} alt="Thumb"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            <div id="contact" className="contact-us-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2>Contact Us</h2>
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
                        <div className="col-lg-6 address">
                            <div className="address-items">
                                <h4>Our Office Address</h4>
                                <ul className="info">
                                    <li>
                                        <i className="fas fa-map-marked-alt"/>
                                        <span
                                        >22 Baker Street,<br/>
                    London, United Kingdom,<br/>
                    W1U 3BW</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"/>
                                        <span>+44-20-7328-4499</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope-open"/>
                                        <span>info@thesettlementtable.in</span>
                                    </li>
                                </ul>
                                <h4>Social Address</h4>
                                <ul className="social">
                                    <li className="facebook">
                                        <a href="123"><i className="fab fa-facebook-f"/></a>
                                    </li>
                                    <li className="twitter">
                                        <a href="123"><i className="fab fa-twitter"/></a>
                                    </li>
                                    <li className="pinterest">
                                        <a href="123"><i className="fab fa-pinterest"/></a>
                                    </li>
                                    <li className="instagram">
                                        <a href="123"><i className="fab fa-instagram"/></a>
                                    </li>
                                </ul>
                                <div className="google-maps">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"
                                        title="map"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 contact-form">
                            <h2>Let's lalk about your idea</h2>
                            <form
                                action="https://webhunt.store/themeforest/softing/assets/mail/contact.php"
                                method="POST"
                                className="contact-form"
                            >
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                type="text"
                                            />
                                            <span className="alert-error"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Email*"
                                                type="email"
                                            />
                                            <span className="alert-error"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone"
                                                type="text"
                                            />
                                            <span className="alert-error"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="form-group comments">
                      <textarea
                          className="form-control"
                          id="comments"
                          name="comments"
                          placeholder="Tell Us About Project *"
                      />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <button type="submit" name="submit" id="submit">
                                            Send Message <i className="fa fa-paper-plane"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12 alert-notification">
                                    <div id="message" className="alert-msg"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="default-padding bg-light">
                <div className="container">
                    <div className="f-items">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 item">
                                <div className="f-item">
                                    <img src={logo1} alt="Logo"/>
                                    <p>
                                        Excellence decisively nay man yet impression for contrasted
                                        remarkably. There spoke happy for you are out. Fertile how old
                                        address did showing because sitting replied six. Had arose
                                        guest visit going off child she new.
                                    </p>
                                    <a href="123" className="btn circle btn-theme effect btn-sm"
                                    >Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="f-item link">
                                    <h4>Quick LInk</h4>
                                    <ul>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> Home</a>
                                        </li>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> About us</a>
                                        </li>
                                        <li>
                                            <a href="123"
                                            ><i className="fas fa-angle-right"/> Compnay History</a>
                                        </li>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> Features</a>
                                        </li>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> Blog Page</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="f-item link">
                                    <h4>Community</h4>
                                    <ul>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> Career</a>
                                        </li>
                                        <li>
                                            <a href="123"
                                            ><i className="fas fa-angle-right"/> Leadership</a>
                                        </li>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> Strategy</a>
                                        </li>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> Services</a>
                                        </li>
                                        <li>
                                            <a href="123"><i className="fas fa-angle-right"/> History</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="f-item twitter-widget">
                                    <h4>Contact Info</h4>
                                    <p>
                                        Estimating stimulated how reasonably precaution diminution she
                                        simplicity
                                    </p>
                                    <div className="address">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-home"/>
                                                </div>
                                                <div className="info">
                                                    <h5>Website:</h5>
                                                    <span>www.validtheme.com</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-envelope"/>
                                                </div>
                                                <div className="info">
                                                    <h5>Email:</h5>
                                                    <span>support@validtheme.com</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-phone"/>
                                                </div>
                                                <div className="info">
                                                    <h5>Phone:</h5>
                                                    <span>+44-20-7328-4499</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        &copy; Copyright 2018. All Rights Reserved by
                                        <a href="123">validthemes</a>
                                    </p>
                                </div>
                                <div className="col-lg-6 text-right link">
                                    <ul>
                                        <li>
                                            <a href="123">Terms of user</a>
                                        </li>
                                        <li>
                                            <a href="123">License</a>
                                        </li>
                                        <li>
                                            <a href="123">Support</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Main;
