import React from "react";
import abtimg from '../../Images/bg2.avif';
import { Link } from "react-router-dom";


const oilTools = [
    {
        productName: 'Fitting core',
        productImg : abtimg,

    },
    {
        productName: 'Fitting core',
        productImg : abtimg,
        
    },
    {
        productName: 'Fitting core',
        productImg : abtimg,
        
    },
    {
        productName: 'Fitting core',
        productImg : abtimg,
        
    },
    {
        productName: 'Fitting core',
        productImg : abtimg,
        
    },
    {
        productName: 'Fitting core',
        productImg : abtimg,
        
    },
    {
        productName: 'Fitting core',
        productImg : abtimg,
        
    },
    {
        productName: 'Fitting core',
        productImg : abtimg,
        
    },

]

const OilTools = () => {
    return (
        <div>
            <div className="flex items-center my-[30px] flex-col">
            <h1 className="uppercase  font-myfont text-[30px] text-slate-900">Oil/Gas Tools</h1>
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