import passenger from "../assets/passenger.png";
import { useStateContext } from "../utils/StateContex";

const PassengersList = ({ numberOfPassengers }) => {
  const { setPassengerWeight, passengerWeight } = useStateContext();

  const handleInputChange = (index, value) => {
    setPassengerWeight((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = parseInt(value);
      return newValues;
    });
  };

  const displayPassengerList = () => {
    const arrayOfPassenger = [];
    for (let i = 1; i <= numberOfPassengers; i++) {
      arrayOfPassenger.push(
        <div className="flex flex-col items-center m-4 " key={i - 1}>
          <img src={passenger} key={i - 1} className=" w-10 h-10" />
          <input
            type="number"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-20  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={passengerWeight[i - 1]}
            onChange={(e) => handleInputChange(i - 1, e.target.value)}
          />
        </div>
      );
    }
    return arrayOfPassenger;
  };
  return <div className="flex flex-wrap">{displayPassengerList()}</div>;
};

export default PassengersList;
