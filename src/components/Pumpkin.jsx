import { useState } from "react";

import pumpkinYellow from "../assets/pumpkinA.png";
import pumpkinPeach from "../assets/pumpkinB.png";
import pumpkinOrange from "../assets/pumpkinC.png";
import pumpkinGroup from "../assets/pumpkinGroup.png";
import pumpkinRotten from "../assets/pumpkinRotten";



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
    },
    {
        size: "rotten",
        color: "brown",
        count: 0
    }]);
    
    function randImg()
    {
        const rand = Math.floor(Math.random() * 4); // 0 - 3
        if(rand === 0)
        {
            return pumpkinYellow
        }
        else if(rand === 1)
        {
            return pumpkinPeach
        }
        else if(rand === 3)
        {
            return pumpkinOrange
        }
        else //rand === 4
        {
            return pumpkinRotten
        }
    }


    //put return in while loop
    //  while time != 0 and pumpkinTypes[3].count === 0
    return(
        <div>
            <p>Current Clicks: {clickCount}</p>
            <button onClick={() => setCount(count + 1)}><img src={randImg()} alt="pumpkin"/></button>

        </div>
    )
}



export default Game
