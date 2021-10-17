const Result = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 mt-16">
      <div className="col-span-2 bg-gray-100 flex p-2 items-center justify-center">
        Result:
      </div>

      <div className="row-span-2 col-span-2 bg-gray-200 flex p-2 items-center justify-center ">
        <div className="flex justify-between">
          <div className="p-4">Corrects:</div>
          <div className="p-4">Incorrects:</div>
          <div className="p-4">Points:</div>
        </div>
      </div>
    </div>
  );
};
export default Result;
