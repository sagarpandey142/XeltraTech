import React from 'react'
import group from "../../assets/Group.svg"
import "./Getstarted.css"
import ContactForm from '../Forms/ContactUsform'

const GetStarted = () => {
  return (
    <div className='main-div'>
        <div className='sub-div'>
          <img src={group} className='hidden md:block ' />
            <div className='  p-3'>
                <div className='header1div'>
                    <div className='headdiv'>Get started</div>
                   
                </div>
                <div className='getdiv'>Get in <span className=' text-red-600'>touch</span> with us.
                We’re here to assist you.</div>
             
                    {/*input */}
                    <ContactForm/>
               
            </div>
        </div>
    </div>
  )
}

export default GetStarted