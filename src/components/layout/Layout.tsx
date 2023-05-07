import { Routes, Route } from "react-router-dom";
import "@/styles/layout.styles.css";
import Actionbar from "./Actionbar";
import Sidebar from "./Sidebar";
import Home from "../../pages/Home";
import Liked from "../../pages/Liked";

export const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">
        <Actionbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </div>
    </div>
  );
};
