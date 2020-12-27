import React from "react";
import logo1 from '../../assets/img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import {REGISTER_STEP_ONE, REGISTER_STEP_TWO, RESET_REGISTER_STEP_ONE_SUCCESS} from "../../redux/authentication/actionTypes";
import {Link} from "react-router-dom";

function Register() {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [otpCode, setOtpCode] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const registerStepOneSuccess = useSelector(store => store.Authentication.registerStepOneSuccess);

    console.log("stepOneSuccess", registerStepOneSuccess);

    React.useEffect(()=>{
        dispatch({type : RESET_REGISTER_STEP_ONE_SUCCESS});
    }, [dispatch]);

    if(registerStepOneSuccess) {
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
                                                            placeholder="Otp*"
                                                            type="text"
                                                            value={otpCode}
                                                            onChange={(e)=>{
                                                                setOtpCode(e.target.value);
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
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            placeholder="Confirm Password*"
                                                            type="text"
                                                            value={confirmPassword}
                                                            onChange={(e)=>{
                                                                setConfirmPassword(e.target.value);
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
                                                            console.log("name", otpCode);
                                                            console.log("email", password);
                                                            console.log("email", confirmPassword);
                                                            dispatch({type : REGISTER_STEP_TWO, email, otpCode, password})
                                                        }}
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
                                                        placeholder="Name"
                                                        type="text"
                                                        value={name}
                                                        onChange={(e)=>{
                                                            setName(e.target.value);
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
                                                <button
                                                    type="submit"
                                                    onClick = {()=>{
                                                        console.log("name", name);
                                                        console.log("email", email);
                                                        dispatch({type : REGISTER_STEP_ONE , name, email})
                                                    }}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="sign-up">
                                        <p>
                                            Already have an account? <Link to="/login" replace>Login now</Link>
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

export default Register;
