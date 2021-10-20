import { useState } from "react";
import { useEffect } from "react";
import Questions from "../components/Questions";
import Result from "../components/Result";

const Game = () => {
  const [show, setShow] = useState("init");
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const handleRestart = () => {
    setShow("init");
    setCount(0);
    setResults([]);
  };

  useEffect(() => {
    if (count > 2) {
      setShow("end");
    }
  }, [count]);

  if (show === "init") {
    return (
      <div className="mt-16 mx-60">
        <div className="border-4 my-8 border-opacity-25 bg-gray-100 flex p-2 items-center justify-center">
          Game Quizz
        </div>
        <div className="border-4 border-opacity-25 bg-gray-100 flex p-2 items-center justify-center">
          <button className="" onClick={() => setShow("start")}>
            Start Game
          </button>
        </div>
      </div>
    );
  }

  if (show === "start") {
    return (
      <div className="mx-60">
        <Questions
          count={count}
          incrementCounter={incrementCounter}
          results={results}
          setResults={setResults}
        />
      </div>
    );
  }

  if (show === "end") {
    return (
      <div className="mx-60">
        <Result results={results} handleRestart={handleRestart} />
      </div>
    );
  }
};
export default Game;
