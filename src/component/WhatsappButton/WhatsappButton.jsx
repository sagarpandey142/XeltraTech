import React from 'react'
import {FaWhatsapp} from "react-icons/fa";
import './whatsappbutton.css'

function WhatsappButton () {

    const phoneNumber = "918923117610";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Neeraj!%20I%20am%20interested%20in%20your%20IT%20services.%20Can%20you%20provide%20more%20details?`;

  return (
    <a href={whatsappUrl} target='_blank' rel='noopener noreferrer' className='Whatsapp-button'>
        <FaWhatsapp />
    </a>
  )
}

export default WhatsappButton
