import React from "react";
import { useNavigate } from "react-router-dom"; // If you're using React Router
import { IoIosArrowBack } from "react-icons/io";

const StepNavbar = ({ step, setStep }) => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    setStep((prevStep) => prevStep - 1);
    navigate(-1);
  };
  let fill = () => {
    switch (step) {
      case 0:
        return 0.2;
      case 1:
        return 0.4;
      case 2:
        return 0.6;
      case 3:
        return 0.8;
      case 4:
        return 1;
      default:
        return 0.5;
    }
  };
  return (
    <div className="max-w-screen-xl container mx-auto xl:px-24 xl:mt-16 mt-16 md:px-24 w-full px-4">
      <div className="flex items-center gap-1 mx-auto ">
        {(fill()!==0.2) &&<button
          onClick={goBackHandler}
          className="  hover:bg-gray-300  text-black    "
        >
          <IoIosArrowBack className="text-lg  " />
        </button> }
        
        <div className=" bg-gray-200 w-full h-[5px] rounded-full my-4 transition-all duration-200 ease">
          <div
            className="bg-[#369b81]  h-full rounded-full transition-all duration-200 ease"
            style={{ width: `${fill() * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StepNavbar;
