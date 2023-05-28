import {React, useEffect} from "react";
import oilTools from '../../Images/bg4.avif';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export const Overview = () => {


    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);


    return (
        <div className="px-[20px] md:min-h-[70vh] lg:min-h-[100vh] items-center py-[50px] justify-around  bg-slate-900 md:flex-row-reverse  flex flex-col gap-5 md:flex-row">

<div data-aos='fade-up' aos-data-duration='2000' className="max-w-[600px] flex flex-col gap-4">
    <h2 className="text-white font-semibold text-[20px] ">
    "We are Lorddube logistics energy.co, your trusted partner for top-of-the-line oil and gas tools. With our unwavering commitment to excellence and a comprehensive range of industry-leading products, we empower businesses in the oil and gas sector to achieve unmatched performance and operational efficiency "
    </h2>
    <p className="text-slate-200 font-fonty ">At <strong className="uppercase"> Lorddube Logistics Energy.Co</strong> , we understand the critical role that reliable tools play in your operations. That's why we go above and beyond to deliver products of exceptional quality and reliability. Our tools are manufactured using cutting-edge techniques and premium materials, ensuring they can withstand the most challenging environments and deliver consistent performance under demanding conditions.</p>
    <Link to='/products' className="bg-pink-500 shadow w-fit p-2 text-slate-200 px-[20px] text-[20px] rounded font-myfont">View Products</Link>
</div>
<div data-aos='fade-up' aos-data-duration='2000' className="max-w-[500px] ">
    <img src={oilTools} alt="" className="w-full h-full  rounded" />
</div>
        </div>
    )
}