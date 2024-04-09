import React from "react";

const OptionCards = ({ title, trails, img, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        border border-gray-200
        min-h-20 rounded-md
        flex items-center justify-start md:gap-6 gap-1
        md:px-8 
        max-w-3xl mx-auto my-2
        transition-all 
        duration-200
        ${isSelected ? "border-orange-400  shadow-md shadow-[rgba(164,164,164,0.21)]" : ""}
      `}
    >
      <img src={img} alt={title} className="md:w-20 w-16 " />
      <div className="flex items-center  md:gap-1 gap-0.5">
        <h1 className="md:text-lg text-[14px]  font-medium ">{title}</h1>
        {trails && (
          <p className="text-gray-400  md:text-lg text-[14px] ">{trails}</p>
        )}
      </div>
    </div>
  );
};

export default OptionCards;
