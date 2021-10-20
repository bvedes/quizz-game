import { useState } from "react";
const Result = ({ results, handleRestart }) => {
  console.log("results: ", results);

  const totalScore = results.map(({ score }) => score).reduce((a, b) => a + b);

  return (
    <div className="">
      <div className="mt-16 justify-center items-center">
        <div className="flex justify-between">
          <div className="p-4">Result:</div>
        </div>
        {results.map((result, idx) => {
          const { question, solution, userAnswer, score } = result;

          return (
            <div
              key={idx}
              className="border-4 my-8 border-opacity-25 bg-gray-100 flex p-2 items-center justify-between"
            >
              <div className="bg-gray-100 flex">
                <div>
                  <div className="font-extrabold">{question}</div>
                  <div className="flex">
                    Your answer was:
                    <p className="ml-10 text-red-600">{userAnswer}</p>
                  </div>
                  <div className="flex">
                    The right answer is:
                    <p className="ml-6 text-green-600">{solution}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="justify-between items-center p-4 flex bg-gray-100">
        <div className="p-4">
          Score: <div>{totalScore}</div>
        </div>
        <button onClick={() => handleRestart()}>Restart</button>
      </div>
    </div>
  );
};
export default Result;
