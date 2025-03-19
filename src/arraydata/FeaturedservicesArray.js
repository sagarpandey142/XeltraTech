import App from '../component/Homepage/images/AppDevelopmentLogo.svg';
import IT from '../component/Homepage/images/IT.svg';
import ITC from '../component/Homepage/images/ITC.svg';
import QA from '../component/Homepage/images/QA.svg';
import UX from '../component/Homepage/images/UX1.svg';
import web from '../component/Homepage/images/web.svg';
import React from "react"

const data =[
    {
        icon: React.createElement("img", { src: App, alt: "App" }),
        head: "App Development",
        para: "We provide the best app development services in the market."
    },
    {
        icon: React.createElement("img", { src: IT, alt: "IT" }),
        head: "IT Development",
        para: "We provide the best IT development services in the market."
    },
    {
        icon: React.createElement("img", { src: ITC, alt: "ITC" }),
        head: "IT Solution",
        para: "We provide the best IT solution services in the market."
    },
    {
        icon: React.createElement("img", { src: QA, alt: "QA" }),
        head: "QA & Testing",
        para: "We provide the best IT solution services in the market."
    },
    {
        icon: React.createElement("img", { src: UX, alt: "UX" }),
        head: "UX / UI Design",
        para: "We provide the best IT solution services in the market."
    },
    {
        icon: React.createElement("img", { src: web, alt: "web" }),
        head: "Web Development",
        para: "We provide the best IT solution services in the market."
    },
]

export default data