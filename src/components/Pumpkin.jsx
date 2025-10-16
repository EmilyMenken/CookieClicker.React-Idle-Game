import { useState } from "react";

import pumpkinYellow from "../assets/pumpkinA.png";
import pumpkinPeach from "../assets/pumpkinB.png";
import pumpkinOrange from "../assets/pumpkinC.png";
import pumpkinGroup from "../assets/pumpkinGroup.png";



function Game()
{
    const [clickCount, setCount] = useState(0);
    const [rotten, setEndGame] = useState(false);
    const [pumpkinType, setType] = useState([{
        size: "small",
        color: "yellow",
        count: 0
    },
    {
        size: "medium",
        color: "peach",
        count: 0
    },
    {
        size: "large",
        color: "orange",
        count: 0
    }]);


    function handleClick(){
        console.log("CLICKED");
  }
    
    return(
        <div>
            
            <button onClick={handleClick}><img src={pumpkinGroup} alt="icon"/></button>

        </div>
            
        
    )
}



export default Game
