import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { findMoodThunk } from "../../service/mood-thunk";
import MoodItem from "./mood-item";

const MoodList = () => {
    const { mood, loading } = useSelector(state => state.mood)
    const dispatch = useDispatch();
    useEffect(() => {
        const value = dispatch(findMoodThunk())
    }, [])

    return(
        <ul className="list-group">
            { loading &&
                <li className="list-group-item">
                Loading...
                </li>
            }

            {
                mood.map(m =>
                <MoodItem
                    key={m._id}
                    mood={m}/>
                )
            }
        </ul>

    )
}
export default MoodList