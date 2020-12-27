import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../common/breadcrumb';
import Grid from './Grid';
import Header from "../common/header-component/header";
import Sidebar from "../common/sidebar-component/sidebar";
import RightSidebar from "../common/right-sidebar";
import Footer from "../common/footer";
import ThemeCustomizer from "../common/theme-customizer";

const ViewCaseDetail = () => {
    return (
        <Fragment>
            <Header />
            <Sidebar />
            <RightSidebar />
            <div className="page-body">
            <Breadcrumb parent="Dashboard" title="VIEW CASE DETAILS" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                    <div style={{width:'100%'}}>
                        <div className="card">
                            <div className="card-body" style={{width:'30%'}}>
                                <h3>PENDING CASES</h3>
                                <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="card-body" style={{width:'30%'}}>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Pending Case1</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{width:'30%'}}>
                                <h3>RESOLVED CASES</h3>
                                <div className="card" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="card-body" style={{width:'30%'}}>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Pending Case1</Link>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <Grid/>
                </div>
            </div>
            <Footer />
            <ThemeCustomizer />
        </Fragment>
    );
};

export default ViewCaseDetail;
