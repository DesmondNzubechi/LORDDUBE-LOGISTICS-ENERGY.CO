import {React, useEffect} from "react";
import serviceBg from '../../Images/saftey.avif';
import oiltools from '../../Images/bg2.avif';
import hosePipe from   '../../Images/hosePipe.avif';
import electical from   '../../Images/electrical.avif';
import fitting from   '../../Images/instrumentation2.avif';
import structuralSteelPlate from   '../../Images/Structural pipe.avif';
import saftey from   '../../Images/saftey.avif';
import Aos from "aos";
import "aos/dist/aos.css";

const  servicesArray = [
    {
        heading: 'Oil Tools',
        description: 'Are you in the oil industry? We offer top-notch oil tools to facilitate smooth extraction processes. Our inventory includes drilling bits, wellhead equipment, downhole tools, and more. With our reliable and efficient tools, you can enhance productivity and streamline your operations.',
        img: oiltools,

    },
    {
        heading: 'Hose Pipe',
        description: 'In need of reliable hose pipes for industrial applications? Look no further. We offer a wide selection of hose pipes suitable for diverse uses. Whether you require hydraulic hoses, chemical hoses, water hoses, or suction hoses, we have got you covered. We also provide customized hose assemblies tailored to your specific requirements.',
        img: hosePipe,

    },
    {
        heading: 'Electrical Equipment',
        description: 'Electrical components play a crucial role in any industry. At Lorddube Logistic Energy, Co, we supply high-quality electrical equipment such as cables, connectors, switches, circuit breakers, transformers, and control panels. Additionally, we offer power distribution solutions to ensure safe and efficient electrical supply.',
        img: electical,

    },
    {
        heading: 'Instrumentation/Stainless Fittings',
        description: 'For accurate measurement and control in various industries, we provide comprehensive instrumentation solutions. Our range includes pressure gauges, temperature sensors, flow meters, level transmitters, and control valves. We also offer a selection of stainless steel fittings, including pipes, tubes, valves, flanges, and connectors.',
        img: fitting,

    },
    {
        heading: 'Structural Steel Plates, Pipe, H-Beam, Angel Iron',
        description: 'If you are involved in construction or infrastructure projects, our structural steel products will meet your needs. We offer a range of structural steel plates, pipes, H-beams, and angel iron. These products are essential for building sturdy structures and ensuring the durability of your projects.',
        img: structuralSteelPlate,

    },
    {
        heading: 'Safety Fabrications & Construction',
        description: 'Safety is paramount in any industry. We provide a comprehensive range of safety fabrications and equipment, including safety barriers, handrails, guardrails, safety nets, and personal protective equipment (PPE). Additionally, our construction services focus on safety, specializing in structural steel fabrication, safety system installation, and industrial facility construction.',
        img: saftey,

    },
]



export const Services = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return(
        <div className="min-h-[100vh] ">
             <div  data-aos='fade-up' aos-data-duration='2000'
        style={{ backgroundImage: `url(${serviceBg})` }}
      className={`min-h-[50vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full bg-center flex items-center after:w-full after:bg-Contact pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div className="relative z-[1] py-[50px] max-w-[700px]">
        <h1 className="font-bold text-slate-50 text-[50px] ">Services</h1>
<p className="text-slate-200 font-fonty text-[17px] ">Welcome to Lorddube Logistics Energy, Co! We are a trusted provider of various products and services to cater to the needs of industries such as oil and gas, construction, and more. Allow me to introduce you to our range of services:</p>
        </div>

      </div>
<div className="px-[30px] py-[50px] ">
<div className="flex flex-col gap-y-[100px]">
{
    servicesArray.map(services => {
        return(
            <div  className="grid md:grid-cols-2 items-center grid-cols-1 gap-4">
     <div data-aos='fade-up' aos-data-duration='2000' className="max-w-[500px]">
        <img src={services.img} className="rounded" alt="" />
     </div>
     <div data-aos='fade-up' aos-data-duration='2000' className="flex flex-col gap-1">
        <h1 className=" font-bold uppercase text-slate-900 text-[15px] md:text-[20px] lg:text-[25px]  ">{services.heading}</h1>
        <p className="text-slate-700 text-[15px] md:text-[17px] lg:text-[20px] font-fonty ">{services.description}</p>
     </div>
    </div>
        )
    })
}
</div>

   
</div>

        </div>
    )
}