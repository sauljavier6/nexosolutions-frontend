import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const CustomerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <TopNavbar />

      {/* Contenido */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default CustomerLayout;
