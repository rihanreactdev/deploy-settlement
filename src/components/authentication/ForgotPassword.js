import React from "react";
import logo1 from '../../assets/img/logo.png'
import {
    FORGOT_PASSWORD_STEP_ONE,
    FORGOT_PASSWORD_STEP_TWO,
    RESET_FORGOT_PASSWORD_STEP_ONE_SUCCESS
} from "../../redux/authentication/actionTypes";
import {useDispatch, useSelector} from "react-redux";

function ForgotPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [otpCode, setOtpCode] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const forgotPasswordStepOneSuccess = useSelector(store => store.Authentication.forgotPasswordStepOneSuccess);

    React.useEffect(()=>{
        dispatch({type : RESET_FORGOT_PASSWORD_STEP_ONE_SUCCESS});
    }, [dispatch]);

    if(forgotPasswordStepOneSuccess) {
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
                                                            dispatch({type : FORGOT_PASSWORD_STEP_TWO, email, otpCode, password})
                                                        }}
                                                    >
                                                        SUBMIT
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
                                                    onClick = {() => {
                                                        dispatch({type : FORGOT_PASSWORD_STEP_ONE, email})
                                                    }}
                                                >
                                                    Next
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

export default ForgotPassword;
