import React from "react";
import Cheers from "../../utils/cheers.jpg";
// import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

const Testimonials = ({ setStep, step }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    setStep(step + 1);
    navigate("/learningpath"); // Navigate to the new route
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:py-24 ">
        {/* left container */}
        <div className="w-1/2">
          <img src={Cheers} className=" mx-auto" alt="Cheers" />
        </div>

        {/* right container */}
        <div className="w-full md:w-1/2 ">
          <h2 className="text-2xl font-bold mb-6 md:text-start text-center ">
            You're on your way!
          </h2>
          <div className="flex flex-row gap-1 my-2">
            <FaStar className="text-xl text-yellow-400" />
            <FaStar className="text-xl text-yellow-400" />
            <FaStar className="text-xl text-yellow-400" />
            <FaStar className="text-xl text-yellow-400" />
            <FaStar className="text-xl text-yellow-400" />
          </div>

          <div className="">
            <blockquote>
              <p className="text-black  italic mb-4 ">
                "Through its engaging and 'well-structured courses. Brilliant
                has taught me mathematical concepts that I previously struggled
                to understand- I now feel confident approaching both technical
                job interviews and real problem solving situations."
              </p>
              <footer className="italic">- Sam</footer>
            </blockquote>
          </div>
        </div>
      </div>

      <Button content="Continue" onClick={handleContinue} />
    </div>
  );
};

export default Testimonials;
