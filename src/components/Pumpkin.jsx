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


    function handleClick()
    {
        console.log("CLICKED");
    }
    
    function randImg()
    {
        const rand = Math.floor(Math.random() * 3); // 0 - 2
        if(rand === 0)
        {
            return pumpkinOrange
        }
        else if(rand === 1)
        {
            return pumpkinPeach
        }
        else //rand === 3
        {
            return pumpkinOrange
        }
    }

    return(
        <div>
            
            <button onClick={handleClick}><img src={randImg()} alt="pumpkin"/></button>

        </div>
    )
}



export default Game
