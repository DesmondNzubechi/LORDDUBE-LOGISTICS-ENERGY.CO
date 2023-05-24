import {React, useEffect} from "react";
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
import oilTools10 from '../../Images/oiltools/IMG-20230524-WA0007.jpg';
import oilTools11 from '../../Images/oiltools/IMG-20230524-WA0010.jpg';
import oilTools12 from '../../Images/oiltools/IMG-20230524-WA0012.jpg';
import oilTools13 from '../../Images/oiltools/IMG-20230524-WA0070.jpg';
import oilTools14 from '../../Images/oiltools/IMG-20230524-WA0071.jpg';
import oilTools15 from '../../Images/oiltools/IMG-20230524-WA0072.jpg';
import oilTools16 from '../../Images/oiltools/IMG-20230524-WA0073.jpg';
import oilTools17 from '../../Images/oiltools/IMG-20230524-WA0074.jpg';
import oilTools18 from '../../Images/oiltools/IMG-20230524-WA0075.jpg';
import oilTools19 from '../../Images/oiltools/IMG-20230524-WA0076.jpg';


import hosePipe1 from '../../Images/hosePipe.avif';
import hosePipe2 from '../../Images/hosepipe/WhatsApp Image 2023-05-24 at 07.22.07.jpg';
import hosePipe3 from '../../Images/hosepipe/hose.jpg';
import hosePipe4 from '../../Images/hosepipe/hose1.jpg';
import hosePipe5 from '../../Images/hosepipe/hose2.jpg';
import Instrumentation1 from '../../Images/instrumentation/IMG-20230524-WA0040.jpg';
import Instrumentation2 from '../../Images/instrumentation/IMG-20230524-WA0041.jpg';
import Instrumentation3 from '../../Images/instrumentation/IMG-20230524-WA0042.jpg';
import Instrumentation4 from '../../Images/instrumentation/IMG-20230524-WA0043.jpg';
import Instrumentation5 from '../../Images/instrumentation/IMG-20230524-WA0044.jpg';
import Instrumentation6 from '../../Images/instrumentation/IMG-20230524-WA0045.jpg';
import Instrumentation7 from '../../Images/instrumentation/IMG-20230524-WA0046.jpg';
import Instrumentation8 from '../../Images/instrumentation/IMG-20230524-WA0048.jpg';
import Instrumentation9 from '../../Images/instrumentation/IMG-20230524-WA0047.jpg';
import Instrumentation10 from '../../Images/instrumentation/IMG-20230524-WA0049.jpg';
import Instrumentation11 from '../../Images/instrumentation/IMG-20230524-WA0078.jpg';
import Instrumentation12 from '../../Images/instrumentation/IMG-20230524-WA0079.jpg';
import Instrumentation13 from '../../Images/instrumentation/IMG-20230524-WA0080.jpg';
import Instrumentation14 from '../../Images/instrumentation/IMG-20230524-WA0081.jpg';
import Instrumentation15 from '../../Images/instrumentation/IMG-20230524-WA0082.jpg';
import Instrumentation16 from '../../Images/instrumentation/IMG-20230524-WA0083.jpg';
import Instrumentation17 from '../../Images/instrumentation/IMG-20230524-WA0084.jpg';
import Instrumentation18 from '../../Images/instrumentation/IMG-20230524-WA0085.jpg';
import Instrumentation19 from '../../Images/instrumentation/IMG-20230524-WA0086.jpg';
import Instrumentation20 from '../../Images/instrumentation/IMG-20230524-WA0087.jpg';
import Instrumentation21 from '../../Images/instrumentation/IMG-20230524-WA0088.jpg';
import Instrumentation22 from '../../Images/instrumentation/IMG-20230524-WA0088.jpg';
import Instrumentation23 from '../../Images/instrumentation/IMG-20230524-WA0089.jpg';
import Instrumentation24 from '../../Images/instrumentation/IMG-20230524-WA0090.jpg';
import Instrumentation25 from '../../Images/instrumentation/IMG-20230524-WA0091.jpg';
import Instrumentation26 from '../../Images/instrumentation/IMG-20230524-WA0092.jpg';
import Instrumentation27 from '../../Images/instrumentation/IMG-20230524-WA0093.jpg';
import Instrumentation28 from '../../Images/instrumentation/IMG-20230524-WA0094.jpg';
import Instrumentation29 from '../../Images/instrumentation/IMG-20230524-WA0095.jpg';
import Instrumentation30 from '../../Images/instrumentation/IMG-20230524-WA0096.jpg';



