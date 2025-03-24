// Topmenu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Homepage/header.css'
import "./Topmenu.css"
import "./Topmenu.css"
import logo1 from '../images/logo1.png';
import menu from '../images/menu.svg';

const Topmenu = () => {
  const [visible, setVisible] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='navbar-box'>
      <div className={sticky ? "navbar sticky scrolled" : "navbar"}>
        <img className='logo1' src={logo1} alt='Xeltratech' />
        <div className='navmenu-latest'>

        <div className='nav Home'><Link to="/">Home</Link></div>
        <div className='nav AboutUs'><Link to="/AboutUs">About Us</Link></div>
        <div className='nav Portfolio'><Link to="/ContactUs">Portfolio</Link></div>

        <div className='nav Services'><Link to="/Servicewedo">Services</Link>
          <div className='services-dropdown'>
            <div className='services-dropdown1-top'>Mobile App Development
              <div className='services-dropdown1-top-submenu1-body'>
                <div className='services-dropdown1-top-submenu1-top'><Link to="/Servicewedo/MobileUI">Mobile App UI/UX Design</Link></div>
                <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/HybridAppDevelopment">Hybrid App Development</Link></div>
                <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/AndroidAppDevelopment">Android App Development</Link></div>
                <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/IosAppDevelopment">IOS Application Development</Link></div>
                <div className='services-dropdown1-top-submenu1-bottom'><Link to="/Servicewedo/MobileAppSupport">App Support And Maintenance</Link></div>
              </div>
            </div>
            <div className='services-dropdown1'>Website & UI/UX Design
              <div className='services-dropdown1-top-submenu2-body'>
                  <div className='services-dropdown1-top-submenu1-top'><Link to="/Servicewedo/LogoDesign">Logo Design</Link></div>
                  <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/ReactNativeDevelopment">React Design</Link></div>
                  <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/GraphicDesign">Graphic Design</Link></div>
                  <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/WebDesign">Custom Web Design</Link></div>
                  <div className='services-dropdown1-top-submenu1-bottom'><Link to="/Servicewedo/ResponsiveDesign">Responsive + Website Design</Link></div>
              </div>
            </div>
            <div className='services-dropdown1'>Website Development
                <div className='services-dropdown1-top-submenu3-body'>
                    <div className='services-dropdown1-top-submenu1-top'><Link to="/Servicewedo/PHPDevelopment">PHP Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/DrupalWebDevelopment">Drupal Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/InterspireDevelopment">Interspire Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/WordPressDevelopment">Wordspress Development</Link></div>
                    <div className='services-dropdown1-top-submenu1-bottom'><Link to="/Servicewedo/eCommerceDevelopment">E-commerce Development</Link></div>
                </div>
            </div>
            <div className='services-dropdown1'>Digital Marketing & Ads
                <div className='services-dropdown1-top-submenu4-body'>
                    <div className='services-dropdown1-top-submenu1-top'><Link to="/Servicewedo/SEODevelopment">Seo Consulting</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/PPCDevelopment">PPC Advertising</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/ContentWriting">Content Writing</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/SocialMediaMarketing">Social Media Marketing</Link></div>
                    <div className='services-dropdown1-top-submenu1-bottom'><Link to="/Servicewedo/ORMDevelopment">Online Reputation Management</Link></div>
                </div>
            </div>
            <div className='services-dropdown1'>Clouds Services
                <div className='services-dropdown1-top-submenu5-body'>
                <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/CloudAutomationServices">Cloud Automation Services</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="//ContactUs">Cloud Migration Services</Link></div>
                    <div className='services-dropdown1-top-submenu1-bottom'><Link to="/ContactUs">DevOps Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/AzureDevelopment">AZURE Development</Link></div>
                    <div className='services-dropdown1-top-submenu1-top'><Link to="/ContactUs">AWS Development</Link></div>
                </div>
            </div>
            <div className='services-dropdown1'>E-commerce
                <div className='services-dropdown1-top-submenu4-body'>
                    <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">Payment Gateway</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="//ContactUs">E-commerce maintenance</Link></div>
                    <div className='services-dropdown1-top-submenu1-bottom'><Link to="/ContactUs">Seo & Digital Marketing</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">Custom E-commerce Website</Link></div>
                    <div className='services-dropdown1-top-submenu1-top'><Link to="/ContactUs">Subscription Based E-commerce</Link></div>
                </div>
            </div>
          </div>
        </div>

        <div className='nav Packages'><Link to="/PackageMain">Packages</Link></div>
        <div className='nav Careers'><Link to="/ContactUs">Careers</Link></div>
        <div className='nav ContactUs'><Link to="/ContactUs">Contact Us</Link></div>

        </div>
        <div className='navmenu'>
          <div className='navmenu-btn'>
            <CButton color="primary" onClick={() => setVisible(true)}>
              <img src={menu} alt="Menu" />
            </CButton>
            <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)} className="offcanvas-transparent offcanvas-custom-width">
              <COffcanvasHeader>
                <COffcanvasTitle>Navigation</COffcanvasTitle>
                <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
              </COffcanvasHeader>
              <COffcanvasBody>
                <div className='offcanvas-navmenu'>
                  <div><button><a href='#'>Home</a></button></div>
                  <div><button><Link to="/AboutUs">About Us</Link></button></div>
                  <div><button><a href='#'>Services</a></button></div>
                  <div><button><a href='#'>Portfolio</a></button></div>
                  <div><button><a href='#'>Packages</a></button></div>
                  <div><button><a href='#'>Careers</a></button></div>
                  <div><button><a href='#'>Contact Us</a></button></div>
                </div>
              </COffcanvasBody>
            </COffcanvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topmenu;