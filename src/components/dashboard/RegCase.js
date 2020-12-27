import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import FormDefault from './form';
import Header from "../common/header-component/header";
import Sidebar from "../common/sidebar-component/sidebar";
import RightSidebar from "../common/right-sidebar";
import Footer from "../common/footer";
import ThemeCustomizer from "../common/theme-customizer";

const RegCase = () => {

    return (
        <Fragment>
            <Header />
            <Sidebar />
            <RightSidebar />
            <div className="page-body">
                <Breadcrumb parent="Dashboard" title="REGISTER YOUR CASE" />
                <div style={{justifyContent:'center'}}>
                    <FormDefault/>
                </div>
            </div>
            <Footer />
            <ThemeCustomizer />
        </Fragment>
    );
};

export default RegCase;
