// routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import AboutPage from "@/pages/about";
import ProjectPage from "@/pages/project";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />

      <Route path="/projects" element={<ProjectPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
