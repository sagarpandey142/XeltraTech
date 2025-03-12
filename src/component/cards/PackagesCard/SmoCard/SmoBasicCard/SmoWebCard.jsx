import React from 'react'

function SmoWebCard({feature, plan}) {
  return (
    <div className='w-full h-auto flex flex-col justify-start items-start gap-[20px]'>
                    <div className='w-full h-auto flex justify-between items-center'><div className=' text-wrap w-[220px] h-auto text-start font-raleway font-light text-[16px] leading-snug tracking-[0px] align-middle text-[#303030]'>{feature}</div><div className='w-[20%] h-auto text-start font-raleway font-bold text-[14px] leading-[100%] tracking-[0px] align-middle text-[#303030] '>{plan}</div></div>
        </div>
  )
}

export default SmoWebCard
