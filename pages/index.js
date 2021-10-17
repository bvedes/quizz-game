import { useState } from "react";
import { useEffect } from "react";
import Questions from "../components/Questions";
import Result from "../components/Result";

const Game = () => {
  const [show, setShow] = useState("init");
  const [count, setCount] = useState(0);

  console.log("show: ", show);
  console.log("count: ", count);

  // Eu quero que o estado mude para end ao final de dez perguntas.

  const incrementCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
    if (count > 2) {
      setShow("end");
    }
  }, [count]);

  if (show === "init") {
    return (
      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-16 mx-60">
        <div className="col-span-2 bg-gray-100 flex p-2 items-center justify-center">
          Game of Quizz
        </div>

        <button
          className="row-span-2 col-span-2 bg-gray-200 flex p-2 items-center justify-center "
          onClick={() => setShow("start")}
        >
          Start Game
        </button>
      </div>
    );
  }

  if (show === "start") {
    return (
      <div className="mx-60">
        <Questions count={count} incrementCounter={incrementCounter} />
      </div>
    );
  }

  if (show === "end") {
    return (
      <div className="mx-60">
        <Result />
        Falta mostrar as estatisticas do jogo... Falta botao para reiniciar o
        jogo..
      </div>
    );
  }
};
export default Game;
