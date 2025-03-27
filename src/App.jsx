import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Homepage from "./component/Homepage";
import PortfolioPage from "./component/PortfolioPage/index";
import ContactUs from "./component/ContactUs/index";
import AboutUs from "./component/AboutUs/index";
import Servicewedo from "./component/servicewedo/index";
import MobileUI from "./component/serviceoffered/MobileUI/index";
import HybridAppDevelopment from "./component/serviceoffered/HybridAppDevelopment/index";
import LogoDesign from "./component/serviceoffered/LogoDesign/index";
import MobileAppSupport from "./component/serviceoffered/MobileAppSupport/index";
import "./index.css"
import PackageMain from "./packagesMain";
import GraphicDesign from "./component/serviceoffered/GraphicDesigning/index";
import IosAppDevelopment from "./component/serviceoffered/IosAppDevelopment/index";
import AndroidAppDevelopment from "./component/serviceoffered/AndroidAppDevelopment/index";
import WebDesign from "./component/serviceoffered/WebDesign/index";
import ReactNativeDevelopment from "./component/serviceoffered/ReactNativeDevelopment/index";
import ResponsiveDesign from "./component/serviceoffered/ResponsiveDesign/index";
import DrupalWebDevelopment from "./component/serviceoffered/DrupalWebDevelopment/index";
import PHPDevelopment from "./component/serviceoffered/PHPDevelopment/index";
import WordPressDevelopment from "./component/serviceoffered/WordPressDevelopment/index";
import InterspireDevelopment from "./component/serviceoffered/InterspireDevelopment/index";
import EcommerceDevelopment from "./component/serviceoffered/eCommerceDevelopment/index";
import SEODevelopment from "./component/serviceoffered/SEODevelopment/index";
import PPCDevelopment from "./component/serviceoffered/PPCDevelopment/index";
import ContentWriting from "./component/serviceoffered/ContentWriting/index";
import SocialMediaDevelopment from "./component/serviceoffered/SocialMediaDevelopment/index";
import ORMDevelopment from "./component/serviceoffered/ORMDevelopment/index";
import CloudAutomationServices from "./component/serviceoffered/CloudAutomationServices/index";
import AzureDevelopment from "./component/serviceoffered/AzureDevelopment/index";
import AWSDevelopment from "./component/serviceoffered/AWSDevelopment/index";
import CloudMigrationServices from "./component/serviceoffered/CloudMigrationServices/index";
import PaymentDevelopment from "./component/serviceoffered/PaymentDevelopment/index";
import EcommerceMaintenanceDevelopment from "./component/serviceoffered/EcommerceMaintenanceDevelopment/index";
import SeoDigitalDevelopment from "./component/serviceoffered/SeoDigitalDevelopment/index";
import DevOpsDevelopment from "./component/serviceoffered/DevOpsDevelopment/index";
import SubscriptionBasedECommerce from "./component/serviceoffered/SubscriptionBasedECommerce/index";
import CustomECommerceWebsite from "./component/serviceoffered/CustomECommerceWebsite/index";



import SeoPackage from "./component/Packages/SeoPackages/index";
import SmoPackage from "./component/Packages/SmoPackages/index";
import PPCPackage from "./component/Packages/PPCPackages/index";
import ORMPackage from "./component/Packages/ORMPackages/index";
import StaticPackage from "./component/Packages/StaticPackages/index";
import WordpressPackage from "./component/Packages/WordpressPackages/index";
import ContentWritingPackage from "./component/Packages/ContentWritingPackages/index";
import EcommercePackage from "./component/Packages/EcommercePackages/index";


import WhatsappButton from "./component/WhatsappButton/WhatsappButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar1 ">
       <ScrollToTop />
         
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        {/* service section start */}
        <Route path="/Servicewedo" element={<Servicewedo />} />
        <Route path="/Servicewedo/MobileUI" element={<MobileUI />} />
        <Route path="/Servicewedo/MobileAppSupport" element={<MobileAppSupport />} />
        <Route path="/Servicewedo/HybridAppDevelopment" element={<HybridAppDevelopment />} />
        <Route path="/Servicewedo/LogoDesign" element={<LogoDesign />} />
        <Route path="/PackageMain" element={<PackageMain/>} />
        <Route path="/Servicewedo/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/Servicewedo/IosAppDevelopment" element={<IosAppDevelopment />} />
        <Route path="/Servicewedo/AndroidAppDevelopment" element={<AndroidAppDevelopment />} />
        <Route path="/Servicewedo/ReactNativeDevelopment" element={<ReactNativeDevelopment />} />
        <Route path="/Servicewedo/ResponsiveDesign" element={<ResponsiveDesign />} />
        <Route path="/Servicewedo/WebDesign" element={<WebDesign />} />
        <Route path="/Servicewedo/DrupalWebDevelopment" element={<DrupalWebDevelopment />} />
        <Route path="/Servicewedo/PHPDevelopment" element={<PHPDevelopment />} />
        <Route path="/Servicewedo/WordPressDevelopment" element={<WordPressDevelopment />} />
        <Route path="/Servicewedo/InterspireDevelopment" element={<InterspireDevelopment />} />
        <Route path="/Servicewedo/eCommerceDevelopment" element={<EcommerceDevelopment />} />
        <Route path="/Servicewedo/SEODevelopment" element={<SEODevelopment />} />
        <Route path="/Servicewedo/PPCDevelopment" element={<PPCDevelopment />} />
        <Route path="/Servicewedo/ContentWriting" element={<ContentWriting />} />
        <Route path="/Servicewedo/SocialMediaMarketing" element={<SocialMediaDevelopment />} />
        <Route path="/Servicewedo/ORMDevelopment" element={<ORMDevelopment />} />
        <Route path="/Servicewedo/CloudAutomationServices" element={<CloudAutomationServices />} />
        <Route path="/Servicewedo/AzureDevelopment" element={<AzureDevelopment />} />
        <Route path="/Servicewedo/AWSDevelopment" element={<AWSDevelopment />} />
        <Route path="/Servicewedo/CloudMigrationServices" element={<CloudMigrationServices />} />
        <Route path="/Servicewedo/PaymentGateway" element={<PaymentDevelopment />} />
        <Route path="/Servicewedo/EcommerceMaintenance" element={<EcommerceMaintenanceDevelopment />} />
        <Route path="/Servicewedo/Seo&DigitalMarketing" element={<SeoDigitalDevelopment />} />
        <Route path="/Servicewedo/DevOpsDevelopment" element={<DevOpsDevelopment />} />
        <Route path="/Servicewedo/SubscriptionBasedECommerce" element={<SubscriptionBasedECommerce />} />
        <Route path="/Servicewedo/CustomECommerceWebsite" element={<CustomECommerceWebsite />} />

        {/* service section end */}

        {/* Packages section start */}
        <Route path="/PackageMain/SeoPackages" element={<SeoPackage />} />
        <Route path="/PackageMain/SmoPackages" element={<SmoPackage />} />
        <Route path="/PackageMain/PPCPackages" element={<PPCPackage />} />
        <Route path="/PackageMain/ORMPackages" element={<ORMPackage />} />
        <Route path="/PackageMain/StaticPackages" element={<StaticPackage />} />
        <Route path="/PackageMain/WordpressPackages" element={<WordpressPackage />} />
        <Route path="/PackageMain/ContentWriting" element={<ContentWritingPackage />} />
        <Route path="/PackageMain/Ecommerce" element={<EcommercePackage />} />
        {/* Packages section end */}

        
      </Routes>
      <WhatsappButton />
    </div>
  );
}

export default App;