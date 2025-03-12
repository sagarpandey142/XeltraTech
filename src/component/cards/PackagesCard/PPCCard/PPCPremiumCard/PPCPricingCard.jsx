import React from 'react'

function PPCPricingCard({plan, pricing}) {
  return (

    <div className=' w-full h-auto flex justify-between items-center'>
        <div className=' text-wrap w-[220px] h-auto text-start font-raleway font-light text-[16px] leading-snug tracking-[0px] align-middle text-[#303030]'>{plan}</div>
        <div className=' text-wrap w-[75px] h-auto text-start font-raleway font-bold text-[12px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>{pricing}</div>
    </div>
  )
}

export default PPCPricingCard
