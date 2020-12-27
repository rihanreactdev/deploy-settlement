import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import Header from "../common/header-component/header";
import Sidebar from "../common/sidebar-component/sidebar";
import RightSidebar from "../common/right-sidebar";
import Footer from "../common/footer";
import ThemeCustomizer from "../common/theme-customizer";

const SecureContract = () => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <RightSidebar />
      <div className="page-body">
      <Breadcrumb title="SECURE YOUR CONTRACTS" parent="Dashboard" />
      <div className="container-fluid">
          <div className="col-sm-12 col-xl-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header" style={{justifyContent:'center',paddingLeft:'180px'}}>
                    <h5>SECURE THE CONTRACT</h5>
                  </div>
                  <div className="card-body">
                    <form className="theme-form mega-form">
                      <h6>ENTER THE DETAILS</h6>
                      <div className="form-group">
                        <label className="col-form-label">MEDIATION</label>
                        <input className="form-control" type="text" placeholder="your Name" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">CONCILATION</label>
                        <input className="form-control" type="text" placeholder="" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">ARBITRATION</label>
                        <input className="form-control" type="text" placeholder="" />
                      </div>
                      <div className="card-header" style={{display:'flex',justifyContent:'center',flexDirection:'row',paddingLeft:'10px'}}>
                        <h5>CUSTOMIZE THE CLAUSES FOR YOUR CONTRACT</h5>
                      </div>
                    <div className="form-group">
                        <label className="col-form-label">WHAT IS THE TYPE OF CONTRACT?</label>
                        <input className="form-control" type="text" placeholder="" />
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                          <div className="col-sm-9">
                            <div className="radio radio-primary ml-2">
                              <input id="radio11" type="radio" name="radio1" value="option1" />
                              <label htmlFor="radio11">{Option} {"MEDIATION"}</label>
                            </div>
                            <div className="radio radio-primary ml-2">
                              <input id="radio22" type="radio" name="radio1" value="option1" />
                              <label htmlFor="radio22">{Option} {"CONCILATION"}</label>
                            </div>
                            <div className="radio radio-primary ml-2">
                              <input id="radio44" type="radio" name="radio1" value="option1" defaultChecked />
                              <label htmlFor="radio44">{Option} {"ARBITRATION"}</label>
                            </div>
                            <div className="radio radio-primary ml-2">
                              <input id="radio55" type="radio" name="radio1" value="option1" />
                              <label htmlFor="radio44">{Option} {"HYBRID CLAUSES"}</label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="card-footer center" style={{justifyContent:'center'}}>
                        <button className="btn btn-primary mr-1">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ThemeCustomizer />
      </Fragment>
  );
};

export default SecureContract;
