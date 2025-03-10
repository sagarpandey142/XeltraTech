import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import SeoPackage from './SeoPackage';

const SeoPackages = () => {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <SeoPackage/>

        <Footer1/>
    </div>
  )
}

export default SeoPackages