import React from "react";
import MatchMachine from "../../utils/mathmachine.png";

const LearningCourses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-48">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
        Learning paths based on your answers
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Choose one to get Started. You can switch anytime
      </p>
      {/* <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3 my-12 ">
        {/* box-1 */}
        <div className="border border-gray-200 shadow-md p-4 rounded-lg flex flex-col-reverse md:flex-row items-center justify-between relative gap-x-3">
          {/* span */}
          <span className="absolute -top-4 md:left-32   bg-yellow-500 text-black font-semibold rounded-full px-4 py-1 text-[.9rem]">
            Most popular
          </span>

          <div className=" mb-4 md:mb-0">
            <h2 className=" text-lg md:text-[1rem] mb-1 font-semibold">
              Foundational Math
            </h2>
            <p className="text-gray-600">
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
          </div>
          <div className=" flex justify-center">
            <img
              src={MatchMachine}
              alt="mathmachine"
              className="md:w-48 w-36"
            />
          </div>
        </div>

        {/* box-2 */}
        <div className="border border-gray-200 shadow-md p-4 rounded-lg flex flex-col-reverse md:flex-row items-center justify-between relative gap-x-3">
          <div className=" mb-4 md:mb-0">
            <h2 className="ftext-lg md:text-[1rem] mb-1 font-semibold">
              Mathematical Thinking
            </h2>
            <p className="text-gray-600">
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
          </div>
          <div className=" flex justify-center">
            <img
              src={MatchMachine}
              alt="mathmachine"
              className="md:w-48 w-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCourses;
