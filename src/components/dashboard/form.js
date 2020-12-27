import React, { Fragment, useState } from 'react';
import 'tachyons'
import { Submit } from "../../constant/constant";
import { Link } from 'react-router-dom';
import {CgMoreO} from 'react-icons/cg'
import TooltipsComponent from './tooltip';
const FormDefault = () => {

  const [more,setMore]=useState(false)


  return (
    <Fragment>
      <div className="container-fluid">
          <div className="col-sm-12 col-xl-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header" style={{justifyContent:'center',paddingLeft:'180px'}}>
                    <h5>REGISTER YOUR CASE</h5>
                  </div>
                  <div className="card-body">
                    <form className="theme-form mega-form">
                      <h6>ENTER THE DETAILS</h6>
                      <div className="form-group">
                        <label className="col-form-label">Name Of the Party</label>
                        <input className="form-control" type="text" placeholder="your Name" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Name Of Other Party</label>
                        <input className="form-control" type="text" placeholder="Other Party" /><TooltipsComponent onClick={()=>setMore(true)} icon={<CgMoreO/>} text="More Parties" id="more"/>
                      </div>

                      <div className="form-group">
                        <label className="col-form-label">Background Of the Dispute</label>
                        <div className="pa4 black-70">
                            <div>
                                <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                                <small id="comment-desc" className="f6 black-60" ></small>
                            </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Claims Made/Relief Claims</label>
                        <div className="pa4 black-70">
                            <div>
                                <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                                <small id="comment-desc" className="f6 black-60" ></small>
                            </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="form-group" style={{paddingLeft:'30px'}}>
                    <label className="col-form-label">Print the Page</label>
                  </div>
                  <div className="card-footer center">
                    <button className="btn btn-primary mr-1">{Submit}</button>
                  </div>
                  <div className="card center" style={{display:'flex',flexDirection:'row'}}>
                        <div className="card-body" style={{width:'30%'}}>
                            <Link to={`${process.env.PUBLIC_URL}/dashboard/contact`}>GET HELP IN FILING</Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default FormDefault;
