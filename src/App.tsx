import { useState, useEffect, MouseEvent } from "react";
import "./App.css";

function App() {
  const [numberOfUserMinutes, setNumberOfUserMinutes] = useState(5);
  const [secondsAmount, setSecondsAmount] = useState(numberOfUserMinutes * 60);
  const [initialValueInSeconds, setInitialValueInSeconds] =
    useState(secondsAmount);
  const [isStarting, setIsStarting] = useState(false);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    if (isStarting && secondsAmount > 0) {
      setTimeout(() => {
        setSecondsAmount((state) => state - 1);
      }, 1000);
    }
    if (secondsAmount === 0) {
      alert("O tempo acabou!");
    }
  }, [secondsAmount]);

  function start(e: MouseEvent) {
    if (e.currentTarget.textContent === "Iniciar") {
      startCounter();
    } else {
      setSecondsAmount(initialValueInSeconds);
    }
  }

  function startCounter() {
    setTimeout(() => {
      if (secondsAmount > 0 && !isStarting) {
        setSecondsAmount((state) => state - 1);
        setIsStarting(true);
      }
    }, 1000);
  }

  function setNewTime() {
    const newTime = Number(
      prompt("Digite quantos minutos deseja que o contador tenha")
    );
    setSecondsAmount(newTime * 60);
    setNumberOfUserMinutes(newTime);
    setInitialValueInSeconds(secondsAmount);
  }

  return (
    <div className="container">
      <div className="box-counter">
        <div className="counter">
          <span onClick={setNewTime}>{String(minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(seconds).padStart(2, "0")}</span>
        </div>
        <div className="box-buttons">
          <div className="button-start-and-stop start" onClick={start}>
            Iniciar
          </div>
          <div
            className="button-start-and-stop stop"
            onClick={() => setIsStarting(false)}
          >
            Parar
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
