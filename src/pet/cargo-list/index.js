import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import CargoItem from "./cargo-item";
import {findCargoThunk} from "../service/cargo-thunk.js";



const CargoList = () => {
    const {cargo, loading} = useSelector(state => state.cargo)
    const dispatch = useDispatch();
    console.log("nono");
    console.log(cargo);
    useEffect(() => {
        dispatch(findCargoThunk())
    }, [])

    return(
        <ul className="list-group">
            { loading &&
                <li className="list-group-item">
                Loading...
                </li>
            }

            {
                cargo.map(c =>
                    <CargoItem
                        key={c._id}
                        cargo={c}/>
                )
            }
        </ul>
    )
}
export default CargoList;