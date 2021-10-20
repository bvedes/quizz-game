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
          const { question, solution, userAnswer } = result;

          return (
            <div
              key={idx}
              className="border-4 mb-4 border-opacity-25 bg-gray-100 flex p-4 items-center justify-between"
            >
              <div className="bg-gray-100 flex">
                <div>
                  <div className="font-extrabold">{question}</div>
                  <div className="p-2 lg:flex">
                    Your answer was:
                    {userAnswer === solution ? (
                      <p className="lg:ml-10 text-green-600">{userAnswer}</p>
                    ) : (
                      <p className="lg:ml-10 text-red-600">{userAnswer}</p>
                    )}
                  </div>
                  <div className="lg:flex p-2">
                    The right answer is:
                    <p className="lg:ml-6 text-green-600">{solution}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:justify-between items-center p-4 lg:flex bg-gray-100">
        <div className="lg:flex">
          Score:
          <div className="ml-4">{totalScore}</div>
        </div>
        <button onClick={() => handleRestart()}>Restart</button>
      </div>
    </div>
  );
};
export default Result;
