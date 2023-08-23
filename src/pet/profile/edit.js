import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate} from "react-router";
import { profileThunk, logoutThunk, updateUserThunk, getThunk } from "../service/auth-thunk";
import "./edit.css"


function Edit() {
    const { currentUser } = useSelector((state) => state.user);
    const [ profile, setProfile ] = useState(currentUser);

    const [saveButton, setSaveButton] = useState("Save");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = async (e) => { 
        e.preventDefault();
        try{
            await dispatch(updateUserThunk(profile)); 
            navigate("/profile/next");
        } catch(e){
            alert(e)
        }
        
    };

    const cancel = () => {
        navigate("/profile/next");
    }

    // useEffect(() => {
    //     const loadProfile = async () => {
    //         const { payload } = await dispatch(getThunk(profile));
    //         setProfile(payload)
    //         };
    //         loadProfile();
    //   }, []); 
    return(
        <div className="container">
            {profile &&
                (
                <form className="profile-form">
                    <div className="profile-name">
                    <label className="form-label">FirstName: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Enter your FirstName"
                        value={profile.firstName}
                        onChange={(event) => {
                            const newProfile = {
                            ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                    }}/>
                    </div>

                    <div className="profile-name">
                    <label className="form-label">LastName: </label>
                    <input 
                        className="form-control" 
                        type="text" value={profile.lastName}
                        placeholder="Enter your LastName"
                        onChange={(event) => {
                            const newProfile = {
                            ...profile, lastName: event.target.value,
                            };
                            setProfile(newProfile);
                    }}/>
                    </div>

                    <div className="profile-name">
                        <label className="form-label">Email: </label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Enter your email"
                            value={profile.email}
                            onChange={(event) => {
                                const newProfile = {
                                ...profile, email: event.target.value,
                                };
                                setProfile(newProfile);
                        }}/>
                    </div>

                    <div className="profile-name">
                        <label className="form-label">Address: </label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Enter your address"
                            value={profile.address}
                            onChange={(event) => {
                                const newProfile = {
                                ...profile, address: event.target.value,
                                };
                                setProfile(newProfile);
                        }}/>
                    </div>

                    <div className="profile-save">
                        <button className="btn btn-primary"
                            onClick={save}>{saveButton}  </button>
                        <button className="btn btn-primary"
                            onClick={cancel}>Cancel</button>
                    </div>
                </form>
            )}

            
            
            
        </div>
    )
}
export default Edit