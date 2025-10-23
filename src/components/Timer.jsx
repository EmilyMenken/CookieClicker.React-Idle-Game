
function Timer({
    setTimeLeft,
    setTimerRunning,
    setGameOver,
    setRandomPumpkin,
    getRandomPumpkin,
    setCount,
    setTotalClicks
}) {

    let timer = null;
    let pumpkinChangeTimer = null;

    function startTimer() {
        if (timer || pumpkinChangeTimer) return;

        timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    clearInterval(pumpkinChangeTimer);
                    timer = null;
                    pumpkinChangeTimer = null;
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
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        if (pumpkinChangeTimer) {
            clearInterval(pumpkinChangeTimer);
            pumpkinChangeTimer = null;
        }
        setTimerRunning(false);
    }

    function resetTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        if (pumpkinChangeTimer) {
            clearInterval(pumpkinChangeTimer);
            pumpkinChangeTimer = null;
        }
        setTimeLeft(60);
        setCount(90);
        setTotalClicks(0);
        setTimerRunning(false);
    }

    return { startTimer, stopTimer, resetTimer };
}

export default Timer;
