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


function footer1() {
  return (
    <div className='footer1-body'>
      <div className='footer1-box'>
              <div className='footer1-column1'>
                      <img src={logo1} height={300} width={200} alt='logo1'/>
                      <p>The IT industry is constantly evolving. A focus on innovation ensures the company stays ahead of the curve, develops cutting-edge solutions, and remains competitive.</p>
                      <div className='reach-us'>
                        <div className='reach-us1'><img src={pointer} alt='address'/>82 Corporate Tech Park, Sector - 62, Noida</div>
                        <div className='reach-us2'><img src={phone1} alt='phone'/>+91-123 456 7890</div>
                        <div className='reach-us3'><img src={email1} alt='mail'/>info@xeltratech.com</div>
                      </div>
              </div>

              <div className='footer1-column2'>
                <div className='footer1-column2-section1'>
                  <h3>WEB DESIGN</h3>
                  <a href='#'>Responsive Website Design</a>
                  <a href='#'>Graphic Design</a>
                  <a href='#'>Custom Web Design</a>
                  <a href='#'>Logo Design</a>
                </div>

                <div className='footer1-column2-section2'>
                <h3>WEB DEVELOPMENT</h3>
                  <a href='#'>Angular JS Development</a>
                  <a href='#'>VueJS Development</a>
                  <a href='#'>Symfony Development</a>
                  <a href='#'>Laravel Development</a>
                  <a href='#'>Zend Development</a>
                  <a href='#'>Codelgniter Development</a>
                  <a href='#'>Wordpress Development</a>
                  <a href='#'>Magento Development</a>
                </div>
              </div>

              <div className='footer1-column3'>
              <div className='footer1-column3-section1'>
                  <h3>MOBILE APPS DEVELOPMENT</h3>
                  <a href='#'>Android App Development</a>
                  <a href='#'>IOS App Development</a>
                  <a href='#'>Mobile App Maintenance</a>
                  <a href='#'>Mobile App Ui</a>
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
