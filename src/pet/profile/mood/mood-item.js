import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteMoodThunk, updateMoodThunk } from "../../service/mood-thunk";
import { profileThunk } from "../../service/auth-thunk";
import { getAllUserThunk } from "../../service/auth-thunk";
import { useNavigate } from "react-router";
import "./mood-item.css"
import { getRoles } from "@testing-library/react";

const MoodItem = (
    {   
        mood = {
            mid: 123,
            topic: "happy",
            like: false,
            likes: 1555
        }
    }
) => {


    const [like, setLike] = useState(mood.like);
    const [likes, setLikes] = useState(mood.likes + 1);
    
    const  {users}  = useSelector(state => state.user)
    const currentUser = useSelector(state => state.user.currentUser);
    const [allUsers, setAllUsers] = useState(users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const loadProfile = async () => {
    //       await dispatch(profileThunk());
    //     //   setCurrentProfile(payload);
          
    //     };
    //     loadProfile();
    //   }, [dispatch]); 
    

    useEffect(() => {
        dispatch(getAllUserThunk())
        .then((data) => {
            setAllUsers(data.payload);
        })
    }, [dispatch]);

    const deleteMoodHandler = id => {
        if (mood.mid === currentUser._id) {
          dispatch(deleteMoodThunk(id));
        } else {
          alert("You can only delete your own mood.");
        }
      };


    const current = allUsers.filter(a => a._id === mood.mid);
    
    const profileDetailHandle = () => {
        if(current.length > 0) {
            navigate(`/profileDetail/${current[0]._id}`);
        } else {
            alert("Sorry! Anonymous user cannot be seen.")
        }
    }

    return (
        <div>
            <li className="list-group-item mood-item" style={{borderRadius: "5px", width: "50%"} } >
                <div className="row item-content">
                    
                    <div className="user-info" >
                        <div className="row">
                            <div className="col-4">
                                {current.length > 0 ? <img className="user-avatar" src={current[0].img} onClick={profileDetailHandle}></img> : <img className="user-avatar" src="/images/anonymous.png" onClick={profileDetailHandle}></img>}
                            </div>
                            <div className="col-8">
                                {current.length > 0 ? current[0].firstName : "anonymous"}
                            </div>
                            <button className="x-button" onClick={() => deleteMoodHandler(mood._id)}>
                                <FontAwesomeIcon className="x-mark" icon={faXmark}/>
                            </button>
                
                        </div>
                    </div>
                    <div className="row">
                        <span style={{color:"grey"}}>Today's mood:</span>  
                        <span style={{color: "darkblue"}}> <b>{mood.topic}</b></span>
                    </div>
                                
                </div>
            </li>
        </div>
    );
};
export default MoodItem