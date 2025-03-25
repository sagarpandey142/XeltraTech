import React from 'react'
import "./WhychooseSubscriptionBasedECommerce.css"
import WhychooseSubscriptionBasedECommerceCard from '../../cards/SubscriptionBasedECommerceCard/WhychooseSubscriptionBasedECommerceCard'
import {leftdata} from "../../../arraydata/SubscriptionBasedECommerceArray/WhychooseSubscriptionBasedECommerceArray"
import {rightdata} from "../../../arraydata/SubscriptionBasedECommerceArray/WhychooseSubscriptionBasedECommerceArray"
import whychoosebg from "./images/cms-choose.jpg"

function WhychooseSubscriptionBasedECommerce() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose <span>Xeltratech</span> for <span>Subscription Based </span> E-Commerce ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseSubscriptionBasedECommerceCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseSubscriptionBasedECommerceCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default WhychooseSubscriptionBasedECommerce
