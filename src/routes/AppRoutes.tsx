import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ServicesPage from "../pages/ServicesPage";
import FormPage from "../pages/FormPage";
import CustomerLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ProcesoPage from "../pages/ProcesoPage";
import SolutionsPage from "../pages/SolutionsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerLayout />} >
        <Route index element={<HomePage />} />
        <Route path="servicios" element={<ServicesPage />} />   
        <Route path="soluciones" element={<SolutionsPage />} />
        <Route path="contacto" element={<FormPage />} />
        <Route path="nosotros" element={<AboutPage />} />  
        <Route path="blog" element={<BlogPage />} />  
        <Route path="proceso" element={<ProcesoPage />} />
      </Route>
    
      {/* Redirección */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
