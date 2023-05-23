import React from "react";
import client1 from '../../Images/client-1.jpg';
import client2 from '../../Images/client-2.jpg';
import client3 from '../../Images/client-3.jpg';
import client4 from '../../Images/client-4.jpg';



export const OurClient = () => {

    const clientLogo = [client1, client2, client3, client4]

    return(
        <div className="py-[50px] flex rounded-t-[50px] bg-slate-700 mt-[-50px] flex-row justify-center p-[20px] ">
          <div>
          <h1 className="uppercase text-center my-[40px] font-myfont text-[20px] text-slate-50  md:text-[40px] ">Our Clients</h1>

          <div className="grid grid-cols-2 gap-5">
           {
            clientLogo.map(cli => {
                return(
                    <img src={cli} alt="" className="rounded shadow-2xl" />
                )
            })
           }
          </div>
          </div>
        </div>
    )
}