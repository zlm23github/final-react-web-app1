import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const UserItem = (
    {
        user = {
            firstName: "Liming",
            mood: "happy",
            like: false,
            likes: 1555
        }
    }
) => {
    const [like, setLike] = useState(user.like);
    const [likes, setLikes] = useState(user.likes + 1);
    const dispatch = useDispatch();

   

    // useEffect(() => {
    //     const data = dispatch(getAllUserThunk());
    //     // setAllUsers(data);
    //     // console.log("22222222222");
    //     // console.log(allUsers);
    // }, [dispatch]);

    // const deleteMoodHandler = (id) => {
    //     dispatch(deleteMoodThunk(id));
    // }
    
    return (
        <div>
            <li className="list-group-item" >
                <div className="row">
                    {/* <FontAwesomeIcon className="bi bi-x-lg float-end" icon={faXmark} onClick={() => deleteMoodHandler(user_id)}/> */}
                    {user.firstName}
                    {user.mood}
                    
                </div>
                <div className="row">

                </div>
            </li>
        </div>
    );
};
export default UserItem








// import React from "react";

// const UserItem = (
//     { 
//         user = {
//             _id: 123,
//             firstName: "Liming"
//         }
//     }
// ) => {
//     return (
//       <li className="list-group-item">
//         <h3>{user.username}</h3>
//         <p>Email: {user.email}</p>
//       </li>
//     );
// };

//   export default UserItem