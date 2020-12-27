import React, { Fragment } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Breadcrumb from '../common/breadcrumb';
import Header from "../common/header-component/header";
import NewSidebar from "../common/sidebar-component/neutralsidebar";
import RightSidebar from "../common/right-sidebar";
import Footer from "../common/footer";
import ThemeCustomizer from "../common/theme-customizer";

const NeutralDashboard = () => {

    return (

        <Fragment>
            <Header />
            <NewSidebar />
            <RightSidebar />
            <div className="page-body">
                <Breadcrumb parent="Dashboard" title="SETTLEMENT TABLE" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <Accordian text="Pending Case" count="1"/>
                            <Accordian text="Resolved Case" count="2"/>
                            <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                                <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="card-body" style={{width:'30%'}}>
                                        <Link to={`${process.env.PUBLIC_URL}/dashboard/registercase`}>REGISTER YOUR CASE</Link>
                                    </div>
                                </div>
                                <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="card-body" style={{width:'30%'}}>
                                        <Link to={`${process.env.PUBLIC_URL}/dashboard/securecontract`}>SECURE CONTRACT</Link>
                                    </div>
                                </div>
                            </div>
                            <div style={{paddingTop:'50px'}}>
                                <Calendar/>
                            </div>
                            <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around',paddingTop:'50px'}}>
                                <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="card-body" style={{width:'30%'}}>
                                        <Link to={`${process.env.PUBLIC_URL}/dashboard/accesscasedetail`}>ALREADY REGISTRED?</Link>
                                    </div>
                                </div>
                                <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="card-body" style={{width:'30%'}}>
                                        <Link to={`${process.env.PUBLIC_URL}/dashboard/contact`}>GET HELP IN FILING</Link>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="card-body">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ThemeCustomizer />
        </Fragment>
    );
};

export default NeutralDashboard;
