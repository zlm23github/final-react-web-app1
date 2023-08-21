import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllUserThunk } from "../service/auth-thunk";
import UserItem from "./user-item";

const UserList = () => {
    const { users } = useSelector(state => state.user)
    const dispatch = useDispatch();
    console.log("user");
    console.log(users);

    useEffect(() => {
        dispatch(getAllUserThunk());
    }, [dispatch]);


    return(
        <ul className="list-group">
            {/* { loading &&
                <li className="list-group-item">
                Loading...
                </li>
            } */}

            {
                users.map(u =>
                <UserItem
                    key={u._id}
                    user={u}
                    mood={u.mood}/>
                )
            }
        </ul>

    )
}
export default UserList