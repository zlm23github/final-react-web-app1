import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "../service/auth-service";
import "./regist.css"

function Regist() {
    const currentUser = false;
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            username: "",
            password: "",
            img: "/images/anonymous.png"
        });

    const handleRegist = async (e) => {
        try{
            const newUser = await register(user);
            setUser(newUser);
            navigate("/profile");
        } catch(e){
            alert(e)
        }
        
    };

    const backToHome = () => {
        navigate("/home")
    }

    return(
        <div className="regist-container">
            <div className="regist-wrap">
                <div>
                    <h2>Regist</h2>
                    <Link to={"/login"} style={{color: "grey"}}>Already have account?</Link>
                    <form>
                        <fieldset>
                            <input
                                className="form-control"
                                type="username"
                                value={user.username}
                                placeholder="Username"
                                onChange={(e) => setUser({...user, username: e.target.value})}/>    
                        </fieldset>
                        <fieldset>
                            <input
                                className="form-control"
                                type="password"
                                value={user.password}
                                placeholder="Password"
                                onChange={(e) => setUser({...user, password: e.target.value})}/>
                        </fieldset>
                        <fieldset style={{paddingTop: "10px"}} >
                            
                            <button
                                style={{float: "right"}}
                                className="btn btn-primary"
                                onClick={handleRegist}>
                                Regist
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
export default Regist