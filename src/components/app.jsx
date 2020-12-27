import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './common/loader';
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import Default from "./dashboard/Default";
import RegCase from "./dashboard/RegCase";
import SecureContract from "./dashboard/SecureContract";
import ViewCaseDetail from "./dashboard/ViewCaseDetail";
import Calendar from "react-calendar";
// import Project from "./dashboard/project/project";
import Main from "./StaticFolder/Main";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import ForgotPassword from "./authentication/ForgotPassword";
import Panel from "./StaticFolder/Panel";
import NeutralLogin from "./neutralAuthentication/NeutralLogin";
import NeutralRegister from "./neutralAuthentication/NeutralRegister";
import NeutralForgotPassword from "./neutralAuthentication/NeutralForgotPassword";
import AuthenticatedRoute from "./AutheticatedRoute";
import Services from "./StaticFolder/Services";
import Rules from "./StaticFolder/Rules";
import Faq from "./StaticFolder/Faq";

const AppLayout = () => {
        return (
            <div>
                <Loader />
                <div className="page-wrapper">
                    <div className="page-body-wrapper">
                      <BrowserRouter>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/" component={Main}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/userlogin" component={Login}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/neutrallogin" component={NeutralLogin}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/signup" component={Register}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/neutralsignup" component={NeutralRegister}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/forgotpassword" component={ForgotPassword}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/neutralforgotpassword" component={NeutralForgotPassword}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/panel" component={Panel}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/services" component={Services}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/rules" component={Rules}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/faq" component={Faq}/>
                            <Route path="https://rihanreactdev.github.io/deploy-settlement/userdashboard/default" component={Default}/>
                            {/*<AuthenticatedRoute*/}
                            {/*    Component= {Default}*/}
                            {/*    path = "/userdashboard/default"*/}
                            {/*    redirectPath= "/userlogin"*/}
                            {/* />*/}
                             <AuthenticatedRoute
                                Component= {RegCase}
                                path = "https://rihanreactdev.github.io/deploy-settlement/userdashboard/registercase"
                                redirectPath= "/userlogin"
                             />
                             <AuthenticatedRoute
                                Component= {SecureContract}
                                path = "https://rihanreactdev.github.io/deploy-settlement/userdashboard/securecontract"
                                redirectPath= "/userlogin"
                             />
                             <AuthenticatedRoute
                                Component= {ViewCaseDetail}
                                path = "https://rihanreactdev.github.io/deploy-settlement/userdashboard/accesscasedetail"
                                redirectPath= "/userlogin"
                             />
                             <AuthenticatedRoute
                                Component= {Calendar}
                                path = "https://rihanreactdev.github.io/deploy-settlement/userdashboard/timeline"
                                redirectPath= "/userlogin"
                             />
                             {/*<AuthenticatedRoute*/}
                             {/*   Component= {Project}*/}
                             {/*   path = "/userdashboard/contact"*/}
                             {/*   redirectPath= "/userlogin"*/}
                             {/*/>*/}
                      </BrowserRouter>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
}

export default AppLayout;
