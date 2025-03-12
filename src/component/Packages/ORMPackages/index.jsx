import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import ORMPackage from "./ORMPackage";


function ORMPackages() {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <ORMPackage/>
        <Footer1/>
    </div>
  )
}

export default ORMPackages
