import React from 'react'
import "./WhychooseCustomECommerceWebsite.css"
import WhychooseCustomECommerceWebsiteCard from '../../cards/CustomECommerceWebsiteCard/WhychooseCustomECommerceWebsiteCard'
import {leftdata} from "../../../arraydata/CustomECommerceWebsiteArray/WhychooseCustomECommerceWebsiteArray"
import {rightdata} from "../../../arraydata/CustomECommerceWebsiteArray/WhychooseCustomECommerceWebsiteArray"
import whychoosebg from "./images/Add to Cart-pana.png"

function WhychooseCustomECommerceWebsite() {
    
  return (
    <>
    <div className='whychooseweb-body'><img src={whychoosebg}/>
        <div className='whychooseweb-box'>
            <div className='whychooseweb-header'>Why Choose <span>Xeltratech</span> for <span>Custom E-Commerce</span> Website ?</div>
            <div className='whychooseweb-content'>
                <div className='whychooseweb-content-left'>
                    {leftdata.map((data,index)=>(<WhychooseCustomECommerceWebsiteCard key={index} head={data.head} para={data.para}/>))}      
                </div>
                <div className='whychooseweb-content-right'>
                    
                     {rightdata.map((data,index)=>(<WhychooseCustomECommerceWebsiteCard key={index} head={data.head} para={data.para}/>))}      
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default WhychooseCustomECommerceWebsite
