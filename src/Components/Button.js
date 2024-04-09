import React from 'react'

const Button = ({disabled,onClick, content}) => {
  return (
    <div className="text-center">
      <button
        className=" bg-black text-white font-normal py-2 px-8 md:px-12 rounded-md hover:bg-gray-800 transition-colors duration-300 md:text-lg text-sm"
        disabled={disabled}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
}

export default Button
