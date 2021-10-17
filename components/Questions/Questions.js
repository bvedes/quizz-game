import { useState } from "react";
import { questions } from "../../utils";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Questions = ({ setShow }) => {
  const [solution, setSolution] = useState();
  const [count, setCount] = useState(0);

  const [question, setQuestion] = useState(
    questions[getRandomInt(questions.length)]
  );

  console.log("question: ", question);

  function testSolution(option) {
    console.log("option: ", option === question.solution);
    if (option === question.solution) {
      setSolution("Correct");
    } else {
      setSolution(`Wrong, the right answer is ${question.solution}`);
    }
  }
  const nextQuestion = () => {
    setSolution();
    setCount(count + 1);
    setQuestion(questions[getRandomInt(questions.length)]);
  };

  console.log("count: ", count);

  if (count > 3) {
    setShow("end");
  }

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
                  onClick={() => testSolution(option)}
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
