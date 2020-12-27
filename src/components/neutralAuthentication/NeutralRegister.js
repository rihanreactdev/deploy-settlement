import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../../assets/img/logo.png'

function NeutralRegister() {

    return (
        <div className="login-area" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="login-box">
                            <div className="login">
                                <div className="content">
                                    <img src={logo1} alt="Logo"/>
                                    <h2 style={{fontSize:'22px'}}>NEUTRAL SIGNUP FORM</h2>
                                    <form action="#">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Name" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Mobile number" type="number"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Email" type="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Password" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Designation" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group" style={{textAlign:'left'}}>
                                                    <label for="position">Accredition   </label>
                                                    <select id="position" name="position">
                                                        <option value="volvo">Designation</option>
                                                        <option value="saab">Institution</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row" style={{display:'flex',flexDirection:'row',textAlign:'left'}}>
                                                <input type="radio" id="willing" name="agree" value=""/>
                                                Are you willing to undertake pro-bono matters,if any subject to prior notice and convenience
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <button type="submit">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="sign-up">
                                        <p>
                                            Already have an account? <Link to="/neutrallogin" replace>Login now</Link>
                                        </p>
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

export default NeutralRegister;
