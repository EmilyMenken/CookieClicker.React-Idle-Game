import "../styles.css";

function Loss({ totalClicks, clickCount, timeLeft, pumpkinType, resetGame }) {

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
    )
}

export default Loss;
