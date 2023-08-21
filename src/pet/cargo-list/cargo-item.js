import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import { findCargoByIdThunk } from "../service/cargo-thunk";
import "./cargo-item.css"

const CargoItem = (
    {   
        cargo = {
            _id : 1231231,
            name: 'nulo',
            img: '/images/canfood3.jpg',
            desc: 'cat3',
            sales: 12345
        }
    }
) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cargoData, setCargoData] = useState([]);

    const fetchData = async (cargoId) => {
        const action = await dispatch(findCargoByIdThunk(cargoId));
        const data = action.payload;
        setCargoData(data);
        console.log("data");
        console.log(cargoData);
    }

    const detailHandle = () => {
        fetchData(cargo._id);
        navigate(`/detail/${cargo._id}`)
    }

    return (
        <div>
            <li className="list-group-item cargo-item" style={{borderRadius: "5px"}} onClick={detailHandle}>
                <div className="row">
                    <div
                        style={{display: "flex", alignItems: "center", justifyContent: "center"}} 
                        className="col-1">
                        <img 
                            width={60}
                            height={60} 
                            className="rounded-3" src={`${cargo.img}`}/>
                    </div>
                    <div className= "col-11">
                        <h3 style={{color: "darkblue"}}><b>{cargo.name}</b></h3>
                        <p style={{color: "red"}}><b>Price: ${cargo.price}</b></p>
                        <p style={{color: "red"}}><b>Sold: {cargo.sales}</b></p>
                    </div>
                </div>
            </li>

        </div>
    );
};
export default CargoItem;