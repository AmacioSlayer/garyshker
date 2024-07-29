import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "reportWebVitals";
import "index.css";
import MainPage from "components/main-page";
import Charity from "components/charity";
import Volunteering from "components/volunteering";
import Partnership from "components/partnership";
import FormSuccess from "components/common/form-success";
import ProjectPage from "components/projects/project-page";
import DonateModal from "components/modals/donate-modal";
import ApplyForBackpack from "components/modals/apply-for-backpack";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/form-success" element={<FormSuccess />} />
        <Route path="/projects/:name" element={<ProjectPage />} />
        <Route path="/projects/:name/donate" element={<DonateModal />} />
        <Route
          path="/projects/cosmosomke/apply-for-backpack"
          element={<ApplyForBackpack />}
        />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();