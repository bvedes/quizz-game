const Result = ({ results, handleRestart }) => {
  console.log("results: ", results);

  return (
    <div className="">
      <div className="p-2 mt-16 justify-center items-center">
        <div className="flex justify-between">
          <div className="p-4">Result:</div>
          <div className="p-4">Score:{}</div>
        </div>
        {results.map((result, idx) => {
          const { question, solution, userAnswer, score } = result;
          console.log("score: ", score);
          return (
            <div key={idx} className="flex bg-gray-100 p-4 justify-between">
              <div className="col-span-2 bg-gray-100 flex ">
                <div>{question}</div>{" "}
                <div className="mx-4">Answer:{userAnswer}</div>
                <div>Correct Answer:{solution}</div>
              </div>
              <div>{score}</div>
            </div>
          );
        })}
      </div>
      <div className="justify-end items-center flex bg-gray-200  p-2 ">
        <button onClick={() => handleRestart()}>Restart</button>
      </div>
    </div>
  );
};
export default Result;
