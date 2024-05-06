import { Routes, Route, Navigate } from "react-router-dom";
import { FormPage } from "../pages";
import { BicyclePage } from "../pages/bicycle-page/BicyclePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/form" element={<FormPage />} />
      <Route path="/" element={<Navigate to="/form" replace />} />
      <Route path="/bicycles" element={<BicyclePage/>} />
    </Routes>
  );
}

export default Router;
