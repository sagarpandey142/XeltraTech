import React from 'react'
import '../servicewedo/offerings.css'
import { Link } from 'react-router-dom';
function OfferingsCards({icon, url1, url2, url3, url4, url5, head, link1, link2, link3, link4, link5}) {
  return (
              <div className='offerings-box-content1'>
                <div className='offerings-box-content1-header'>
                  <div className='offerings-box-content1-header-img'><img src={icon}/></div>
                  <div className='offerings-box-content1-header-text'>{head}</div>
                </div>
                <div className='offerings-box-content1-footer'>
                <ul>
                    <li><Link to={url1}>{link1}</Link></li>
                    <li><Link to={url2}>{link2}</Link></li>
                    <li><Link to={url3}>{link3}</Link></li>
                    <li><Link to={url4}>{link4}</Link></li>
                    <li><Link to={url5}>{link5}</Link></li>
                  </ul>
                </div>
              </div>        
  )
}

export default OfferingsCards