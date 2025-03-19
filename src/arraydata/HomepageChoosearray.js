import qualified from '../component/images/qualified.svg';
import shield from '../component/images/shield.svg';
import innovative from '../component/images/innovative.svg';
import support from '../component//images/support.svg';
import React from 'react';

const data =[
        {
            icon:React.createElement("img", { src: qualified, alt: "qualified" }),
            head:"Qualified Expert",
            para:"Our team consists of highly skilled developers with extensive experience in various web technologies and frameworks.",
        },
        {
            icon:React.createElement("img", { src: shield, alt: "shield" }),
            head:"Highly Recommend",
            para:"We value our client relationships and consistently receive positive feedback, leading to numerous referrals and repeat business.",
        },
        {
            icon:React.createElement("img", { src: innovative, alt: "innovative" }),
            head:"Innovative Team",
            para:"Our innovative team is at the forefront of technology and creativity, dedicated to developing unique solutions.",
        },
        {
            icon:React.createElement("img", { src: support, alt: "support" }),
            head:"24*7  Support",
            para:"We offer 24/7 support to ensure your business runs smoothly, addressing issues anytime you need assistance.",
        },
    ]

    export default data