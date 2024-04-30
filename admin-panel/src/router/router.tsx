import { Routes, Route, Navigate } from "react-router-dom";
import { FormPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/form" element={<FormPage />} />
      <Route path="/" element={<Navigate to="/form" replace />} />
    </Routes>
  );
}

export default Router;
