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
                <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">Android App Development</Link></div>
                <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/IosAppDevelopment">IOS Application Development</Link></div>
                <div className='services-dropdown1-top-submenu1-bottom'><Link to="/ContactUs">App Support And Maintenance</Link></div>
              </div>
            </div>
            <div className='services-dropdown1'>Website & UI/UX Design
              <div className='services-dropdown1-top-submenu2-body'>
                  <div className='services-dropdown1-top-submenu1-top'><Link to="/Servicewedo/LogoDesign">Logo Design</Link></div>
                  <div className='services-dropdown1-top-submenu1'><Link to="/ReactNativeDevelopment">React Design</Link></div>
                  <div className='services-dropdown1-top-submenu1'><Link to="/Servicewedo/GraphicDesign">Graphic Design</Link></div>
                  <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">Custom Web Design</Link></div>
                  <div className='services-dropdown1-top-submenu1-bottom'><Link to="/ResponsiveDesign">Responsive + Website Design</Link></div>
              </div>
            </div>
            <div className='services-dropdown1'>Website Development
                <div className='services-dropdown1-top-submenu3-body'>
                    <div className='services-dropdown1-top-submenu1-top'><Link to="/ContactUs">PHP Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/DrupalWebDevelopment">Drupal Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="//ContactUs">Interspire Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">Wordspress Development</Link></div>
                    <div className='services-dropdown1-top-submenu1-bottom'><Link to="/ContactUs">E-commerce Development</Link></div>
                </div>
            </div>
            <div className='services-dropdown1'>Digital Marketing & Ads
                <div className='services-dropdown1-top-submenu4-body'>
                    <div className='services-dropdown1-top-submenu1-top'><Link to="/ContactUs">Seo Consulting</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">PPC Advertising</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="//ContactUs">Content Writing</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">Social Media Marketing</Link></div>
                    <div className='services-dropdown1-top-submenu1-bottom'><Link to="/ContactUs">Online Reputation Management</Link></div>
                </div>
            </div>
            <div className='services-dropdown1'>Clouds Services
                <div className='services-dropdown1-top-submenu5-body'>
                <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">Cloud Automation Services</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="//ContactUs">Cloud Migration Services</Link></div>
                    <div className='services-dropdown1-top-submenu1-bottom'><Link to="/ContactUs">DevOps Development</Link></div>
                    <div className='services-dropdown1-top-submenu1'><Link to="/ContactUs">AZURE Development</Link></div>
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















// <div className='navmenu-latest'>
// <ul>
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/AboutUs">About Us</Link></li>
//   <li><Link to="/ContactUs">Portfolio</Link>
//     {/* <div className='dropdown-services'>
//       <ul>
//         <li>Android</li>
//         <li>IOS</li>
//         <li>Website</li>
//         <li>SEO</li>
//       </ul>
//     </div> */}
//   </li>
//   <li><Link to="/Servicewedo">Services</Link>
//   <div className='dropdown-services'>
//                       <ul>
//                           <li>Mobile App Ui
//                               <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><Link to="/Servicewedo/MobileUI">Mobile App UI</Link></li>
//                                       <li><Link to="/Servicewedo/HybridAppDevelopment">Hybrid App Development</Link></li>
//                                       <li><a href='#'>IOS App Development</a></li>
//                                       <li><a href='#'>Mobile App Maintenance</a></li>
//                                       <li><a href='#'>Android App Development</a></li>
//                                   </ul>
//                               </div>
//                           </li>
//                           <li>Website Design
//                           <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><Link to="/Servicewedo/LogoDesign">Logo Design</Link></li>
//                                       <li><a href='#'>React Design</a></li>
//                                       <li><a href='/Servicewedo/GraphicDesign'>Graphic Design</a></li>
//                                       <li><a href='#'>Custom Web Design</a></li>
//                                       <li><a href='#'>Responsive + Website Design</a></li>
//                                   </ul>
//                           </div>
//                           </li>
//                           <li>Digital Marketing
//                           <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><a href='#'>PHP Development</a></li>
//                                       <li><a href='#'>Drupal Development</a></li>
//                                       <li><a href='#'>Interspire Development</a></li>
//                                       <li><a href='#'>WordPress Development</a></li>
//                                       <li><a href='#'>E-Commerce Development</a></li>
//                                   </ul>
//                           </div>
//                           </li>
//                           <li>Website Development
//                           <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><a href='#'>SEO Consulting</a></li>
//                                       <li><a href='#'>PPC Advertising</a></li>
//                                       <li><a href='#'>Content Writing</a></li>
//                                       <li><a href='#'>Social Media Marketing</a></li>
//                                       <li><a href='#'>Online Reputation Management</a></li>
//                                   </ul>
//                           </div>
//                           </li>
//                       </ul>
//                   </div>
//   </li>
//   <li><Link to="/PackageMain">Packages</Link>
//               <div className='dropdown-packages'>
//                       <ul>
//                           <li>Apps Packages</li>
//                           <li>SEO Packages</li>
//                           <li>SMO Packages</li>
//                           <li>PPC Packages India</li>
//                           <li>ORM Packages India</li>
//                           <li>Static Packages India</li>
//                           <li>Wordpress Development Plans</li>
//                           <li>Content Writing Packages India</li>
//                           <li>Ecommerce Development Plans</li>
//                       </ul>
//               </div>
//               </li>
//   <li><Link to="/ContactUs">Careers</Link></li>
//   <li><Link to="/ContactUs">Contact Us</Link></li>
// </ul>
// </div>















