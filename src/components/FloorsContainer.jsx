import React from "react";
import Elevator from "./Elevator";
import dropDown from "../assets/dropDown.png";
import dropUp from "../assets/dropUp.png";
import { useStateContext } from "../utils/StateContex";

const FloorsContainer = ({ numberOfFloors }) => {
  const { onFloorRequest } = useStateContext();

  const arrayToDisplay = () => {
    const arrayOfFloors = [];
    for (let i = numberOfFloors; i >= 0; i--) {
      arrayOfFloors.push(
        <div className="mt-2 h-36" >
          <div className=" flex h-5 ">
            <button
              onClick={() => {
                onFloorRequest(i);
              }}
            >
              <img
                src={dropDown}
                className="bg-transparent h-full rounded-full mr-2 border-[1px] border-black"
              />
            </button>
            <button
              onClick={() => {
                onFloorRequest(i);
              }}
            >
              <img
                src={dropUp}
                className="bg-transparent h-full rounded-full border-[1px] border-black "
              />
            </button>
          </div>
          <div className=" w-32 h-32 border-black border-8  " key={i}>
            <div className="flex  justify-evenly mt-3">
              <div className="w-2 h-10 bg-slate-400"></div>
              <div className="w-2 h-10 bg-slate-400"></div>
              <div className="w-2 h-10 bg-slate-400"></div>
            </div>
            <div className="flex  justify-evenly mt-3">
              <div className="w-2 h-10 bg-slate-400"></div>
              <div className="w-2 h-10 bg-slate-400"></div>
              <div className="w-2 h-10 bg-slate-400"></div>
            </div>
          </div>
        </div>
      );
    }
    return arrayOfFloors;
  };
  return (
    <div className="bg-gray-500 flex flex-col items-center w-[300px] relative p-[10px]">
      {arrayToDisplay()}
      <Elevator />
    </div>
  );
};

export default FloorsContainer;
