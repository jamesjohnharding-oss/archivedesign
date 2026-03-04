import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ForArchitects from "./pages/ForArchitects";

const RedirectToHomeowner = () => {
  useEffect(() => {
    window.location.replace("/homeowner.html");
  }, []);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/for-architects" element={<ForArchitects />} />
          <Route path="/for-homeowners" element={<RedirectToHomeowner />} />
          <Route path="/about" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
