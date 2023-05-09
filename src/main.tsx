import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { VideoContextProvider } from "./context/VideoContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <VideoContextProvider>
      <Router>
        <App />
      </Router>
    </VideoContextProvider>
  </React.StrictMode>
);
