import React from "react";
import "../src/header.css";
import searchicon from  "../src/netimages/search.svg.svg";
import bellicon from "../src/netimages/bellicon.png"
import usericon from "../src/netimages/userimg.jpeg"
import downicon from "../src/netimages/dropdown.png"




function Header(){
    return(
       
        <div className="header">
          <img className="logo"src ={require("../src/netimages/netflix.logo.png")}alt="ellipsis-img" />
            <div className="Menus">
              <p className="Home-menu">Home</p>
              <p className="tv-menu">Tv shows</p>
              <p className="movies-menu">Movies</p>
              <p className="popular-menu">News & Popular</p>
              <p className="mylist-menu">My list</p>
            </div>
            <div className="endsection">
               <div className="search">
                 <input className="searchbar" type="search" id="search-input" placeholder="Search Movies,Series,Dramas" />
                 <img className="searchicon" src ={searchicon} alt="searchimage" />
                </div>
               <div className="login-icons">
                <div>
                <p className="childacc">
                  Children
                </p>
                </div>
                <div>
                  <img className="bell-icon" src ={bellicon} alt="searchimage" />
                </div>
                <div>
                <img className="user-icon" src ={usericon} alt="userimage" />
                </div>
                <div>
                <img className="down-icon" src ={downicon} alt="downimage" />
                </div>
             </div>
           </div>
        </div>
  
    )

}


export default Header;