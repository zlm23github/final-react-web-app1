import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate} from "react-router";
import { profileThunk, logoutThunk, updateUserThunk, getThunk } from "../service/auth-thunk";
import "./profile.css"


function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    const [ profile, setProfile ] = useState(currentUser);
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

    useEffect(() => {
        if (profile === null) {
          const loadProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
          };
          loadProfile();
        }
      }, [dispatch, profile]);

    // useEffect(() => {
    //     const loadProfile = async () => {
            
    //         const { payload } = await dispatch(profileThunk());
    //         setProfile(payload);             
    //         };
    //         loadProfile();
    //   }, []); 
    return(
        <div className="profile-container">
            <div className="profile-content">
                <form className="profile-name-container">
                    {profile !== null &&
                        (
                        <div className="profile-name-container">
                            <div className="profile-name">
                            <label>FirstName: </label>
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
                            <label>LastName: </label>
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
                                <label>Email: </label>
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
                                <label>Address: </label>
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
                                    onClick={save}>save</button>
                            </div>
                        </div>
                    )}
                </form>
                <div style={{ float: "right"}}>
                    <button
                        style={{alignSelf: "center",float:"right", display: "flex" }}
                        className="btn btn-primary"
                        onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/login");
                        }}>Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Profile