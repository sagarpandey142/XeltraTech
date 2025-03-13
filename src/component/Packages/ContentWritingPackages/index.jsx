import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import ContentWritingPackage from "./ContentWritingPackage";


function ContentWritingPackages() {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <ContentWritingPackage/>
        <Footer1/>
    </div>
  )
}

export default ContentWritingPackages
