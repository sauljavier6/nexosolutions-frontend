import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
        
      <Route path="/" > { /*element={<AuthLayout />} */}
        <Route index element={<HomePage />} />
      </Route>
    
      {/* Redirección */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
