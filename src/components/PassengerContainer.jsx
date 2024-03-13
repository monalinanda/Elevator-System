import React, { useState } from "react";
import PassengersList from "./PassengerList";
import { useStateContext } from "../utils/StateContex";

const PassengerContainer = () => {
  const { setPassengerWeight, totalWeight } = useStateContext();
  const [numberOfPassengers, setNumberOfPassengers] = useState(0);

  const handleChange = (e) => {
    const re = /^[0-5\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setNumberOfPassengers(e.target.value);
    }
    if (e.target.value == 0) {
      setPassengerWeight([]);
    }
  };
  return (
    <div className="  h-auto mt-10 p-5">
      <label className=" font-bold">Select Number of Passengers : </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="number"
        value={numberOfPassengers}
        pattern="[0-5]"
        onChange={handleChange}
      />
      {numberOfPassengers > 0 ? (
        <div className=" mt-5">
          <h3>Add Passengers Weight</h3>
          <PassengersList numberOfPassengers={numberOfPassengers} />
          {totalWeight > 100 && (
            <div className=" w-fit  h-10 text-red-600 font-bold  text-lg mx-auto md:mt-12 ">
              "Total passenger weight should not exceed 100kg."
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PassengerContainer;
