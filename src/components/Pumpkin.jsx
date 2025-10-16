import { useState } from "react";

function Game()
{
    const [clickCount, setCount] = useState(0);
    const [rotten, setEndGame] = useState(flase);
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
        
        </div>
    )
}

export default Game

// p1
//  small, yellow
// p2
//  medium, peach
// p3
// large, orange