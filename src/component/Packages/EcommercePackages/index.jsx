import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import EcommercePackage from "./EcommercePackage";


function EcommercePackages() {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <EcommercePackage/>
        <Footer1/>
    </div>
  )
}

export default EcommercePackages
