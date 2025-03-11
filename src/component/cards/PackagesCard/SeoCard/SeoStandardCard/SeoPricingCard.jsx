import React from 'react'

function SeoPricingCard({plan, pricing}) {
  return (

    <div className='w-full h-auto flex justify-between items-center'>
        <div className='w-[220px] h-auto text-start font-raleway font-light text-[16px] leading-snug tracking-[0px] align-middle text-[#303030]'>{plan}</div>
        <div className='w-[75px] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030]'>{pricing}</div>
    </div>
  )
}

export default SeoPricingCard
