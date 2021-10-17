import { useState } from "react";
import { questions } from "../../utils";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Questions = ({ incrementCounter }) => {
  const [solution, setSolution] = useState();
  const [results, setResults] = useState([]);

  const [question, setQuestion] = useState(
    questions[getRandomInt(questions.length)]
  );

  const handleSolution = (option) => {
    // 1_ verificar se a opção está correta
    // 2- mostrar no ecrã se está correto ou não e a resposta correta.
    const isCorrect = testSolution(option);
    // 3- guardar informação para mostrar nos resultados.
    setResults([...results, { ...question, userAnswer: option, isCorrect }]);
  };
  console.log("results: ", results);

  function testSolution(option) {
    console.log("option: ", option === question.solution);
    if (option === question.solution) {
      setSolution("Correct");
    } else {
      setSolution(`Wrong, the right answer is ${question.solution}`);
    }
    return option === question.solution;
  }
  const nextQuestion = () => {
    setSolution();
    incrementCounter();
    setQuestion(questions[getRandomInt(questions.length)]);
  };

  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-16">
        <div className="col-span-2 bg-gray-100 flex p-2 items-center justify-center">
          {question.question}
        </div>
        <div className="row-span-2 col-span-2 bg-gray-200 flex p-2 items-center justify-center ">
          {question.options.map((option, idx) => {
            return (
              <div key={idx} className="flex">
                <button
                  className="bg-grey-500 p-2 mx-2"
                  onClick={() => handleSolution(option)}
                >
                  {option}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {solution ? (
        <div className="flex justify-between p-4">
          Solution:{solution}
          <button onClick={() => nextQuestion()}>next</button>
        </div>
      ) : null}
    </div>
  );
};
export default Questions;
