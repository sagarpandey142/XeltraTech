import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import SmoPackage from "./SmoPackage";


function SmoPackages() {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <SmoPackage/>
      

        <Footer1/>
    </div>
  )
}

export default SmoPackages
