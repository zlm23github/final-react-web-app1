import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { findCargoByIdThunk } from "../service/cargo-thunk";
import "./detail.css"

function Detail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cargoId } = useParams();
    const [cargoData, setCargoData] = useState([])
   
    console.log("cargoId");
    console.log(cargoId);
    // const cargo = useSelector(state => state.cargo[cargoId])
    // console.log("cargo");
    // console.log(cargo);
    
    
    const [currentCargo, setCurrentCargo]  = useState(null);

    

    useEffect(() => {
        const fetchData = async (cargoId) => {
            const action = await dispatch(findCargoByIdThunk(cargoId));
            const data = action.payload;
            setCargoData(data);
            console.log("data");
            console.log(cargoData);
        }
        fetchData(cargoId);
    }, [])

    const handleBackToHome = () => {
        navigate("/home")
    }

    if (!cargoId) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <div className="detail-container">
                <div className="detail-card">
                    <h2 className="detail-title">product Details</h2>
                    <img
                        width={50}
                        height={50}
                        src={`${cargoData.img}`}
                        alt={cargoData.name}
                        className="detail-image"
                    />
                    <div className="detail-info">
                    <p><strong>Name:</strong> {cargoData.name}</p>
                    <p><strong>Description:</strong> {cargoData.desc}</p>
                    <p><strong>Price:</strong> ${cargoData.price}</p>
                    <p><strong>Sold:</strong> {cargoData.sales}</p>
                    {/* Add other details as needed */}
                    </div>
                    <button 
                        style={{float: "right"}}
                        className="btn btn-primary"
                        onClick={handleBackToHome}>
                            Back to Home
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default Detail