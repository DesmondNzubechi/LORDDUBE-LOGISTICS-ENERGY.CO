import React from "react";
import abtimg from '../../Images/bg2.avif';
import { Link } from "react-router-dom";






export const AboutUs = () => {
    return(
        <div className="bg-gradient-to-b shadow-2xl items-center j px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 rounded-t-[50px] gap-5 to-slate-50">
            <div className="flex flex-col">
            <h1 className="uppercase font-myfont text-[30px] text-slate-900">About us</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
            </div>
            
            <div className="bg-gradient-to-b  flex-col-reverse md:flex-row-reverse flex items-center justify-around flex-col md:flex-row  py-[20px]  from-slate-50  gap-5 to-slate-50">
        <div className="max-w-[700px] flex flex-col gap-3 ">
            <h1 className="uppercase font-myfont text-[30px] text-slate-900">LordDube Logistic Energy.Co</h1>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[16px] ">At LordDube Logistic Energy, we take pride in being a leading provider of top-quality oil and gas tools. With a commitment to excellence and a focus on customer satisfaction, we strive to meet the diverse needs of our clients in the energy industry. Whether you are a small business or a large corporation, we have the expertise and resources to deliver reliable tools and services that will optimize your operations.</p>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[16px] ">We understand that the success of your operations relies on the reliability and durability of your equipment. That's why we source our products from reputable manufacturers known for their exceptional craftsmanship and adherence to industry standards. Each tool in our inventory undergoes rigorous quality checks to ensure it meets our stringent criteria. We take pride in offering only the best tools that are built to withstand the demanding conditions of the oil and gas industry.</p>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[16px] ">When you choose LordDube Logistic Energy as your oil and gas tool provider, you can trust that you are partnering with a company that is dedicated to your success. We combine exceptional product quality, extensive industry knowledge, and outstanding customer service to deliver unmatched value to our clients.</p>
            <Link to='/contact' className="bg-slate-900 w-fit px-5 p-2 text-slate-50 rounded shadow-2xl hover:bg-pink-500 text-[20px]">Contact Us</Link>
        </div>
        <div className="max-w-[600px]">
            <img src={abtimg} alt="" className="rounded" />
        </div>
        </div>
        </div>
    )
}