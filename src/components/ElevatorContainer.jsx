import FloorsContainer from "./FloorsContainer";
import FloorButtons from "./FloorButtons";
import { useStateContext } from "../utils/StateContex";
import PassengerContainer from "./PassengerContainer";

const ElevatorContainer = () => {
  const { numberOfFloors , handleFloorsNumber} = useStateContext();
  
  return (
    <div className=" w-[90%] h-[90%] m-auto ">
      <div className=" h-auto m-auto mt-8 p-5">
        <div className=" justify-evenly md:flex">
          <FloorsContainer numberOfFloors={numberOfFloors} />
          <div>
            <FloorButtons />
            <div className="flex flex-col  md:flex-row items-baseline">
              <div>
                <label className=" font-bold"> Number of Floors : </label>
                <input
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={numberOfFloors}
                  onChange={(e)=>handleFloorsNumber(e.target.value)}
                />
              </div>
              <PassengerContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorContainer;
