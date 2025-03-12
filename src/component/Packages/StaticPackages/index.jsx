import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import StaticPackage from "./StaticPackage";


function StaticPackages() {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <StaticPackage/>
        <Footer1/>
    </div>
  )
}

export default StaticPackages
