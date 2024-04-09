import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import LearningCourses from "./components/LearningCourses";

const LearningPath = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Run only once when component mounts

  return (
    <div className="section-container">
      {showSpinner ? <Spinner /> : <LearningCourses />}
    </div>
  );
};

export default LearningPath;
