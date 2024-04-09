import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import eq1 from "../../utils/equations/eq1.png";
import eq2 from "../../utils/equations/eq2.png";
import eq3 from "../../utils/equations/eq3.png";
import eq4 from "../../utils/equations/eq4.png";
import EquationCard from "../../Components/EquationCard";
import Button from "../../Components/Button";

const MathLevel = ({ setStep, step }) => {
  const [equationCard, setEquationCard] = useState(null);
  const navigate = useNavigate();

  const levels = [
    {
      id: 1,
      label: "Arithmetic",
      subLabel: "Introductory",
      equation: eq1,
    },
    {
      id: 2,
      label: "Basic Algebra",
      subLabel: "Foundational",
      equation: eq2,
    },
    {
      id: 3,
      label: "Intermediate Algebra",
      subLabel: "Intermediate",
      equation: eq3,
    },
    {
      id: 4,
      label: "Calculus",
      subLabel: "Advanced",
      equation: eq4,
    },
  ];

  // here

  const handleCardClick = (cardId) => {
    setEquationCard((prevSelected) =>
      prevSelected === cardId ? null : cardId
    );
  };

  const resetSelection = () => {
    setEquationCard(null); // Reset selection
  };

  const isButtonDisabled = equationCard === null;

  const handleContinue = () => {
    resetSelection(); // Reset the state
    setStep(step + 1);
    navigate("/testimonials"); // Navigate to the new route
  };
  // hehe

  return (
    <div className=" space-y-6 my-4">
      <h2 className="text-gray-950 md:text-3xl text-2xl font-bold md:leading-loose leading-snug text-center">
        What is your math comfort level?
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Choose the highest level you feel confident in - you can always adjust
        later.
      </p>
      {/* box container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-2">
        {levels.map((level) => (
          // boxes
          <EquationCard
            key={level.id}
            level={level}
            isSelected={equationCard === level.id}
            onClick={() => handleCardClick(level.id)}
          />
        ))}
      </div>

      <Button
        content="Continue"
        disabled={isButtonDisabled}
        onClick={handleContinue}
      />
    </div>
  );
};

export default MathLevel;
