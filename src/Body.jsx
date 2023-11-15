import React from "react";
import Header from "./Header.jsx";
import MainMovie from "./Mainmv.jsx";
import Toppicks from "./Toppicks.jsx";
import Hmovies from "./Hmovies.jsx";
import "./body.css";
import Tpimages from "./TPinformation.js";
import Himages from "./Hmvinformation.js";
import {FaChevronLeft , FaChevronRight} from "react-icons/fa"

function CreateTp(TInfo){
    return(
        <Toppicks
        key={TInfo.id}    
        src={TInfo.src}  
       
        
        />

    )
}
function CreateHw(HInfo){
    return(

        <Hmovies
        key={HInfo.id}    
        src={HInfo.src}
        
        />
    )
}

function Body(){
    const sliderLeft = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft -400

    }
    const sliderRight = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 400

    }
    const sliderLeft1 = () =>{
        let slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft -400

    }
    const sliderRight2 = () =>{
        let slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft + 400

    }
 
  

    




    return(
       <div id ="total-page">
        <div className="headersec">
            <Header/>
        </div>
        <div className="bodysetion">
        <div  >
            <MainMovie/>
        </div>
        <div>
        <p className="heading1">Top picks for you</p>
        </div>
        <div  id ="slider" className="tpmovie1">
          
          {Tpimages.map(CreateTp)}
           
        </div>
        <FaChevronLeft onClick={sliderLeft}  className="left-arr"/>  
        <FaChevronRight  onClick={sliderRight} className="right-arr"/>
        <div>

        </div>
        <p className="heading2">Hollywood Movies</p>
        </div>
        <div id="slider2"className="Hmovie">
        {Himages.map(CreateHw)}
        </div>
        <FaChevronLeft  onClick={sliderLeft1} className="left-arr2"/>  
        <FaChevronRight onClick={sliderRight2}  className="right-arr2"/>
        </div>
    )

}
export default Body;