import Structural1 from '../../Images/structural/IMG-20230524-WA0050.jpg';
import Structural2 from '../../Images/structural/IMG-20230524-WA0051.jpg';
import Structural3 from '../../Images/structural/IMG-20230524-WA0053.jpg';
import Structural4 from '../../Images/structural/IMG-20230524-WA0054.jpg';
import safety1 from '../../Images/safety/WhatsApp Image 2023-05-24 at 07.49.52.jpg';

import tech1 from '../../Images/Technical tools/WhatsApp Image 2023-05-24 at 17.55.19.jpg';
import tech2 from '../../Images/Technical tools/tech1.jpg';
import tech3 from '../../Images/Technical tools/tech2.jpg';
import tech4 from '../../Images/Technical tools/tech3.jpg';
import tech5 from '../../Images/Technical tools/tech4.jpg';
import tech6 from '../../Images/Technical tools/tech5.jpg';
import tech7 from '../../Images/Technical tools/tech6.jpg';
import tech8 from '../../Images/Technical tools/tech7.jpg';
import tech9 from '../../Images/Technical tools/tech8.jpg';
import tech10 from '../../Images//Technical tools/tech9.jpg';


import Aos from "aos";
import "aos/dist/aos.css";



import { Link } from "react-router-dom";

const safetyEquip = [safety1];
const StructuralEquip = [Structural4, Structural3, Structural2, Structural1];
const  InstrumentationEquip = [Instrumentation1, Instrumentation10, Instrumentation2, Instrumentation3,Instrumentation4, Instrumentation5, Instrumentation6, Instrumentation7, Instrumentation8, Instrumentation9, Instrumentation11, Instrumentation12, Instrumentation13, Instrumentation14,Instrumentation20, Instrumentation15, Instrumentation16, Instrumentation17, Instrumentation18, Instrumentation19, Instrumentation21, Instrumentation22, Instrumentation23, Instrumentation24,Instrumentation30, Instrumentation25, Instrumentation26, Instrumentation27, Instrumentation28, Instrumentation29, ];
const hosePipeEquip  = [hosePipe1, hosePipe2, hosePipe3, hosePipe4, hosePipe5];
const TechEquip = [tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10];
const oilToolsEquip = [
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

    {
        productName: 'Fitting core',
        productImg : oilTools10,

    },
    {
        productName: 'Fitting core',
        productImg : oilTools11,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools12,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools13,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools14,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools15,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools16,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools17,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools18,
        
    },
    {
        productName: 'Fitting core',
        productImg : oilTools19,
        
    },


]


const OilTools = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <div data-aos='fade-up' aos-data-duration='2000'>
            <div className="flex items-start my-[30px] flex-col">
            <h1 className="uppercase  font-bold text-[20px] text-slate-900">Oil/Gas Tools</h1>
<span className="bg-pink-500 h-[5px] rounded-[100%] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-5">
{
    oilToolsEquip.map(tools => {
        return(
            <div data-aos='fade-up' aos-data-duration='2000' className="shadow-2xl rounded  max-w-[350px] max-h-[250px]  ">
             <a data-aos='fade-up' aos-data-duration='2000' href={tools.productImg}>    <img src={tools.productImg} className="rounded h-full w-full" alt="" /> </a>
                
            </div>
        )
    })
}
</div>
        </div>
    )
}



const HosePipe = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <div data-aos='fade-up' aos-data-duration='2000'>
            <div className="flex items-start my-[30px] flex-col">
            <h1 className="uppercase  font-bold text-[20px] text-slate-900">Hose Pipe</h1>
<span className="bg-pink-500 h-[5px] rounded-[100%] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-5">
{
    hosePipeEquip.map(tools => {
        return(
            <div data-aos='fade-up' aos-data-duration='2000' className="shadow-2xl rounded  max-w-[350px] max-h-[250px]  ">
             <a data-aos='fade-up' aos-data-duration='2000' href={tools}>    <img src={tools} className="rounded h-full w-full" alt="" /> </a>
                
            </div>
        )
    })
}
</div>
        </div>
    )
}

