import React from "react";
import abtimg from '../../Images/bg2.avif';
import oilTools1 from '../../Images/oiltools/IMG-20230524-WA0027.jpg';
import oilTools2 from '../../Images/oiltools/IMG-20230524-WA0029.jpg';
import oilTools3 from '../../Images/oiltools/IMG-20230524-WA0030.jpg';
import oilTools4 from '../../Images/oiltools/IMG-20230524-WA0031.jpg';
import oilTools5 from '../../Images/oiltools/IMG-20230524-WA0032.jpg';
import oilTools6 from '../../Images/oiltools/IMG-20230524-WA0033.jpg';
import oilTools7 from '../../Images/oiltools/IMG-20230524-WA0034.jpg';
import oilTools8 from '../../Images/oiltools/IMG-20230524-WA0035.jpg';
import oilTools9 from '../../Images/oiltools/WhatsApp Image 2023-05-24 at 07.16.52.jpg';
import { Link } from "react-router-dom";


const oilTools = [
    {
        productName: 'Fitting core',
        productImg : oilTools1,

    },
    {
        productName: 'Fitting core',
        productImg : oilTools2,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools3,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools4,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools5,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools6,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools7,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools8,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools9,
        
    },

]

const OilTools = () => {
    return (
        <div>
            <div className="flex items-start my-[30px] flex-col">
            <h1 className="uppercase  font-bold text-[20px] text-slate-900">Oil/Gas Tools</h1>
<span className="bg-pink-500 h-[5px] rounded-[100%] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-5">
{
    oilTools.map(tools => {
        return(
            <div className="shadow-2xl rounded  md:max-w-[350px] md:max-h-[20px]  ">
                <img src={tools.productImg} className="rounded h-full w-full" alt="" />
                
            </div>
        )
    })
}
</div>
        </div>
    )
}



const HosePipe = () => {
    return (
        <div>
            <div className="flex items-center my-[30px] flex-col">
            <h1 className="uppercase  font-myfont text-[30px] text-slate-900">Hose pipe</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-4">
{
    oilTools.map(tools => {
        return(
            <div className="shadow-2xl rounded  ">
                <img src={tools.productImg} className="rounded" alt="" />
                <h1 className="text-center text-slate-200 rounded-b font-semibold bg-slate-900 ">{tools.productName}</h1>
            </div>
        )
    })
}
</div>
        </div>
    )
}

const Electrical = () => {
    return (
        <div>
            <div className="flex items-center my-[30px] flex-col">
            <h1 className="uppercase  font-myfont text-[30px] text-slate-900">Electrical equipment </h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-4">
{
    oilTools.map(tools => {
        return(
            <div className="shadow-2xl rounded  ">
                <img src={tools.productImg} className="rounded" alt="" />
                <h1 className="text-center text-slate-200 rounded-b font-semibold bg-slate-900 ">{tools.productName}</h1>
            </div>
        )
    })
}
</div>
        </div>
    )
}

const Instrumentation = () => {
    return (
        <div>
            <div className="flex items-center my-[30px] flex-col">
            <h1 className="uppercase  font-myfont text-[30px] text-slate-900">Instrumentation/ stainless fittings</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-4">
{
    oilTools.map(tools => {
        return(
            <div className="shadow-2xl rounded  ">
                <img src={tools.productImg} className="rounded" alt="" />
                <h1 className="text-center text-slate-200 rounded-b font-semibold bg-slate-900 ">{tools.productName}</h1>
            </div>
        )
    })
}
</div>
        </div>
    )
}

const Structural = () => {
    return (
        <div>
            <div className="flex items-center my-[30px] flex-col">
            <h1 className="uppercase  font-myfont text-[30px] text-slate-900">Structural steel plates, pipe, H- Beam, Angel Iron</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-4">
{
    oilTools.map(tools => {
        return(
            <div className="shadow-2xl rounded  ">
                <img src={tools.productImg} className="rounded" alt="" />
                <h1 className="text-center text-slate-200 rounded-b font-semibold bg-slate-900 ">{tools.productName}</h1>
            </div>
        )
    })
}
</div>
        </div>
    )
}

const SafetyFab = () => {
    return (
        <div>
            <div className="flex items-center my-[30px] flex-col">
            <h1 className="uppercase  font-myfont text-[30px] text-slate-900">Safety fabrications & Construction</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-4">
{
    oilTools.map(tools => {
        return(
            <div className="shadow-2xl rounded  ">
                <img src={tools.productImg} className="rounded" alt="" />
                <h1 className="text-center text-slate-200 rounded-b font-semibold bg-slate-900 ">{tools.productName}</h1>
            </div>
        )
    })
}
</div>
        </div>
    )
}






export const OurProducts = () => {
    return(
        <div className="bg-gradient-to-b shadow-2xl   items-center justify-around  md:flex-row px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 rounded-t-[50px]  to-slate-50">
          <div className="flex flex-col">
            <h1 className="uppercase font-myfont text-[30px] text-slate-900">Our products</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
<p className="md:text-[20px] text-[15px] my-[20px] max-w-[700px] text-slate-700 ">Quality is at the core of everything we do. We partner with renowned manufacturers and suppliers to ensure that our customers receive products of exceptional quality. We rigorously test and inspect each tool to guarantee its reliability, durability, and compliance with industry standards.</p>
            </div>


            <div className="my-[50px] flex-col justify-center gap-5">
            <OilTools/>
            <HosePipe/>
            <Electrical/>
            <Instrumentation/>
            <Structural/>
            <SafetyFab/>
            </div>
        </div>
    )
}