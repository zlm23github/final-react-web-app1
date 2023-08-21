import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../service/auth-thunk";
import "./login.css"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        let flag = false;
        try {
            await dispatch(loginThunk({ username, password })).then((resp)=>{
                    if(resp.payload != null) {
                        flag = true;
                        return navigate("/profile");
                    }
                }
            )
            if(!flag) return alert("Username or password wrong!");
            
            
        } catch (e) {
            alert(e);
        }
    }

    const backToHome = () => {
        navigate("/home")
    }
    
    return(
        <div className="login-container">
            <div className="login-wrap">
                <div>
                    <h2>Login</h2>
                    <Link to={"/regist"} style={{color: "grey"}}>Don't have account?</Link>
                    <form>
                        <fieldset>
                            <input
                                className="form-control"
                                type="username"
                                value={username}
                                placeholder="Username"
                                onChange={(event) => setUsername(event.target.value)}/>    
                            
                        </fieldset>
                        <fieldset>
                            <input
                                className="form-control"
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}/>
                        </fieldset>
                        <fieldset style={{paddingTop: "10px"}} >
                            <button
                                style={{float: "right"}}
                                className="btn btn-primary "
                                onClick={handleLogin}>
                                Login
                            </button>
                            <button 
                                className="btn btn-primary"
                                onClick={backToHome}>
                                Back to Home
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login