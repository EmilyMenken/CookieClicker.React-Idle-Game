import { useState } from "react";

import pumpkinYellow from "../assets/pumpkinA.png";
import pumpkinPeach from "../assets/pumpkinB.png";
import pumpkinOrange from "../assets/pumpkinC.png";
import pumpkinGroup from "../assets/pumpkinGroup.png";
import pumpkinRotten from "../assets/pumpkinRotten.png";

let timer;


function Game()
{
    const [clickCount, setCount] = useState(0);
    // const [rotten, setEndGame] = useState(false);
    const [pumpkinType, setType] = useState([{
        size: "small",
        color: "yellow",
        img: pumpkinYellow,
        count: 0
    },
    {
        size: "medium",
        color: "peach",
        img: pumpkinPeach,
        count: 0
    },
    {
        size: "large",
        color: "orange",
        img: pumpkinOrange,
        count: 0
    },
    {
        size: "rotten",
        color: "brown",
        img: pumpkinRotten,
        count: 0
    }]);
    const [timeLeft, setTimeLeft] = useState(30); // timer
    const [timerRunning, setTimerRunning] = useState(false);

    clickCount = 90;
    
//Timer functions
    function startTimer() {
        if (timerRunning) return; // sets single timer
        setTimerRunning(true);

        timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setTimerRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }

     function resetTimer() {
        clearInterval(timer);   
        setTimeLeft(30); // reset timer to 30 seconds
        setTimerRunning(false);   
    }

     function stopTimer() {
        clearInterval(timer);
        setTimerRunning(false);
    }

    function handleClick(){
        console.log("CLICKED"); 
    }

//get random image function
    function randImg()
    {
        const rand = Math.floor(Math.random() * 4); // 0 - 3
        if(rand === 0)
        {
            return pumpkinType[0]
        }
        else if(rand === 1)
        {
            return pumpkinType[1]
        }
        else if(rand === 3)
        {
            return pumpkinType[2]
        }
        else //rand === 4
        {
            return pumpkinType[3]
        }
    }

    const flag = true;
    if(flag)
    do{
        return(
        <div className="main">
            <h2>Bring the Click Count to 0 before time runs out!</h2>
            <h3> {timeLeft} seconds </h3>
            <button className= "timerButton" onClick={startTimer}>Start Timer</button>
            <button className= "timerButton" onClick={stopTimer}>Stop Timer</button>
            <button className= "timerButton" onClick={resetTimer}>Reset Timer</button>
            
            {/* <button className= "pumpkinButton" onClick={handleClick}><img src={pumpkinGroup} alt="icon"/></button> */}
            <p>Current Clicks: {clickCount}</p>
            <button className= "pumpkinButton" onClick={() => setCount(clickCount - 1)}><img src={randImg()} alt="pumpkin"/></button>
        </div>
        )
    }while(timer < 0 && clickCount > 0) 
    return(
        <div className="game-over">
            <h2>Game Over!</h2>
            <h4>Stats:</h4>
            <p>You had {clickCount} clicks left</p>
            <p>You clicked a total {pumpkinType[0].count + pumpkinType[1].count + pumpkinType[2].count + pumpkinType[3].count} times</p>
            <ul>
                <li id="yellow">Yellow Pumpkin clicks: +{pumpkinType[0].count}</li>
                <li id="peach">Peach Pumpkin clicks: +{pumpkinType[1].count}</li>
                <li id="orange">Orange Pumpkin clicks: +{pumpkinType[2].count}</li>
                <li id="rotten">Rotten Pumpkin clicks: -{pumpkinType[3].count}</li>
            </ul>
        </div>
    )
}


export default Game