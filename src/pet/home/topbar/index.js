import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { findCargoByNameThunk, findCargoThunk } from "../../service/cargo-thunk";
import { setInput } from "../../reducer/input-reducer";
import { logoutThunk } from "../../service/auth-thunk";
import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 

function TopBar() {
    const{ currentUser } = useSelector((state) => state.user)
    
    const[login, setLogin] = useState("Login");
    


    const input = useSelector(state => state.input);
    // const [input, setInput] = useState(inputValue);
    const [cargoData, setCargoData] = useState([]); 
    const dispatch = useDispatch();
    const navigate = useNavigate();


   
    const fetchData = async () => {
        const action = await dispatch(findCargoThunk());
        const data = action.payload;
        console.log("data");
        console.log(data);
        setCargoData(data);
        return data.some(item => item.name.toLowerCase().includes(input.toLowerCase()));

    }

    
    
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const flag = await fetchData();
            if (flag) {
                navigate("/search");
            } else {
                throw new Error("Not found");
            }
            // console.log("cargo");
            // console.log(cargoData);
            // if(cargoData.some(item => item.name.includes(input))) {
            //     console.log("i am in ");
            //     navigate("/search");
            // } else {
            //     throw new Error("Not found");
            // }
        } catch(e) {
            alert(e);
        }
    }

   
    
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate("/login")
    }
    
    return(
        <div style={{backgroundColor: "lightblue"}}>
            <div className="row pt-4" style={{height: "50px"}}>
                <div className="col-2">
                    <img 
                        className="logo"
                        src="/images/logo.png" width={150} height={80} />
                </div>
                <div className="col-6">
                    <form className="form">
                        <input 
                            type="name"
                            placeholder="Type to Search"
                            className="form-control rounded-pill ps-5 input"
                            value={input}
                            onChange={async (e) => 
                                await dispatch(setInput(e.target.value))}/>
                        <button
                            className="search-button"
                            onClick={handleSearch}>
                            <FontAwesomeIcon className="mag" icon={faMagnifyingGlass} />   
                        </button>
                                                                                   
                    </form>
                </div>
                <div className="col-4 login-regist">
                    {/* <button
                        className="buttonStyle"
                        onClick={handleSearch}
                        >Search</button> */}
                {/* </div>
                <div className="col-1"> */}
                    {currentUser ? (
                        <Link to="/login" 
                            className="buttonStyle"
                            onClick={handleLogout}>
                            Logout
                        </Link>
                        ) : (
                        <Link to="/login"
                            className="buttonStyle">
                            Login
                        </Link>
                    )}
                {/* </div>
                <div className="col-1"> */}
                    {currentUser ? (
                            <Link to="/profile/next"
                                className="buttonStyle">
                                <p>Setting</p>
                            </Link>
                            ) : (
                            <Link to="/regist"
                                className="buttonStyle">
                                Regist
                            </Link>
                    )}
                    
                </div>
            </div>

            <nav className="nav nav-tabs pt-5">
                <Link className="nav-link col-4" style={{textAlign: "center", backgroundColor: "darkblue", color: "white"}} to="/home/food">
                <b>Food</b></Link>
                <Link className="nav-link col-4" style={{textAlign: "center", backgroundColor: "darkblue", color: "white"}} to="/home/pharmacy">
                <b>Pharmacy</b></Link>
                <Link className="nav-link col-4" style={{textAlign: "center", backgroundColor: "darkblue", color: "white"}} to="/home/deals">
                <b>Deals</b></Link>
            </nav>
            
            
        </div>
    )
}
export default TopBar