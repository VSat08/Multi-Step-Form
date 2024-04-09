import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import GettingStarted from "./components/GettingStarted";
import Interests from "./components/Interests";
import StepNavbar from "../Components/StepNavbar";
import SelectionConfirm from "./components/SelectionConfirm";
import MathLevel from "./components/MathLevel";
import Testimonials from "./components/Testimonials";

const StepForm = () => {
  const [step, setStep] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const updateStep = () => {
      switch (location.pathname) {
        case "/":
          setStep(0);
          break;
        case "/interest":
          setStep(1);
          break;
        case "/selectionconfirm":
          setStep(2);
          break;
        case "/mathlevel":
          setStep(3);
          break;
        case "/testimonials":
          setStep(4);
          break;
        default:
          setStep(0);
          break;
      }
    };

    updateStep();
  }, [location.pathname]);

  return (
    <>
      {/* Nafigation for step update */}
      <StepNavbar step={step} setStep={setStep} />
      <div className="section-container">
        <Routes>
          <Route path="/" element={<GettingStarted setStep={setStep} />} />
          <Route path="/interest" element={<Interests setStep={setStep} />} />
          <Route
            path="/selectionconfirm"
            element={<SelectionConfirm setStep={setStep} />}
          />
          <Route path="/mathlevel" element={<MathLevel setStep={setStep} />} />
          <Route
            path="/testimonials"
            element={<Testimonials setStep={setStep} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default StepForm;
