import React, { useEffect, useRef } from "react";

const Maps = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      if (!window.google) return; // Ensure Google Maps API is loaded

      const { Map } = await google.maps.importLibrary("maps");

      new Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }

    initMap();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col md:flex-row gap  w-screen p-4 pb-3">
      <div className="flex items-center justify-center gap-3 md:w-1/2  lg:w-[40%]">
        <div className="font-inter font-bold text-[3rem]     lg:max-w-[78%]  ">
          You <span className=" text-[#ed1c24]">can</span>  Directly reach us 
   
        </div>
      </div>
      <section className=" w-[60%]" >
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.367478289601!2d77.37922549999999!3d28.6187465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef1be0720791%3A0x1c5f600e95594eb6!2sxeltraTech%20Innovation!5e0!3m2!1shi!2sin!4v1737201550520!5m2!1shi!2sin"  width="80%" height="410" ></iframe>
      </section>
     
       
    </div>
    
  );
};

export default Maps;
