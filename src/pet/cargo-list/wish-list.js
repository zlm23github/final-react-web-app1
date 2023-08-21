// import React, {useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import CargoItem from "./cargo-item";
// import {findCargoThunk} from "../service/cargo-thunk.js";



// const WishList = () => {
//     const { currentUser } = useSelector(state => state.user) 
//     const [profile] = useState(currentUser)
//     const {cargo, loading} = useSelector(state => state.cargo)
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(findCargoThunk())
//     }, [])

//     let filterCargo = cargo.filter(c => c.)

//     return(
//         <ul className="list-group">
//             { loading &&
//                 <li className="list-group-item">
//                 Loading...
//                 </li>
//             }

            
//             {
//                filterCargo.map(c =>
//                     <CargoItem
//                         key={c._id}
//                         c={c}/>
//                 ) 
//             }
            
//         </ul>
//     )
// }
// export default WishList;