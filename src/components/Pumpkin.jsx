import { useState } from "react";

import pumpkinYellow from "../assets/pumpkinA.png";
import pumpkinPeach from "../assets/pumpkinB.png";
import pumpkinOrange from "../assets/pumpkinC.png";
import pumpkinRotten from "../assets/pumpkinRotten.png";
import "../styles.css";

let timer;


function Game()
{
    const [clickCount, setCount] = useState(90);
    const [totalClicks, setTotalClicks] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [pumpkinType, setType] = useState([
    { id: 1, size: "small", color: "Yellow", img: pumpkinYellow, count: 0 },
    { id: 2, size: "medium", color: "Peach", img: pumpkinPeach, count: 0 },
    { id: 3, size: "large", color: "Orange", img: pumpkinOrange, count: 0 },
    { id: 4, size: "rotten", color: "Brown", img: pumpkinRotten, count: 0 },
    ]);
    const [timeLeft, setTimeLeft] = useState(30); // timer
    const [timerRunning, setTimerRunning] = useState(false);
    const [randomPumpkin, setRandomPumpkin] = useState(getRandomPumpkin());

    
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
    function getRandomPumpkin()
    {
        if(!gameOver)
        {
            const rand = Math.floor(Math.random() * pumpkinType.length); // 0 - 3
            return rand;
        }
        return 0;
    }
    
    const pumpkin = pumpkinType[randomPumpkin];

    function handleClick() {
    if (gameOver) 
        return;

    setTotalClicks(function (t) {
      return t + 1;
    });

    setCount(function (c) { // decrease clicks and check for 0
        c = c -1;
        if (c <= 0) {
            setGameOver(true);
        }
        return c;
    });

    if (pumpkin.color === "Brown") //end game if clicked
    {
      setGameOver(true);
      return;
    }

    setType(function (prev) { //count clicks for specific type
      const updated = prev.map(function (p) {
        if (p.id === pumpkin.id) 
        {
          return { ...p, count: p.count + 1 };
        } 
        else 
        {
          return p;
        }
      });
      return updated;
    });
    
    setRandomPumpkin(getRandomPumpkin()); //get new rand pumpkin after every click NOT second
  }

    if(gameOver)
    {
        return(
        <div className="game-over">
            <h2>Game Over!</h2>
            <h4>Stats:</h4>
            <p>You had {clickCount} clicks left</p>
            <p>You clicked a total {totalClicks} times</p>
            <ul>
                {
                    pumpkinType.map(function (p) {
                    return (
                    <li key={p.id}>
                        {p.color} pumpkin clicks: {p.count}
                    </li>
                    )})
                }
            </ul>
            
        </div>
        )
    }
    return(
        <div className="main">
        <h2>Bring the Click Count to 0 before time runs out!</h2>
            <h3> {timeLeft} seconds </h3>
            <button className= "timerButton" onClick={startTimer}>Start Timer</button>
            <button className= "timerButton" onClick={stopTimer}>Stop Timer</button>
            <button className= "timerButton" onClick={resetTimer}>Reset Timer</button>
            
            <p>Current Clicks Remaining: {clickCount}</p>
            <p>Total Clicks: {totalClicks}</p>
            <button className= "pumpkinButton" onClick={handleClick}>
                <img 
                    src={pumpkin.img} 
                    alt="pumpkin"
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "12px",
                        padding: "5px",
                    }}
                />
            </button>
        </div>
    )
    
}


export default Game