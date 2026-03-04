import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ForArchitects from "./pages/ForArchitects";
import NotFoundPage from "./pages/NotFoundPage";
import AccessRestrictedPage from "./pages/AccessRestrictedPage";
import ServerErrorPage from "./pages/ServerErrorPage";
import InvalidRequestPage from "./pages/InvalidRequestPage";
import SearchEmptyPage from "./pages/SearchEmptyPage";
import ShortlistEmptyPage from "./pages/ShortlistEmptyPage";
import MaintenancePage from "./pages/MaintenancePage";
import DashboardEnquiriesPage from "./pages/DashboardEnquiriesPage";

const RedirectToHomeowner = () => {
  useEffect(() => {
    window.location.replace("/homeowner.html");
  }, []);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/for-architects" element={<ForArchitects />} />
                <Route path="/for-homeowners" element={<RedirectToHomeowner />} />
                <Route path="/about" element={<HomePage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="/403" element={<AccessRestrictedPage />} />
                <Route path="/500" element={<ServerErrorPage />} />
                <Route path="/400" element={<InvalidRequestPage />} />
                <Route path="/search" element={<SearchEmptyPage />} />
                <Route path="/shortlist" element={<ShortlistEmptyPage />} />
                <Route path="/dashboard/enquiries" element={<DashboardEnquiriesPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
