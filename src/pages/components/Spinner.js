import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center my-64 text-center">
      <div className="flex flex-col items-center gap-8">
        {/* spinner */}
        <div className="w-20 h-20 border-[12px] border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
        <h1 className="md:text-2xl md:font-bold md:max-w-2xl ">
          Finding learning path recommendations for you based on your responses
        </h1>
      </div>
    </div>
  );
};

export default Spinner;
