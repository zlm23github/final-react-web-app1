import React from "react";
import TopBar from "./topbar";
import Content from "./content";
import Footer from "./footer";
import IndexRouter from "../router/index-router";


function Home() {
    


    return(
        <div>
            <h1>Home</h1>
            <div>
                <TopBar/>
            </div>
            <div>
               
                <Content/>
            </div>
            
        
        
            <Footer/>
         
            
            
            
            

        </div>
    )
}
export default Home