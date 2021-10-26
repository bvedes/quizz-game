const Result = ({ results, handleRestart }) => {
  console.log("results: ", results);

  const totalScore = results.map(({ score }) => score).reduce((a, b) => a + b);

  return (
    <div className="w-full">
      <div className="justify-center items-center">
        <div className="flex justify-between"></div>
        {results.map((result, idx) => {
          const { question, solution, userAnswer } = result;

          return (
            <div
              key={idx}
              className="border-4 mb-4 border-opacity-25 bg-gray-100 flex p-4 items-center justify-between"
            >
              <div className="bg-gray-100 flex">
                <div>
                  <div className="font-extrabold mb-4">{question}</div>
                  <div className="lg:flex">
                    Your answer was:
                    {userAnswer === solution ? (
                      <p className="lg:ml-2 text-green-600">{userAnswer}</p>
                    ) : (
                      <p className="lg:ml-2 text-red-600">{userAnswer}</p>
                    )}
                  </div>
                  <div className="lg:flex">
                    The right answer is:
                    <p className="lg:ml-2 text-green-600">{solution}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:justify-between items-center p-4 lg:flex bg-indigo-500">
        <div className="lg:flex items-center text-white px-3 py-2">
          <div>Score:</div>
          <div className="ml-2">{totalScore}</div>
        </div>
        <button
          className="sm:ml-auto bg-indigo-800 text-white px-4 py-2 rounded-sm shadow-sm"
          onClick={() => handleRestart()}
        >
          Restart
        </button>
      </div>
    </div>
  );
};
export default Result;
