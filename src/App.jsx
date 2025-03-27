import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import WhatsappButton from "./component/WhatsappButton/WhatsappButton";
import "./App.css";
import "./index.css";

// Lazy-loaded components
const Homepage = lazy(() => import("./component/Homepage"));
const PortfolioPage = lazy(() => import("./component/PortfolioPage"));
const ContactUs = lazy(() => import("./component/ContactUs"));
const AboutUs = lazy(() => import("./component/AboutUs"));
const Servicewedo = lazy(() => import("./component/servicewedo"));
const PackageMain = lazy(() => import("./packagesMain"));

// Services
const services = {
  MobileUI: lazy(() => import("./component/serviceoffered/MobileUI")),
  HybridAppDevelopment: lazy(() => import("./component/serviceoffered/HybridAppDevelopment")),
  LogoDesign: lazy(() => import("./component/serviceoffered/LogoDesign")),
  MobileAppSupport: lazy(() => import("./component/serviceoffered/MobileAppSupport")),
  GraphicDesign: lazy(() => import("./component/serviceoffered/GraphicDesigning")),
  IosAppDevelopment: lazy(() => import("./component/serviceoffered/IosAppDevelopment")),
  AndroidAppDevelopment: lazy(() => import("./component/serviceoffered/AndroidAppDevelopment")),
  WebDesign: lazy(() => import("./component/serviceoffered/WebDesign")),
  ReactNativeDevelopment: lazy(() => import("./component/serviceoffered/ReactNativeDevelopment")),
  ResponsiveDesign: lazy(() => import("./component/serviceoffered/ResponsiveDesign")),
  DrupalWebDevelopment: lazy(() => import("./component/serviceoffered/DrupalWebDevelopment")),
  PHPDevelopment: lazy(() => import("./component/serviceoffered/PHPDevelopment")),
  WordPressDevelopment: lazy(() => import("./component/serviceoffered/WordPressDevelopment")),
  InterspireDevelopment: lazy(() => import("./component/serviceoffered/InterspireDevelopment")),
  EcommerceDevelopment: lazy(() => import("./component/serviceoffered/eCommerceDevelopment")),
  SEODevelopment: lazy(() => import("./component/serviceoffered/SEODevelopment")),
  PPCDevelopment: lazy(() => import("./component/serviceoffered/PPCDevelopment")),
  ContentWriting: lazy(() => import("./component/serviceoffered/ContentWriting")),
  SocialMediaDevelopment: lazy(() => import("./component/serviceoffered/SocialMediaDevelopment")),
  ORMDevelopment: lazy(() => import("./component/serviceoffered/ORMDevelopment")),
  CloudAutomationServices: lazy(() => import("./component/serviceoffered/CloudAutomationServices")),
  AzureDevelopment: lazy(() => import("./component/serviceoffered/AzureDevelopment")),
  AWSDevelopment: lazy(() => import("./component/serviceoffered/AWSDevelopment")),
  CloudMigrationServices: lazy(() => import("./component/serviceoffered/CloudMigrationServices")),
  PaymentDevelopment: lazy(() => import("./component/serviceoffered/PaymentDevelopment")),
  EcommerceMaintenanceDevelopment: lazy(() => import("./component/serviceoffered/EcommerceMaintenanceDevelopment")),
  SeoDigitalDevelopment: lazy(() => import("./component/serviceoffered/SeoDigitalDevelopment")),
  DevOpsDevelopment: lazy(() => import("./component/serviceoffered/DevOpsDevelopment")),
  SubscriptionBasedECommerce: lazy(() => import("./component/serviceoffered/SubscriptionBasedECommerce")),
  CustomECommerceWebsite: lazy(() => import("./component/serviceoffered/CustomECommerceWebsite")),
};

// Packages
const packages = {
  SeoPackage: lazy(() => import("./component/Packages/SeoPackages")),
  SmoPackage: lazy(() => import("./component/Packages/SmoPackages")),
  PPCPackage: lazy(() => import("./component/Packages/PPCPackages")),
  ORMPackage: lazy(() => import("./component/Packages/ORMPackages")),
  StaticPackage: lazy(() => import("./component/Packages/StaticPackages")),
  WordpressPackage: lazy(() => import("./component/Packages/WordpressPackages")),
  ContentWritingPackage: lazy(() => import("./component/Packages/ContentWritingPackages")),
  EcommercePackage: lazy(() => import("./component/Packages/EcommercePackages")),
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar1">
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Servicewedo" element={<Servicewedo />} />
          <Route path="/PackageMain" element={<PackageMain />} />

          {/* Services Routes */}
          {Object.entries(services).map(([key, Component]) => (
            <Route key={key} path={`/Servicewedo/${key}`} element={<Component />} />
          ))}

          {/* Packages Routes */}
          {Object.entries(packages).map(([key, Component]) => (
            <Route key={key} path={`/PackageMain/${key}`} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <WhatsappButton />
    </div>
  );
}

export default App;