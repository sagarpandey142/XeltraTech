import React from 'react'
import "./WhychoosePayment.css"
import WhychoosePaymentCard from '../../cards/PaymentCard/WhychoosePaymentCard'
import {leftdata} from "../../../arraydata/PaymentArray/WhychoosePaymentArray"
import {rightdata} from "../../../arraydata/PaymentArray/WhychoosePaymentArray"
import whychoosebg from "./images/whychoosebg.png"

function WhyPayment() {
    
  return (
    <>
    <div className='whychooseaws-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose Xeltratech for Payment Gateway Service?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychoosePaymentCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychoosePaymentCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default WhyPayment
