import { useContext, createContext, useState, useEffect } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [numberOfFloors, setNumberOfFloors] = useState(4);
  const [numbersOfDailers, setNumberOfDailers] = useState(numberOfFloors);
  const [selectedFloors, setSelectedFloors] = useState(0);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [elevatorRequests, setElevatorRequests] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [elevatorPosition, setElevatorPosition] = useState();
  const [prevPosition, setPrevPosition] = useState(0);
  const [slectedButtons, setSelectedButtons] = useState(0);
  const [passengerWeight, setPassengerWeight] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const totalWeight = passengerWeight.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  const arrayOfFloors = [];

  const handleFloorsNumber = (value) => {
    setNumberOfFloors(value);
    setNumberOfDailers(value);
  };
  const onFloorRequest = (floor) => {
    setSelectedFloors(floor);
    if (!elevatorRequests[floor] && floor !== currentFloor) {
      const newRequests = [...elevatorRequests];
      newRequests[floor] = true;
      setElevatorRequests(newRequests);
    }
  };

  const moveToFloor = (floor) => {
    setCurrentFloor(floor);
    const newRequests = [...elevatorRequests];
    setIsMoving(true);
    newRequests[floor] = true;
    if (newRequests[floor] === true) {
      if (isMoving === true) {
        setIsMoving(true);
        setIsClosed(false);
        setTimeout(() => {
          setIsClosed(true);
          setIsMoving(false);
          newRequests[floor] = false;
        }, 2000);
      }
    }
    setElevatorRequests(newRequests);
    setElevatorPosition(floor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = currentFloor; i <= numberOfFloors; i += 1) {
        if (elevatorRequests[i] && totalWeight <= 100) {
          moveToFloor(i);
          return;
        }
      }
      for (let i = currentFloor; i >= 0; i -= 1) {
        if (elevatorRequests[i] && totalWeight <= 100) {
          moveToFloor(i);
          return;
        }
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [moveToFloor]);

  return (
    <Context.Provider
      value={{
        numberOfFloors,
        arrayOfFloors,
        currentFloor,
        numbersOfDailers,
        isSelected,
        isClosed,
        elevatorPosition,
        elevatorRequests,
        selectedFloors,
        prevPosition,
        slectedButtons,
        passengerWeight,
        totalWeight,
        setIsClosed,
        setCurrentFloor,
        setElevatorRequests,
        handleFloorsNumber,
        setNumberOfFloors,
        setNumberOfDailers,
        setElevatorPosition,
        setSelectedFloors,
        setPrevPosition,
        onFloorRequest,
        setSelectedButtons,
        setPassengerWeight,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
