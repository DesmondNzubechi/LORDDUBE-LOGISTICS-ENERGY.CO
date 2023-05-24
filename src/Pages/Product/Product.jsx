import React from "react";
import abtimg from '../../Images/bg2.avif';
import { Link } from "react-router-dom";





export const OurProducts = () => {
    return(
        <div className="bg-gradient-to-b shadow-2xl   items-center justify-around  md:flex-row px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 rounded-t-[50px]  to-slate-50">
          <div className="flex flex-col">
            <h1 className="uppercase font-myfont text-[30px] text-slate-900">Our products</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
<p className="text-[20px] my-[20px] max-w-[700px] text-slate-700 ">Quality is at the core of everything we do. We partner with renowned manufacturers and suppliers to ensure that our customers receive products of exceptional quality. We rigorously test and inspect each tool to guarantee its reliability, durability, and compliance with industry standards.</p>
            </div>
        </div>
    )
}