import { useStateContext } from "../utils/StateContex";
import lift from "../assets/lift.png";
import openLift from "../assets/openLift.png";

const Elevator = () => {
  const { isClosed, currentFloor } = useStateContext();

  const FLOOR_HEIGHT = 155;

  return (
    <div
      className={`flex  w-28 h-[120px] absolute   bottom-0 ${
        isClosed ? "" : "justify-between bg-yellow-200"
      }`}
      style={{
        transform: `translateY(-${currentFloor * FLOOR_HEIGHT}px)`,
        transition: "3s ease-in-out transform",
      }}
      id={currentFloor}
    >
      {isClosed ? <img src={lift} /> : <img src={openLift} />}
    </div>
  );
};

export default Elevator;
