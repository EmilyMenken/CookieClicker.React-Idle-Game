import React from "react";
import pumpkinYellow from "../assets/pumpkinA.png";
import pumpkinPeach from "../assets/pumpkinB.png";
import pumpkinOrange from "../assets/pumpkinC.png";
import pumpkinRotten from "../assets/pumpkinRotten.png";
import "../styles.css";

export default function Sidebar({ position }) {
    if (position === "left") {
        return (

            <div className="sidebar-left">
                <h4>Click the </h4>
                <img src={pumpkinYellow} alt="yellow pumpkin" className="normal-img"/>
                  <h4> yellow,</h4> 
                <img src={pumpkinPeach} alt="peach pumpkin" className="normal-img"/>
                   <h4> peach, and </h4>
                <img src={pumpkinOrange} alt="orange pumpkin" className="normal-img"/>
                  <h4>  orange pumpkins! </h4>
                
                <div className="normal-pumpkins">
                </div>
            </div>
            
        )
    } else if (position === "right") {
        return (
            <div className="sidebar-right">
                <h4>Watch out for the rotten pumpkin! Clicking it means certain death!</h4>
                <img src={pumpkinRotten} alt="rotten pumpkin" className="rotten-img"/>
            </div>
        )
    } else {
        return null; 
    }
}
