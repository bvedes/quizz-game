import { useState } from "react";
import Questions from "../components/Questions";
import Result from "../components/Result";

const Game = () => {
  const [show, setShow] = useState("init");
  console.log("show: ", show);

  // Eu quero que o estado mude para end ao final de dez perguntas.

  if (show === "init") {
    return (
      <div className="bg-gray-200 p-4">
        <div>
          <div className="p-6">Game of Quizz</div>
          <button className="p-2 bg-gray-500" onClick={() => setShow("start")}>
            Start Game
          </button>
        </div>
      </div>
    );
  }

  if (show === "start") {
    return (
      <div className="mx-60">
        <Questions setShow={setShow} />
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
