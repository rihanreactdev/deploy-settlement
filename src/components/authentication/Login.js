import React from "react";
import logo1 from '../../assets/img/logo.png'
import {Link} from "react-router-dom";
import {LOGIN} from "../../redux/authentication/actionTypes";
import {useDispatch} from "react-redux";

function Login() {

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
                                                    onClick = {(e)=>{
                                                        dispatch({type : LOGIN, email, password})
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="sign-up">
                                        <p>
                                            <Link to="/forgotpassword">Forgot Password ?</Link>
                                        </p>
                                    </div>
                                    <div className="sign-up">
                                        <p>
                                            Don't have an account? <Link to="/signup">Sign up now</Link>
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

export default Login;
