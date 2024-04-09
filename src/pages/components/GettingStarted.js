import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OptionCards from "../../Components/OptionCards";

import student from "../../utils/profiles/student.png";
import professional from "../../utils/profiles/professional.png";
import parent from "../../utils/profiles/parent.png";
import learner from "../../utils/profiles/learner.png";
import teacher from "../../utils/profiles/teacher.png";
import other from "../../utils/profiles/others.png";
import Button from "../../Components/Button";

const GettingStarted = ({ setStep, step }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    setSelectedCard((prevSelected) =>
      prevSelected === cardId ? null : cardId
    );
  };

  const resetSelection = () => {
    setSelectedCard(null); 
  };

  const isButtonDisabled = selectedCard === null;

  const profiles = [
    {
      id: 1,
      title: "Student",
      trailings: "or soon to be enrolled",
      img: student,
    },
    {
      id: 2,
      title: "Professional",
      trailings: "pursuing a career",
      img: professional,
    },
    {
      id: 3,
      title: "Parent",
      trailings: "of a school-age child",
      img: parent,
    },
    {
      id: 4,
      title: "Lifelong learner",
      trailings: "",
      img: learner,
    },
    {
      id: 5,
      title: "Teacher",
      trailings: "",
      img: teacher,
    },
    {
      id: 6,
      title: "Other",
      trailings: "",
      img: other,
    },
  ];

  const handleContinue = () => {
    resetSelection(); 
    setStep(step + 1);
    navigate("/interest"); 
  };

  return (
    <div className="space-y-6 my-4">
      {/* heading */}
      <div className="text-center header">
        <h1 className="text-gray-950 md:text-3xl text-2xl font-bold md:leading-loose leading-snug">
          Which Describes you best?
        </h1>
        <p className="text-gray-400">
          This will help us personalize your experience.
        </p>
      </div>

      {/* form  */}
      <div>
        {profiles.map((profile) => (
          <OptionCards
            key={profile.id}
            title={profile.title}
            trails={profile.trailings}
            img={profile.img}
            isSelected={selectedCard === profile.id}
            onClick={() => handleCardClick(profile.id)}
          />
        ))}
      </div>

      {/* button */}
      <Button content="Continue" disabled={isButtonDisabled} onClick={handleContinue}/>
    </div>
  );
};

export default GettingStarted;
