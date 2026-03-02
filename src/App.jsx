import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ForArchitects from "./pages/ForArchitects";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/for-architects" element={<ForArchitects />} />
          {/* Placeholder routes for future pages */}
          <Route path="/for-homeowners" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
