import './footer1.css'
import logo1 from '../images/logo1.png'
import pointer from '../images/pointer.svg'
import phone1 from '../images/phone1.svg'
import email1 from '../images/email1.svg'
import insta from '../images/insta.svg'
import fb from '../images/fb.svg'
import twit from '../images/twit.svg'
import mastercard from '../images/mastercard.svg'
import visa from '../images/visa.svg'
import applepay from '../images/applepay.svg'
import maestro from '../images/maestro.svg'
import amex from '../images/amex.svg'

import { Link } from 'react-router-dom';


function footer1() {
  return (
    <div className='footer1-body '>
      <div className='footer1-box'>
              <div className='footer1-column1'>
                      <img src={logo1} height={300} width={200} alt='logo1'/>
                      <p>The IT industry is constantly evolving. A focus on innovation ensures the company stays ahead of the curve, develops cutting-edge solutions, and remains competitive.</p>
                      <div className='reach-us'>
                        <div className='reach-us1'><img src={pointer} alt='address'/>H-44, Suite-303, Bsi, Sector - 63, Noida</div>
                        <div className='reach-us2'><img src={phone1} alt='phone'/>+91-9560331179</div>
                        <div className='reach-us3'><img src={email1} alt='mail'/> sales@xeltratech.com</div>
                      </div>
              </div>

              <div className='footer1-column2'>
                <div className='footer1-column2-section1'>
                  <h3>WEB DESIGN</h3>
                  <Link to="/Servicewedo/ResponsiveDesign">Responsive + Website Design</Link>
                  <Link to="/Servicewedo/GraphicDesign">Graphic Design</Link>
                  <Link to="/Servicewedo/WebDesign">Custom Web Design</Link>
                  <Link to="/Servicewedo/LogoDesign">Logo Design</Link>
                  <Link to="/Servicewedo/ReactNativeDevelopment">React Design</Link>
                </div>

                <div className='footer1-column2-section2'>
                <h3>WEB DEVELOPMENT</h3>
                  <Link to="/Servicewedo/eCommerceDevelopment">E-commerce Development</Link>
                  <Link to="/Servicewedo/InterspireDevelopment">Interspire Development</Link>
                  <Link to="/Servicewedo/DrupalWebDevelopment">Drupal Development</Link>
                  <Link to="/Servicewedo/PHPDevelopment">PHP Development</Link>
                  <Link to="/Servicewedo/WordPressDevelopment">Wordspress Development</Link>
                </div>
              </div>

              <div className='footer1-column3'>
              <div className='footer1-column3-section1'>
                  <h3>MOBILE APPS DEVELOPMENT</h3>
                  <Link to="/Servicewedo/AndroidAppDevelopment">Android App Development</Link>
                  <Link to="/Servicewedo/IosAppDevelopment">IOS App Development</Link>
                  <Link to="/Servicewedo/MobileAppSupport">Mobile App Maintenance</Link>
                  <Link to="/Servicewedo/MobileUI">Mobile App UI</Link>
                </div>
                <div className='footer1-column3-section2'>
                  <h3>FOLLOW US</h3>
                  <div className='follow-us'>
                    <a  href="www.instagram.com" className='instagram'><img src={insta} alt='insta'/></a>
                    <a href="www.facebook.com" className='instagram'><img src={fb} alt='fb'/></a>
                    <a href="www.twitter.com" className='instagram'><img src={twit} alt='twit'/></a>
                  </div>
                </div>
                <div className='footer1-column3-section3'>
                  <button><a href='#'>Buy Now</a></button>
                  <div className='payment'>
                    <img src={mastercard} alt='master'/>
                    <img src={visa} alt='visa'/>
                    <img src={applepay} alt='apple'/>
                    <img src={maestro} alt='maestro'/>
                    <img src={amex} alt='amex'/>
                  </div>
                </div>

              </div>
       </div>     
    </div>
    
    
  )
}

export default footer1
