import React from 'react'
import "./EcommerceMaintenanceValues.css"
import EcommerceMaintenanceValuesCard from "../../cards/EcommerceMaintenanceCard/EcommerceMaintenanceValuesCard"
import data from "../../../arraydata/EcommerceMaintenanceArray/EcommerceMaintenanceValuesArray"

function EcommerceMaintenanceValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our  </span> Values </div>
                <div className='PHPValues-para'>Our eCommerce maintenance experts ensure seamless store performance, security, and updates with ongoing support, bug fixes, and optimization for a smooth shopping experience.</div>
            </div>


            <div className='EcommerceMaintenanceValues-content'>
            {data.map((data,index)=>(<EcommerceMaintenanceValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default EcommerceMaintenanceValues
