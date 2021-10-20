import { useState } from "react";
import { questions } from "../../utils";
import { GoChevronRight } from "react-icons/go";

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
    const score = isCorrect ? 10 : -10;
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
    <div className="w-1/2">
      <div className="mt-16">
        <div className="border-4 my-8 border-opacity-25 bg-gray-100 flex p-2 items-center justify-center">
          {question.question}
        </div>
        {question.options.map((option, idx) => {
          return (
            <div
              key={idx}
              className="flex border-4 border-opacity-25 bg-gray-100 mb-2"
            >
              <button
                className="p-2 px-4"
                onClick={() => handleSolution(option)}
              >
                {option}
              </button>
            </div>
          );
        })}
      </div>
      {solution ? (
        <div className="p-4 border-4 border-opacity-25 bg-gray-100 items-center lg:flex">
          Solution:
          <div className="ml-2">{solution}</div>
          <button className="ml-auto text-xl" onClick={() => nextQuestion()}>
            <GoChevronRight />
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default Questions;
