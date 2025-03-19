import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";
import ServicesCard from "../cards/ServicesCard";
import arrow from "./images/arrow.png";
import AnimatedContent from "../SingleComponents/AnimatedContent"
import data from '../../arraydata/FeaturedservicesArray';




function Featuredservices() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('https://xt-backend.onrender.com/homepage/get-cards');
                if (response.data.success) {
                    const latestData = response.data.data[0]?.cards || [];
                    setServices(latestData);
                }
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    return (
        <> 
            <div className="featuredservices-body">
                <div className="featuredservices-box">
                    {/* heading section start */}
                    <div className='box-top'>
                        <div className='box-top-heading'>
                            <div className='box-top-heading-header'>OUR FEATURED SERVICES</div>
                            <div className='box-top-heading-para'>We Provide Great IT &
                            Business Solutions</div>
                        </div>
                        
                        <AnimatedContent direction='horizontal'><div className='box-top-button'><Link to="/Servicewedo">VIEW MORE SERVICES <img src={arrow} alt='arrow'/></Link></div></AnimatedContent>

                    </div>
                    {/* heading section end */}

                    {/* main content section start */}
                    <div className='box-bottom'>
                    {data.map((data,index)=>(<ServicesCard key={index} icon={data.icon} head={data.head} para={data.para}/>))}
                    </div>
                    {/* main content section end */}
                </div>
              
            </div>
        </>
    );
}

export default Featuredservices;