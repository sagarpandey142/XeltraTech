import React from 'react'
import Hero from './Hero'
import Topbar from '../../Homepage/Topbar'
import Topmenu from '../../commonpage/Topmenu'
import Footer1 from "../../Homepage/footer1";
import WordpressPackage from "./WordpressPackage";


function WordpressPackages() {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <WordpressPackage/>
        <Footer1/>
    </div>
  )
}

export default WordpressPackages