// <div className='navmenu-latest'>
// <ul>
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/AboutUs">About Us</Link></li>
//   <li><Link to="/ContactUs">Portfolio</Link>
//     {/* <div className='dropdown-services'>
//       <ul>
//         <li>Android</li>
//         <li>IOS</li>
//         <li>Website</li>
//         <li>SEO</li>
//       </ul>
//     </div> */}
//   </li>
//   <li><Link to="/Servicewedo">Services</Link>
//   <div className='dropdown-services'>
//                       <ul>
//                           <li>Mobile App Ui
//                               <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><Link to="/Servicewedo/MobileUI">Mobile App UI</Link></li>
//                                       <li><Link to="/Servicewedo/HybridAppDevelopment">Hybrid App Development</Link></li>
//                                       <li><a href='#'>IOS App Development</a></li>
//                                       <li><a href='#'>Mobile App Maintenance</a></li>
//                                       <li><a href='#'>Android App Development</a></li>
//                                   </ul>
//                               </div>
//                           </li>
//                           <li>Website Design
//                           <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><Link to="/Servicewedo/LogoDesign">Logo Design</Link></li>
//                                       <li><a href='#'>React Design</a></li>
//                                       <li><a href='/Servicewedo/GraphicDesign'>Graphic Design</a></li>
//                                       <li><a href='#'>Custom Web Design</a></li>
//                                       <li><a href='#'>Responsive + Website Design</a></li>
//                                   </ul>
//                           </div>
//                           </li>
//                           <li>Digital Marketing
//                           <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><a href='#'>PHP Development</a></li>
//                                       <li><a href='#'>Drupal Development</a></li>
//                                       <li><a href='#'>Interspire Development</a></li>
//                                       <li><a href='#'>WordPress Development</a></li>
//                                       <li><a href='#'>E-Commerce Development</a></li>
//                                   </ul>
//                           </div>
//                           </li>
//                           <li>Website Development
//                           <div className='dropdown-services-submenu1'>
//                                   <ul>
//                                       <li><a href='#'>SEO Consulting</a></li>
//                                       <li><a href='#'>PPC Advertising</a></li>
//                                       <li><a href='#'>Content Writing</a></li>
//                                       <li><a href='#'>Social Media Marketing</a></li>
//                                       <li><a href='#'>Online Reputation Management</a></li>
//                                   </ul>
//                           </div>
//                           </li>
//                       </ul>
//                   </div>
//   </li>
//   <li><Link to="/PackageMain">Packages</Link>
//               <div className='dropdown-packages'>
//                       <ul>
//                           <li>Apps Packages</li>
//                           <li>SEO Packages</li>
//                           <li>SMO Packages</li>
//                           <li>PPC Packages India</li>
//                           <li>ORM Packages India</li>
//                           <li>Static Packages India</li>
//                           <li>Wordpress Development Plans</li>
//                           <li>Content Writing Packages India</li>
//                           <li>Ecommerce Development Plans</li>
//                       </ul>
//               </div>
//               </li>
//   <li><Link to="/ContactUs">Careers</Link></li>
//   <li><Link to="/ContactUs">Contact Us</Link></li>
// </ul>
// </div>
