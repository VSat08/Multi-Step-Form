import React from "react";

const EquationCard = ({ level, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` space-y-2 md:p-4 p-2 rounded-md cursor-pointer flex flex-col items-center justify-around
            border border-gray-300
            px-2}
          ${
            isSelected
              ? "border-orange-400  shadow-md shadow-[rgba(164,164,164,0.21)]"
              : ""
          }
            `}
    >
      <img
        src={level.equation}
        alt={level.equation}
        className="md:w-full md:max-w-28 w-20"
      />
      <div className="text-center">
        <p className="text-md font-normal">{level.label}</p>
        <p className="text-sm text-gray-500">{level.subLabel}</p>
      </div>
    </div>
  );
};

export default EquationCard;
