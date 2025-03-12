import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import PPCPackage from "./PPCPackage";


function PPCPackages() {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <PPCPackage/>
      

        <Footer1/>
    </div>
  )
}

export default PPCPackages
