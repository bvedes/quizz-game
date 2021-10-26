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
  const [disable, setDisable] = useState(false);

  const handleSolution = (userAnswer) => {
    const isCorrect = userAnswer === question.solution;
    const score = isCorrect ? 10 : -10;
    renderSolution(isCorrect);
    setResults([...results, { ...question, userAnswer, isCorrect, score }]);
  };

  function renderSolution(isCorrect) {
    if (isCorrect) {
      setSolution(true);
    } else {
      setSolution(false);
    }
  }

  const nextQuestion = () => {
    setSolution();
    incrementCounter();
    setQuestion(questions[getRandomInt(questions.length)]);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center py-4 text-3xl">
        {question.question}
      </div>
      <div className="py-2">Please, pick the right answer:</div>
      <div className="flex flex-col gap-4">
        {question.options.map((option, idx) => {
          return (
            <button
              key={idx}
              className="py-4 px-4 rounded-sm shadow-sm bg-indigo-500 text-white text-left w-full"
              disabled={disable}
              onClick={() => {
                console.log("option: ", option);
                handleSolution(option);
                setDisable(true);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
      {solution !== undefined ? (
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-8 p-4 bg-gray-100 rounded-sm shadow-sm">
          <div className="text-center sm:text-left">
            {solution ? (
              <span className="text-green-500 font-semibold">Correct</span>
            ) : (
              <span className="text-red-500 font-semibold">
                Wrong, the answer is:
                <span className="text-green-600 font-semibold">
                  {question.solution}
                </span>
              </span>
            )}
          </div>
          <button
            className="sm:ml-auto bg-indigo-800 text-white px-4 py-2 rounded-sm shadow-sm"
            onClick={() => {
              nextQuestion();
              setDisable(false);
            }}
          >
            Next Question
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default Questions;
