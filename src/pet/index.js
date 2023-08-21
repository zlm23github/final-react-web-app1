import React from "react";
import IndexRouter from "./router/index-router";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./reducer/auth-reducer";
import cargoReducer from "./reducer/cargo-reducer";
import inputReducer from "./reducer/input-reducer";
import moodReducer from "./reducer/mood-reducer";

const store = configureStore(
    {reducer: {user: authReducer, cargo: cargoReducer, input: inputReducer, mood: moodReducer}});

function Pet() {
    return(
        <Provider store={store}>
            <div className="row">
                
                <IndexRouter/>
            </div>
        </Provider>
        
    )
}
export default Pet