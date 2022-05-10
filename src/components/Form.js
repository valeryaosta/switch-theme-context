import React from "react";

const Form = () => {
    return (
        <div className="main">
            <p className="sign">Sign In</p>
            <form className="form-wrapper">
                <input className="name-pass" type="text" placeholder="Username"/>
                <input className="name-pass" type="password" placeholder="Password"/>
                <a href="#" className="submit">Sign In</a>
                <p className="forgot" align="center">
                    <a href="#">Forgot password?</a>
                </p>
            </form>

        </div>
    );
};

export default Form;