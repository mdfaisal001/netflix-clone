import React from "react";
import leologo from "../src/netimages/leologo.png";
import leoimage from "../src/netimages/leo.jpg";
import play from "../src/netimages/playbutton.png";
import info from "../src/netimages/info button.png";
import "./Mainmv.css"

function MainMovie(){

    return(
     
            <div className="leo-layer">
              <div>
            <img className="leo-image" src ={leoimage} alt="leoimage" />
             </div>
            <div className="leo-about">
              <div className="leo-logo-layer" >
              <img className="leo-logo" src ={leologo} alt="leoimage" />
              </div>
              <div className="leo-info">
              <p >Parthiban is a mild mannered cafe owner in Kashmir,<br></br>
            who fends off a gang of murderous thugs and gains <br></br>attention from a drug cartel claiming
            he was once a part of them.</p>
            </div>
            </div>
            <div className="button-layer">
                <div>
                  <button className="play-button">
                    <div >
                      <img className="play-icon" src ={play} alt="playimage" /> 
                    </div>
                    <div className="playtext">
                        Play
                    </div>
                    </button>
                 </div>
                 <div>
                  <button className="info-button">
                    <div>
                       <img className="info-icon" src ={info} alt="infoimage" />
                    </div>
                    <div className="info_info">
                       <p>More info</p>
                    </div>
                 </button>
                 
                </div>
            </div>
            
              
            </div>
       
    )
}
export default MainMovie;