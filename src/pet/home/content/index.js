import React from "react";
import { Outlet } from "react-router";
import PopularItem from "./popular-item";
import MyCart from "./my-cart";
import FloatWindow from "./float-window";
import Products from "./products";
import CargoList from "../../cargo-list";


function Content() {
    return(
        <div>
            <div>
                <div style={{backgroundColor: "white", height: "40px", 
                    color: "darkblue", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <b>Happy Shopping!</b>
                </div>
                <div>
                    <FloatWindow/>
                </div>
                
            </div>
            
            <Products/>
            <Outlet/>
            <CargoList/>
        </div>
    )
}
export default Content