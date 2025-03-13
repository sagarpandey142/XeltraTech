import React from 'react'

function ContentWritingPricingCard({plan, pricing}) {
  return (

    <div className='w-full h-auto flex justify-between items-center'>
        <div className='text-wrap w-[220px] h-auto text-start font-raleway font-light text-[16px] leading-snug tracking-[0px] align-middle text-[#303030]'>{plan}</div>
        <div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>{pricing}</div>
    </div>
  )
}

export default ContentWritingPricingCard
