import { useState } from "react";

function Game()
{
    const [clickCount, setCount] = useState(0);
    const [rotten, setEndGame] = useState(false);
    const [pumpkinType, setType] = ([{
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
    
    
    return(
        <div>
            <p>Current Clicks: {clickCount}</p>
        </div>
    )
}

export default Game
