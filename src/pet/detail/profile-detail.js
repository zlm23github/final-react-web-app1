import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { findUserByIdThunk } from "../service/auth-thunk";
import "./detail.css"

function ProfileDetail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userId } = useParams();
    const [userData, setUserData] = useState([])
    console.log("userId");
    console.log(userId);


    // const cargo = useSelector(state => state.cargo[cargoId])
    // console.log("cargo");
    // console.log(cargo);
    
    
    // const [currentCargo, setCurrentCargo]  = useState(null);

    

    useEffect(() => {
        const fetchData = async (userId) => {
            const action = await dispatch(findUserByIdThunk(userId));
            const data = action.payload;
            
            setUserData(data);
            console.log("data");
            console.log(action);
            console.log(userData);
        }
        fetchData(userId);
    }, [])

    const handleBackToNext = () => {
        navigate("/profile/next")
    }

    if (!userId) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <div className="detail-container">
                <div className="detail-card">
                    <h2 className="detail-title">{userData.firstName}'s Details</h2>
                    <img
                        width={50}
                        height={50}
                        src={`${userData.img}`}
                        alt={userData.firstName}
                        className="detail-image"
                    />
                    <div className="detail-info">
                    <p><strong>FirstName:</strong> {userData.firstName}</p>
                    <p><strong>LastName:</strong> {userData.lastName}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    
                    </div>
                    <button 
                        style={{float: "right"}}
                        className="btn btn-primary"
                        onClick={handleBackToNext}>
                            Back to Profile
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default ProfileDetail