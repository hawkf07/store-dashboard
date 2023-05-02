import { FaMoneyBillWave } from "react-icons/fa";

export const Card = () => {
  return (
    <div className="flex w-full items-center  justify-evenly rounded-md bg-gray-50 p-3 shadow md:p-5">
      <div className="flex flex-col gap-1  md:m-auto">
        <h1>1,250</h1>
        <h3>total product sold</h3>
      </div>
      <div className=" flex items-center   rounded-full  bg-green-400 p-3 text-2xl text-white">
        <FaMoneyBillWave />
      </div>
    </div>
  );
};
