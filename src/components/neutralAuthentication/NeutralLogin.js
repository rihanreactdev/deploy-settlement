import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../../assets/img/logo.png'
import {useDispatch} from "react-redux";
import {NEUTRAL_LOGIN} from "../../redux/authentication/actionTypes";

function NeutralLogin() {

    const [email, setEmail] = React.useState('divagartest2@mailinator.com');
    const [password, setPassword] = React.useState('Divagar007');
    const dispatch = useDispatch();

    return (
        <div className="login-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="login-box">
                            <div className="login">
                                <div className="content">
                                    <img src={logo1} alt="Logo"/>
                                    <h2>Neutral Login Form</h2>
                                    <form action="#">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Email*"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e)=>{
                                                            setEmail(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Password*"
                                                        type="text"
                                                        value={password}
                                                        onChange={(e)=>{
                                                            setPassword(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <button
                                                    type="submit"
                                                    onClick = {()=>{
                                                        dispatch({type : NEUTRAL_LOGIN, email, password})
                                                    }}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="sign-up">
                                        <p>
                                            <Link to="/neutralforgotpassword">Forgot Password ?</Link>
                                        </p>
                                    </div>
                                    <div className="sign-up">
                                        <p>
                                            Don't have an account? <Link to="/neutralsignup">Sign up now</Link>
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

export default NeutralLogin;
