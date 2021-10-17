import { useState } from "react";
import { questions } from "../../utils";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Questions = ({ incrementCounter, results, setResults }) => {
  const [solution, setSolution] = useState();
  const [question, setQuestion] = useState(
    questions[getRandomInt(questions.length)]
  );

  const handleSolution = (userAnswer) => {
    const isCorrect = userAnswer === question.solution;
    const score = isCorrect ? 1 : -1;
    renderSolution(isCorrect);
    setResults([...results, { ...question, userAnswer, isCorrect, score }]);
  };

  function renderSolution(isCorrect) {
    if (isCorrect) {
      setSolution("Correct");
    } else {
      setSolution(`Wrong, the right answer is ${question.solution}`);
    }
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
