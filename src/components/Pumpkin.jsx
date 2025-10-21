import { useState } from "react";

import pumpkinYellow from "../assets/pumpkinA.png";
import pumpkinPeach from "../assets/pumpkinB.png";
import pumpkinOrange from "../assets/pumpkinC.png";
import pumpkinRotten from "../assets/pumpkinRotten.png";
import pumpkinWinner from "../assets/pumpkinVictory.png";
import Sidebar from "./Sidebar";
import Timer from "./Timer";
import "../styles.css";

let timer;
let pumpkinChangeTimer;

function Game() {
    const [clickCount, setCount] = useState(90);
    const [totalClicks, setTotalClicks] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [victory, setVictory] = useState(false);
    const [pumpkinType, setType] = useState([
        { id: 1, size: "small", color: "Yellow", img: pumpkinYellow, count: 0 },
        { id: 2, size: "medium", color: "Peach", img: pumpkinPeach, count: 0 },
        { id: 3, size: "large", color: "Orange", img: pumpkinOrange, count: 0 },
        { id: 4, size: "rotten", color: "Brown", img: pumpkinRotten, count: 0 },
    ]);
    const [timeLeft, setTimeLeft] = useState(60);
    const [timerRunning, setTimerRunning] = useState(false);
    const [randomPumpkin, setRandomPumpkin] = useState(getRandomPumpkin());
    
    if (timerRunning) return;
    setTimerRunning(true);

    function getRandomPumpkin() {
        if (!gameOver && !victory) {
            const weighted = [
                0,0,0,0,0,
                1,1,1,1,1,
                2,2,2,2,2,
                3
            ];
            const randIndex = Math.floor(Math.random() * weighted.length);
            return weighted[randIndex];
        }
        return 0;
    }
    
    const pumpkin = pumpkinType[randomPumpkin];

    function handleClick() {
        if (gameOver || !timerRunning || victory) return; 

        setTotalClicks(t => t + 1);

    setCount(c => {
        c = c - 1;
        if (c <= 0) {
            setVictory(true);
            clearInterval(timer);
            clearInterval(pumpkinChangeTimer);
            setTimerRunning(false);
        }
        return c;
    });

    setType(prev => prev.map(p => p.id === pumpkin.id ? { ...p, count: p.count + 1 } : p));

    if (pumpkin.color === "Brown") {
        setGameOver(true);
        clearInterval(timer);
        clearInterval(pumpkinChangeTimer);
        setTimerRunning(false);
        return;
    }

    setRandomPumpkin(getRandomPumpkin());
}

    function resetGame() {
        clearInterval(timer);
        clearInterval(pumpkinChangeTimer);
        setCount(90);
        setTotalClicks(0);
        setGameOver(false);
        setVictory(false);
        setType([
            { id: 1, size: "small", color: "Yellow", img: pumpkinYellow, count: 0 },
            { id: 2, size: "medium", color: "Peach", img: pumpkinPeach, count: 0 },
            { id: 3, size: "large", color: "Orange", img: pumpkinOrange, count: 0 },
            { id: 4, size: "rotten", color: "Brown", img: pumpkinRotten, count: 0 },
        ]);
        setTimeLeft(60);
        setTimerRunning(false);
        setRandomPumpkin(getRandomPumpkin());
    }

if (victory) {
    return(
        <div className="game-over">
            <h2>Great job! You saved the pumpkin patch!</h2>
            <img src = {pumpkinWinner} alt = "pumpkin holding a thumbs up" style ={{width: "150px"}}/>
            <h4>Stats:</h4>
            <p>Total Clicks: {totalClicks}</p>
            <p>Time left on timer: {timeLeft} seconds</p>
            <ul>
                {pumpkinType.map(p => {
                    const displayColor = p.color === "Brown" ? "Rotten" : p.color;
                    return <li key={p.id}>{displayColor} pumpkin clicks: {p.count}</li>
                })}
            </ul>
            <button className="timerButton" onClick={resetGame}>Play Again</button>
        </div>
    );
}

if (gameOver) {
    return(
        <div className="game-over">
            <h2>Game Over!</h2>
            <h4>Stats:</h4>
            <p>Total Clicks: {totalClicks}</p>
            <p>You had {clickCount} clicks left</p>
            <p>Time left on timer: {timeLeft} seconds</p>
            <ul>
                {pumpkinType.map(p => {
                    const displayColor = p.color === "Brown" ? "Rotten" : p.color;
                    return <li key={p.id}>{displayColor} pumpkin clicks: {p.count}</li>
                })}
            </ul>
            <button className="timerButton" onClick={resetGame}>Play Again</button>
        </div>
    );
}

    return(
    <div className="game-container-horizontal">
        <Sidebar position="left" />
        <div className="game-main">
            <h2>Bring the Click Count to 0 before time runs out!</h2>
            <h3>{timeLeft} seconds</h3>
            <button className="timerButton" onClick={startTimer}>Start Timer</button>
            <button className="timerButton" onClick={stopTimer}>Stop Timer</button>
            <button className="timerButton" onClick={resetTimer}>Reset Timer</button>
            
            <p>Current Clicks Remaining: {clickCount}</p>
            <p>Total Clicks: {totalClicks}</p>
            <button className="pumpkinButton" onClick={handleClick}>
                <img 
                    src={pumpkin.img} 
                    alt="pumpkin picture"
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "12px",
                        padding: "5px",
                    }}
                />
            </button>
        </div>
        <Sidebar position="right" />
    </div>
);
}

export default Game;
