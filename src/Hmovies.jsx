import React from "react";
import "./Hmovies.css"


function Hmovies(props){
  return(
       <>
       <div  className="hmovie-info">
      <img className="hmv-img" src={props.src} alt="movieimage" />


    </div>
    
    </>
    

  ) 
}
export default Hmovies;