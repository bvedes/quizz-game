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
    if (count > 3) {
      setShow("end");
    }
  }, [count]);

  if (show === "init") {
    return (
      <div className="sm:w-[800px] mx-auto p-4 sm:pt-24 flex flex-col gap-4 items-center justify-center">
        <div className="text-3xl">Benvinda&apos;s Quizz Game</div>
        <button
          className="px-4 py-2 bg-indigo-800 text-white font-semibold"
          onClick={() => setShow("start")}
        >
          Start Game
        </button>
      </div>
    );
  }

  if (show === "start") {
    return (
      <div className="sm:w-[800px] mx-auto p-4 sm:pt-24 flex items-center justify-center">
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
      <div className="sm:w-[800px] mx-auto p-4 sm:pt-24 flex items-center justify-center">
        <Result results={results} handleRestart={handleRestart} />
      </div>
    );
  }
};
export default Game;
