
function Timer({
    setTimeLeft,
    setTimerRunning,
    setGameOver,
    setRandomPumpkin,
    getRandomPumpkin,
    setCount,
    setTotalClicks
}) {

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

        setTimerRunning(true);
    }

    function stopTimer() {
        clearInterval(timer);
        clearInterval(pumpkinChangeTimer);
        setTimerRunning(false);
    }

    function resetTimer() {
        clearInterval(timer);
        clearInterval(pumpkinChangeTimer);
        setTimeLeft(60);
        setCount(90);
        setTotalClicks(0);
        setTimerRunning(false);
    }

    return { startTimer, stopTimer, resetTimer };
}

export default Timer;
