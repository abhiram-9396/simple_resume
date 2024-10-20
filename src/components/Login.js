import React, { useState } from "react";

function Login () {
    
    const [Regestered, setRegestered] = useState(false);

    const [Picon, setPicon] = useState(true);

    const [Cicon, setCicon] = useState(true);

    function signupClick() {
        setRegestered(false);
    }

    function loginClick() {
        setRegestered(true);
    }

    function ShowPwd() {
        var x = document.getElementById('pwdinput');
        if(x.type == 'password'){
            setPicon(false);
            x.type = "text";
        }else{
            setPicon(true);
            x.type = "password"
        }
    }

    function ShowCpwd() {
        var x = document.getElementById('cpwdinput');
        if(x.type == 'password'){
            setCicon(false);
            x.type = "text";
        }else{
            setCicon(true);
            x.type = "password"
        }
    }

    return (
        <>
        <div  className="col-md-4 text-center my-3 margin">
        {Regestered ? <h3 className="mt-4">Login Here</h3> : <h3 className="mt-4">Signup Here</h3> }
            <form className="my-3 " id="login_form">
                <div className="input-group col-md-4 my-4">
                    <div className="input-group col-md-4 my-4 flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-envelope custom-icon"></i></span>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping"/>
                    </div>

                    <div className="input-group col-md-4 my-4 flex-nowrap">
                        <input type="password" className="form-control" id="pwdinput" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                        <span className="input-group-text" id="addon-wrapping"> {Picon ? <i className="fa-solid fa-eye custom-icon eye-icon" onClick={ShowPwd}></i> : <i class="fa-solid fa-eye-slash custom-icon eye-icon" onClick={ShowPwd}></i>}  </span>
                    </div>

                    {!Regestered && <div className="input-group col-md-4 my-4 flex-nowrap">
                        <input type="password" className="form-control" id="cpwdinput" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="addon-wrapping"/>
                        <span className="input-group-text" id="addon-wrapping"> {Cicon ? <i className="fa-solid fa-eye custom-icon eye-icon" onClick={ShowCpwd}></i> : <i class="fa-solid fa-eye-slash custom-icon eye-icon" onClick={ShowCpwd}></i>} </span>
                    </div>}
                    
                    {Regestered && <h6 className="login-signup">Forgot Password</h6>}
                    
                    <div className="col-12">
                        {Regestered ? <h6 className="login-signup" onClick={signupClick}>New User? Signup</h6> : <h6 className="login-signup" onClick={loginClick}>Already A User? Login</h6> }
                        
                        <button type="button" className="btn btn-primary btn-md m-2">Cancel</button>
                        {Regestered && <button type="button" className="btn btn-primary btn-md m-2">Login</button> }
                        {!Regestered && <button type="button" className="btn btn-primary btn-md m-2">Signup</button> }
                    </div>
                </div>

            </form>
        </div>
        </>
    )
}

export default Login;