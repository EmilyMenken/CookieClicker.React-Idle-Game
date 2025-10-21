import Pumpkin from "./Pumpkin";

function Timer(timeLeft, timerRunning){

    let timer;
    let pumpkinChangeTimer;

    function startTimer() {

            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        clearInterval(pumpkinChangeTimer);
                        setTimerRunning(false);
                        setGameOver(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            pumpkinChangeTimer = setInterval(() => {
                setRandomPumpkin(getRandomPumpkin());
            }, 2000);
        }

        function resetTimer() {
            clearInterval(timer); 
            clearInterval(pumpkinChangeTimer);
            setTimeLeft(60);
            setCount(90);
            setTotalClicks(0);  
            setTimerRunning(false);   
        }

        function stopTimer() {
            clearInterval(timer);
            clearInterval(pumpkinChangeTimer);
            setTimerRunning(false);
        }
        //game over 
        return(
            <p>Time left on timer: {timeLeft} seconds</p>


        )

        // <h2>Bring the Click Count to 0 before time runs out!</h2>
        //     <h3>{timeLeft} seconds</h3>
        //     <button className="timerButton" onClick={startTimer}>Start Timer</button>
        //     <button className="timerButton" onClick={stopTimer}>Stop Timer</button>
        //     <button className="timerButton" onClick={resetTimer}>Reset Timer</button>
            
        


}