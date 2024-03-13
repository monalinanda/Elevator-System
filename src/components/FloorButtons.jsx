import { useStateContext } from "../utils/StateContex";

const FloorButtons = () => {
  const {
    numbersOfDailers,
    isClosed,
    setIsClosed,
    elevatorRequests,
    onFloorRequest,
  } = useStateContext();

  const handleOpenButton = () => {
    setIsClosed(!isClosed);
  };

  const dailerFunction = () => {
    const arrayOfDailers = [];
    for (let i = numbersOfDailers; i >= 0; i--) {
      arrayOfDailers.push(
        <button
          className={`w-14 h-14 flex justify-center items-center border-white border-2  rounded-full text-center  shadow-lg shadow-gray-500/50 font-bold${
            elevatorRequests[i] ? " bg-red-500" : " bg-gray-500"
          }`}
          key={i}
          onClick={() => onFloorRequest(i)}
        >
          {i === 0 ? "G" : i}
        </button>
      );
    }
    return arrayOfDailers;
  };

  return (
    <>
      <div className=" flex gap-5 flex-wrap md:w-96 w-fit mt-4">
        {dailerFunction()}
        <button
          className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4
         focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg
          shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleOpenButton}
        >
          open
        </button>
        <button
          className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4
        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg
         shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setIsClosed(true)}
        >
          close
        </button>
      </div>
    </>
  );
};

export default FloorButtons;
