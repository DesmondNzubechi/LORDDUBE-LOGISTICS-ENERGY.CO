import React, { useState, useEffect } from "react";
import bgImg1 from '../../Images/bg1.avif';
import bgImg2 from '../../Images/bg2.avif';
import bgImg3 from '../../Images/bg3.avif';
import bgImg4 from '../../Images/bg4.avif';
import bgImg5 from '../../Images/bg5.avif';
import bgImg6 from '../../Images/bg6.avif';
import bgImg7 from '../../Images/bg7.avif';
import bgImg8 from '../../Images/bg8.jpg';
import bgImg9 from '../../Images/bg9.jpg';
import bgImg10 from '../../Images/bg10.jpg';
import bgImg11 from '../../Images/bg11.avif';
import bgImg12 from '../../Images/saftey.avif';
import bgImg13 from '../../Images/instrumentation2.avif';


import { Link } from "react-router-dom";

const HeroArray = [ bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6, bgImg7, bgImg8, bgImg9, bgImg10, bgImg11, bgImg12, bgImg13]

export const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % HeroArray.length);
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
    return(
        <div>
      <div 
        style={{ backgroundImage: `url(${HeroArray[currentImage]})` }}
      className={`min-h-[100vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full flex items-center after:w-full after:bg-Icon  px-[30px] bg-cover z-[1]  `}>
        <div className="max-w-[700px] relative z-[5] flex flex-col gap-3 ">
        <h1 className="text-white relative uppercase font-bold text-[30px] md:text-[50px] z-[2] ">
        Lorddube logistic energy.co
       </h1>
       <h2></h2>
       <p className="text-slate-100 wrap text-[20px] font-fonty md:text-[25px] ">Welcome to <strong className="text-white font-bold capitalize">Lorddube logistic energy.co</strong>, your trusted Your Reliable Source for High-Quality Oil and Gas Tools.</p>
       <div className="my-3 flex flex-row gap-5">
<Link className="bg-slate-50 p-2 hover:bg-yellow-500 text-[20px] font-myfont text-slate-900 rounded shadow-2xl ">Contact Us</Link> 
<Link className="border hover:bg-black p-2 text-[20px] font-myfont text-slate-50 rounded shadow-2xl ">Read More</Link> 
       </div>
        </div>
      
      </div>
        </div>
    )
}