import design from '../component/Homepage/images/design.svg'
import prototype from '../component/Homepage/images/prototype.svg'
import development from '../component/Homepage/images/deployment.svg'
import discover from '../component/Homepage/images/data-discovery.svg'
import quality from '../component/Homepage/images/coding.svg'
import deployment from '../component/Homepage/images/deployment.svg'
import supportm from '../component/Homepage/images/support.svg'
import React from 'react'



const data =[
    {
        icon: React.createElement("img", { src: design, alt: "design" }),
        head: "UI/UX Designer",
    },
    {
        icon: React.createElement("img", { src: prototype, alt: "prototype" }),
        head: "Prototype",
    },
    {
        icon: React.createElement("img", { src: development, alt: "development" }),
        head: "Development",
    },
    {
        icon: React.createElement("img", { src:discover, alt: "discover" }),
        head: "Discover",
    },
    {
        icon: React.createElement("img", { src: quality, alt: "quality" }),
        head: "Quality Assurance",
    },
    {
        icon: React.createElement("img", { src: deployment, alt: "deployment" }),
        head: "Deployment",
    },
    {
        icon: React.createElement("img", { src: supportm, alt: "supportm" }),
        head: "Support & Maintenance",
    },
]

export default data