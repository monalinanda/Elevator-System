import { useState } from "react";
import ElevatorContainer from "./components/ElevatorContainer";
import { StateContext } from "./utils/StateContex";
function App() {
  return (
    <StateContext>
      <div className=" w-screen h-screen">
        <div className="w-full h-20 flex bg-black text-w text-red-50 font-bold text-3xl items-center justify-center">
          <h1>Elevator System</h1>
        </div>
        <ElevatorContainer />
      </div>
    </StateContext>
  );
}

export default App;
