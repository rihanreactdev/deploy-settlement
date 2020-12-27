import React, { Fragment } from 'react';
import logo1 from '../../assets/img/logo.png'
import LoginUserMenu from '../common/header-component/loginUserMenu';
import NavBar from "../helperComponents/navBar";

const Rules = () => {
    return (
      <Fragment>
          <div>
              <div>
                  <NavBar />
              </div>

              <div className="container-fluid p-t-2">
                  <div className="row">
                      <div className="col-sm-12">
                          <div className="card">
                              <div className="card-header">
                                  <h5>RULE1</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                              </div>
                              <div className="card-body">
                                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
    );
};

export default Rules;
