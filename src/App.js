import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StepForm from "./pages/StepForm";
import LearningPath from "./pages/LearningPath";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<StepForm />}
          />
          <Route path="/learningpath" element={<LearningPath />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
