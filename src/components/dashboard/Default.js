import React, { Fragment } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Breadcrumb from '../common/breadcrumb';
import Header from "../common/header-component/header";
import Sidebar from "../common/sidebar-component/sidebar";
import RightSidebar from "../common/right-sidebar";
import Footer from "../common/footer";
import ThemeCustomizer from "../common/theme-customizer";
import TooltipsComponent from './tooltip';
import { BsInfoCircle } from 'react-icons/bs';
// import DynamicField from '../DynamicField';

const Default = () => {
    return (
        <Fragment>
            <Header />
            <Sidebar />
            <RightSidebar />
            {/* <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}> */}
            <div className="page-body">
                <Breadcrumb parent="Dashboard" title="SETTLEMENT TABLE" />
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                    {/*<DynamicField/>*/}
                        <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                            <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                <div className="card-body" style={{width:'30%'}}>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/registercase`}>REGISTER YOUR CASE</Link>
                                <TooltipsComponent id="register" text="By Clicking this you can file the ongoing/existing dispute" icon={<BsInfoCircle/>}/>
                                </div>
                            </div>
                            <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                <div className="card-body" style={{width:'30%'}}>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/securecontract`}>SECURE CONTRACT<TooltipsComponent id="contract" text="By Clicking this you can have the options to refer further disputes" icon={<BsInfoCircle/>}/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{paddingTop:'50px',paddingRight:'50px'}}>
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
            {/* </MediaQuery> */}
            <Footer />
            <ThemeCustomizer />
        </Fragment>
    );
};

export default Default;
