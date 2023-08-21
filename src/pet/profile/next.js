import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../service/auth-thunk";
import CargoList from "../cargo-list";
import Mood from "./mood";
import { createMoodThunk } from "../service/mood-thunk";
import "./next.css"



function Next() {
    const { currentUser } = useSelector((state) => state.user);
    const[ profile, setProfile] = useState(currentUser);
    const[ saveButton, setSaveButton] = useState("Save")
    const [whatsYourMood, setWhatsYourMood] = useState("") 
    // const [cargo, setCargo] = useState(
    //     {
    //         name: "",
    //         img: "",
    //         desc: "",
    //         sales: ""
    //     });
    
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // const moodClickHandler = async () => {
        
    //     await dispatch(updateUserThunk(profile));
    //     setWhatsYourMood("");
    // }
    console.log("232341");
    console.log(profile._id);
    const moodClickHandler = () => {
        const newMood = {
            topic: whatsYourMood,
            like: false,
            mid: profile._id,
        }
        dispatch(createMoodThunk(newMood));
        setWhatsYourMood("");
    }

    const save = async (e) => { 
        try{   
            
            await dispatch(updateUserThunk(profile)); 
            
            setSaveButton("Save Again")
        } catch(e){
            alert(e)
        }
        
    };
    

    const edit = async() => {
        navigate("/profile/edit");
    }


    const backToHome = () => {
        navigate("/home")
    }


    return(
        <div className="container next-container">  
            <div className="row next-header">
                <div className="col-8">
                    <h1 >Profile</h1>
                </div>
                <div className="col-4" >
                    <button
                        style={{marginRight: "5px"}}
                        className="btn btn-primary"
                        onClick={edit}> 
                        Edit My Profile
                    </button>
                {/* </div>
                <div className="col-2"> */}
                    <button 
                        style={{marginRight: "5px"}}
                        className="btn btn-primary"
                        onClick={backToHome}>
                            Back to Home
                    </button>
                        
                    <button
                        
                        className="btn btn-primary"
                        onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/login");
                        }}>Logout</button>
                </div> 
            </div>

            <div className="row next-greeting" style={{paddingTop: "20px", paddingBottom: "20px"}}>
                <p className="greeting" style={{color: "darkblue", fontSize: "28px"}}><b>Hi, {profile.firstName}!</b></p>
                <p className="address" style={{color: "darkblue", fontSize: "24px"}}>Your package will be sent to: {profile.address}</p>
            </div>
            
            <div className="row next-mood">
                <div className="col-3">
                    
                    {profile ? <img src={profile.img} width={60} height={60}></img> : <img src="/images/anonymous.png" width={60} height={60}></img>}
                    {/* <form id="textarea">
                        <textarea 
                            cols={"30"} 
                            rows={"2"} 
                            placeholder="Say something?"
                            value={profile.textarea}
                            onChange={(event) => {
                                const newProfile = {
                                ...profile, textarea: event.target.value,
                                };
                                setProfile(newProfile);}}>
                                </textarea>
                    </form>
                    <div className="d-flex justify-content-end">  
                        <button 
                            className="btn btn-primary mt-2"
                            style={{display: "flex", width: "65px", alignItems: "center", justifyContent: "center"}}
                            onClick={save}>{saveButton}  </button>
                    </div> */}
                    <div style={{paddingTop: "10px"}}>                    
                        <textarea 
                            cols={"30"} 
                            rows={"2"} 
                            value={whatsYourMood} 
                            placeholder="What's your mood today?"
                            // onChange={(event) => {
                            //     const newProfile = {
                            //     ...profile, mood: event.target.value,
                            //     };
                            //     setProfile(newProfile);
                            //     setWhatsYourMood(event.target.value)}}>
                            
                            onChange={(event) => setWhatsYourMood(event.target.value)}>
                        </textarea>
                       
                    </div>
                    <div >
                        <button 
                            style={{marginBottom: "10px"}}
                            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={moodClickHandler}>
                            Create
                        </button>
                    </div>

                </div>
            </div>
            
            <div className="row next-mood-list">
                <Mood/>
            </div>

        </div>
        
    )
    
}
export default Next;