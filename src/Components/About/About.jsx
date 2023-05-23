import React from "react";
import abtimg from '../../Images/bg2.avif';
import { Link } from "react-router-dom";
export const AboutHome = () => {
    return(
        <div className="bg-gradient-to-b shadow-2xl  flex items-center justify-around flex-col md:flex-row px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 rounded-t-[50px] gap-5 to-slate-50">
        <div className="max-w-[700px] flex flex-col gap-3 ">
            <h1 className="uppercase font-myfont text-[30px] text-slate-900">About Us</h1>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[18px] ">Welcome to LordDube Logistic Energy.co, your premier destination for high-quality oil and gas tools. With a commitment to excellence and a strong focus on customer satisfaction, we are dedicated to providing you with the tools and equipment you need to thrive in the dynamic energy industry.</p>
            <p className="text-slate-700 font-fonty  text-[17px] md:text-[18px] ">At LordDube Logistic Energy.co, we understand the challenges and demands faced by professionals in the oil and gas sector. That's why we have curated a comprehensive range of tools and equipment that are specifically designed to meet your unique requirements. Whether you are involved in drilling, production, refining, or transportation, we have the solutions to optimize your operations and enhance productivity.</p>
            <Link className="bg-slate-900 w-fit px-5 p-2 text-slate-50 rounded shadow-2xl hover:bg-pink-500 text-[20px]">Read More</Link>
        </div>
        <div className="max-w-[600px]">
            <img src={abtimg} alt="" className="rounded" />
        </div>
        </div>
    )
}