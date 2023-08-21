    import React, { useEffect, useState } from "react";
    import { useNavigate } from "react-router";
    import { useDispatch, useSelector } from "react-redux";
    import { findCargoByNameThunk, findCargoThunk } from "../service/cargo-thunk";
    import ResultItem from "./result-item";
    import CargoItem from "../cargo-list/cargo-item";


    function SearchResult() {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const input = useSelector(state => state.input);
        const { cargo } = useSelector(state => state.cargo)

        const filteredCargo = cargo.filter(item =>
            item.name.toLowerCase().includes(input.toLowerCase())
            )

        const backHandle = () => {
            navigate("/home")
        }

        return(
            <ul className="list-group">
                <div className="row">  
                    {   
                        filteredCargo.map(item => 
                                <CargoItem 
                                    key={item._id}
                                    cargo={item}/>
                                )
                    }
                    <button className="btn btn-primary" onClick={backHandle}>Back</button>
                </div>
            </ul>
        )
    }
    export default SearchResult