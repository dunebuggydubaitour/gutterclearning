import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ServiceAreaPage from "@/pages/ServiceAreaPage";
import ContactPage from "@/pages/ContactPage";
import CostGuidePage from "@/pages/CostGuidePage";
import AdminPage from "@/pages/AdminPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdmin && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service-areas" element={<ServiceAreaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cost-guide" element={<CostGuidePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
