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
        color: "Yellow",
        img: pumpkinYellow,
        count: 0
    },
    {
        size: "medium",
        color: "Peach",
        img: pumpkinPeach,
        count: 0
    },
    {
        size: "large",
        color: "Orange",
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

//get random image function
    function randImg()
    {
        const rand = Math.floor(Math.random() * pumpkinType.length); // 0 - 3
        return pumpkinType[rand];
    }
    const randImg = randImg().img


    function handleClick() {
        setType(prevImages =>
            prevImages.map(pumpkinType =>
            pumpkinType.img === randomImage.img
                ? { ...pumpkinType, count: pumpkinType.count + 1 } // increment only specific pumpkins count
                : pumpkinType
    ));}

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
            
            <p>Current Clicks: {clickCount}</p>
            <button className= "pumpkinButton" onClick={handleClick()}>
                <img src={randImg().img} alt="pumpkin"/>
            </button>
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
                {pumpkinType.map(p => (
                    <li>{p.color} pumpkin clicks: {p.count}</li>
                ))}
            </ul>
        </div>
    )
}


export default Game