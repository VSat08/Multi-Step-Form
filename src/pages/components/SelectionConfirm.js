import React from "react";
import math from "../../utils/doodle-math-formula-with-mathematics-font-notebook_1639-32466.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";


const SelectionConfirm = ({ setStep, step }) => {
    const navigate = useNavigate();


    const handleContinue = () => {
      setStep(step + 1);
      navigate("/mathlevel"); 
    };

  return (
    <div className="space-y-6 my-4  ">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:py-24 ">
        {/* left container */}
        <div className="w-full md:w-1/2">
          <img
            src={math}
            className="md:max-w-sm max-w-64 mx-auto"
            alt="practiseMath"
          />
        </div>
        {/* right container */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 ">
            You're in the right place
          </h2>
          <p className="text-gray-600 mb-6 ">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>

      <Button
        content="Continue"
        onClick={handleContinue}
      />
    </div>
  );
};

export default SelectionConfirm;