/*
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
}*/

const Instrumentation = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <div data-aos='fade-up' aos-data-duration='2000'>
            <div className="flex items-start my-[30px] flex-col">
            <h1 className="uppercase  font-bold text-[20px] text-slate-900">Instrumentation/stainless fittings</h1>
<span className="bg-pink-500 h-[5px] rounded-[100%] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-5">
{
    InstrumentationEquip.map(tools => {
        return(
            <div data-aos='fade-up' aos-data-duration='2000' className="shadow-2xl rounded  max-w-[350px] max-h-[250px]  ">
             <a data-aos='fade-up' aos-data-duration='2000' href={tools}>    <img src={tools} className="rounded h-full w-full" alt="" /> </a>
                
            </div>
        )
    })
}
</div>
        </div>
    )
}

const Structural = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <div data-aos='fade-up' aos-data-duration='2000'>
            <div className="flex items-start my-[30px] flex-col">
            <h1 className="uppercase  font-bold text-[20px] text-slate-900">Structural Material</h1>
<span className="bg-pink-500 h-[5px] rounded-[100%] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-5">
{
    StructuralEquip.map(tools => {
        return(
            <div data-aos='fade-up' aos-data-duration='2000' className="shadow-2xl rounded  max-w-[350px] max-h-[250px]  ">
             <a data-aos='fade-up' aos-data-duration='2000' href={tools}>    <img src={tools} className="rounded h-full w-full" alt="" /> </a>
                
            </div>
        )
    })
}
</div>
        </div>
    )
}

const SafetyFab = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <div data-aos='fade-up' aos-data-duration='2000'>
            <div className="flex items-start my-[30px] flex-col">
            <h1 className="uppercase  font-bold text-[20px] text-slate-900">Safety Equipments</h1>
<span className="bg-pink-500 h-[5px] rounded-[100%] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-5">
{
    safetyEquip.map(tools => {
        return(
            <div data-aos='fade-up' aos-data-duration='2000' className="shadow-2xl rounded  max-w-[350px] max-h-[250px]  ">
             <a data-aos='fade-up' aos-data-duration='2000' href={tools}>    <img src={tools} className="rounded h-full w-full" alt="" /> </a>
                
            </div>
        )
    })
}
</div>
        </div>
    )
}


const TechnicalTools = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <div data-aos='fade-up' aos-data-duration='2000'>
            <div className="flex items-start my-[30px] flex-col">
            <h1 className="uppercase  font-bold text-[20px] text-slate-900">Technical Tools</h1>
<span className="bg-pink-500 h-[5px] rounded-[100%] w-[100px]"></span>
            </div>
            <div className="grid grid-cols-2 gap-5  md:grid-cols-3 lg:grid-cols-5">
{
    TechEquip.map(tools => {
        return(
            <div data-aos='fade-up' aos-data-duration='2000' className="shadow-2xl rounded  max-w-[350px] max-h-[250px]  ">
             <a data-aos='fade-up' aos-data-duration='2000' href={tools}>    <img src={tools} className="rounded h-full w-full" alt="" /> </a>
                
            </div>
        )
    })
}
</div>
        </div>
    )
}






export const OurProducts = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    return(
        <div className="bg-gradient-to-b shadow-2xl   items-center justify-around  md:flex-row px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 rounded-t-[50px]  to-slate-50">
          <div data-aos='fade-up' aos-data-duration='2000' className="flex flex-col">
            <h1 className="uppercase font-myfont text-[30px] text-slate-900">Our products</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
<p className="md:text-[20px] text-[15px] my-[20px] max-w-[700px] text-slate-700 ">Quality is at the core of everything we do. We partner with renowned manufacturers and suppliers to ensure that our customers receive products of exceptional quality. We rigorously test and inspect each tool to guarantee its reliability, durability, and compliance with industry standards.</p>
            </div>


            <div className="my-[50px] flex-col justify-center gap-5">
            <OilTools/>
            <HosePipe/>
         <TechnicalTools/>
            <Instrumentation/>
            <Structural/>
            <SafetyFab/>
            </div>
        </div>
    )
}