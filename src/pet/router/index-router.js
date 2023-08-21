import React from "react";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "../home";
import Login from "../login";
import Profile from "../profile";
import Detail from "../detail";
import Search from "../search";
import Food from "../home/content/food";
import Pharmacy from "../home/content/pharmacy";
import Deals from "../home/content/deals";
import Regist from "../regist";
import Next from "../profile/next";
import Edit from "../profile/edit";
import ProfileDetail from "../detail/profile-detail";

function IndexRouter() {
    
    return (
        <HashRouter>
            <Routes>
         
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/regist" element={<Regist/>}/>
                <Route path="/home" element={ <Home/>}> 
                    <Route path="food" element={<Food/>}/>
                    <Route path="pharmacy" element={<Pharmacy/>}/>
                    <Route path="deals" element={<Deals/>}/>
                </Route>
                <Route path="/profile" element={ <Profile/>}/>
                <Route path="/profile/next" element={<Next/>}/>
                <Route path="/profile/edit" element={<Edit/>}/>
                {/* <Route path="/detail" element={ <Detail/>}/> */}
                <Route path="/detail/:cargoId" element={ <Detail/> } />
                <Route path="/profileDetail/:userId" element={<ProfileDetail/>}/>
                <Route path="/search" element={ <Search/>}/>       
                
                    
            </Routes>
        </HashRouter>
        

    )
}
export default IndexRouter