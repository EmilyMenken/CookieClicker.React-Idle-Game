import pumpkinWinner from "../assets/pumpkinVictory.png";
import "../styles.css";

function Victory({ totalClicks, timeLeft, pumpkinType, resetGame }) {

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
    )
}

export default Victory;
