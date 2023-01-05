import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "./config";

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId={config.google.GoogleClientId}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
