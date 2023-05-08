import { Routes, Route } from "react-router-dom";
import "@/styles/layout.styles.css";
import Actionbar from "./Actionbar";
import Sidebar from "./Sidebar";
import Home from "../../pages/Home";
import Liked from "../../pages/Liked";
import Categories from "./Categories";

export const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Actionbar />
      <Categories />
      <div className="layout__content">
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
        </Routes> */}
      </div>
    </div>
  );
};
