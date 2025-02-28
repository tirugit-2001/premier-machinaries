import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Parent = () => {
  return (
    <div className="flex  mx-auto min-h-[100vh] flex-col justify-between">
      <Navbar />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Parent;
