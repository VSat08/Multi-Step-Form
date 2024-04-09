import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OptionCards from "../../Components/OptionCards";


import interest1 from "../../utils/interestform/interest1.png";
import interest2 from "../../utils/interestform/interest2.png";
import interest3 from "../../utils/interestform/interest3.png";
import interest4 from "../../utils/interestform/interest4.png";
import interest5 from "../../utils/interestform/interest5.png";
import Button from "../../Components/Button";

const Interests = ({ setStep, step }) => {
  const [interestCard, setInterestCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    setInterestCard((prevSelected) =>
      prevSelected === cardId ? null : cardId
    );
  };

  const resetSelection = () => {
    setInterestCard(null); 
  };

  const isButtonDisabled = interestCard === null;

  const interests = [
    {
      id: 1,
      title: "Learning specific skills to advance my career",
      img: interest1,
    },
    {
      id: 2,
      title: "Exploring new topics I'm interested in",
      img: interest2,
    },
    {
      id: 3,
      title: "Refreshing my math foundations",
      img: interest3,
    },
    {
      id: 4,
      title: "Exercising my brain to stay sharp",
      img: interest4,
    },
    {
      id: 5,
      title: "Something else",
      img: interest5,
    },
  ];

  const handleContinue = () => {
    resetSelection(); 
        setStep(step + 1);
    navigate("/selectionconfirm"); 
  };

  return (
    <div className="space-y-6 my-4">
      {/* heading */}
      <div className="text-center header">
        <h1 className="text-gray-950 md:text-3xl text-2xl font-bold md:leading-loose leading-snug">
          Which you are most interested in?
        </h1>
        <p className="text-gray-400">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
      </div>

      {/* form  */}
      <div>
        {interests.map((interest) => (
          <OptionCards
            key={interest.id}
            title={interest.title}
            img={interest.img}
            isSelected={interestCard === interest.id}
            onClick={() => handleCardClick(interest.id)}
          />
        ))}
      </div>

      {/* button */}
      <Button
        content="Continue"
        disabled={isButtonDisabled}
        onClick={handleContinue}
      />
    </div>
  );
};

export default Interests;
