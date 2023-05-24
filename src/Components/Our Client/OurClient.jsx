import {React, useEffect} from "react";
import client1 from '../../Images/client-1.jpg';
import client2 from '../../Images/client-2.jpg';
import client3 from '../../Images/client-5.jpg';
import client4 from '../../Images/client-6.jpg';
import client5 from '../../Images/client-7.png';
import client6 from '../../Images/client-8.png';
import client7 from '../../Images/client-9.png';
import Aos from "aos";
import "aos/dist/aos.css";



export const OurClient = () => {

    const clientLogo = [client1, client2, client3, client4, client5, client6, client7];

    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    return(
        <div data-aos='fade-up' aos-data-duration='2000' className="bg-slate-50 py-[20px] ">
        <div className="py-[50px]  mb-[20px] shadow-2xl  flex rounded-[20px] bg-Tp my-[20px] mt-[-50px] flex-row justify-center p-[20px] ">
          <div>
          <h1 className="uppercase text-center my-[40px] font-myfont text-[20px] text-slate-50  md:text-[40px] ">Our Clients</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
           {
            clientLogo.map(cli => {
                return(
                    <div className="max-w-[250px]">
<img src={cli} alt="" className="rounded bg-white p-2 shadow-2xl" />
                    </div>
            
                )
            })
           }
          </div>
          </div>
        </div>
        </div>
    )
}