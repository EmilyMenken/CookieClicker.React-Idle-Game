import { useState } from "react";

import pumpkinYellow from "../assets/pumpkinA.png";
import pumpkinPeach from "../assets/pumpkinB.png";
import pumpkinOrange from "../assets/pumpkinC.png";
import pumpkinGroup from "../assets/pumpkinGroup.png";
import pumpkinRotten from "../assets/pumpkinRotten";

let timer;


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

    const [timeLeft, setTimeLeft] = useState(30); // timer
    const [timerRunning, setTimerRunning] = useState(false);
    

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
            <h1> {timeLeft} seconds </h1>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={resetTimer}>Reset Timer</button>
            
            <button onClick={handleClick}><img src={pumpkinGroup} alt="icon"/></button>
            <p>Current Clicks: {clickCount}</p>
            <button onClick={() => setCount(count + 1)}><img src={randImg()} alt="pumpkin"/></button>

        </div>
    )
}

export default Game
