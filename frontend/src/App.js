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
import GutterInstallationPage from "@/pages/GutterInstallationPage";
import GutterRepairPage from "@/pages/GutterRepairPage";
import GutterReplacementPage from "@/pages/GutterReplacementPage";
import GutterGuardsPage from "@/pages/GutterGuardsPage";
import DownspoutServicesPage from "@/pages/DownspoutServicesPage";
import BlogListPage from "@/pages/BlogListPage";
import BlogPostCleaningTime from "@/pages/BlogPostCleaningTime";
import ServiceAreaDetailPage from "@/pages/ServiceAreaDetailPage";
import GalleryPage from "@/pages/GalleryPage";

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
          <Route path="/services/gutter-installation" element={<GutterInstallationPage />} />
          <Route path="/services/gutter-repair" element={<GutterRepairPage />} />
          <Route path="/services/gutter-replacement" element={<GutterReplacementPage />} />
          <Route path="/services/gutter-guards" element={<GutterGuardsPage />} />
          <Route path="/services/downspout-services" element={<DownspoutServicesPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/how-long-does-it-take-to-clean-gutters" element={<BlogPostCleaningTime />} />
          <Route path="/service-areas/:slug" element={<ServiceAreaDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
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
