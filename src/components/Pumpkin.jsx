import { useState } from "react";

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
            <p>Current Clicks: {clickCount}</p>
            <button onClick={handleClick}><img src="./assets/pumpkinIcon.jpg" alt="icon"/></button>
        </div>
    )
}



export default Game
