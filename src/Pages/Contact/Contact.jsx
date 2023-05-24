import React from "react";
import { useRef, useEffect } from "react";
import {BiCurrentLocation, BiPhoneCall, } from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";

export const ContactUs = () => {


    const form = useRef();
    const sendEmail = (e) => {
     e.preventDefault();
      emailjs.sendForm('service_2ijos78', 'template_yocf07d', form.current, 'TN_LogzUsxIiZdUEb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return(
        <div className="min-h-[100vh] pt-[150px] px-[20px] py-[50px] ">
            <div className="flex flex-col">
            <h1 className="uppercase font-myfont text-[30px] text-slate-900">Contact us</h1>
<span className="bg-pink-500 h-[10px] w-[100px]"></span>
            </div>
            
        <div data-aos='fade-up' aos-data-duration='2000' className="my-[50px]  flex md:flex-row flex-col  gap-0">
        <div className="flex flex-col py-[50px] px-[20px] rounded  bg-slate-900 gap-2">
         <p className="flex flex-row items-center  gap-3 my-2"><span className=" p-2 rounded-full font-bold"><BiCurrentLocation className="text-[30px] text-slate-50  " /></span> <span className="text-slate-300 font-bold capitalize text-[15px] ">132/148 ABA express way Porthacourt Nigeria</span></p>
         <p><a href="tel:+2347068622370" className="flex flex-row items-center gap-3 my-2"><span className=" p-2 rounded-full text-slate-50 font-bold"><BiPhoneCall className="text-[30px]  "/></span> <span className="text-slate-300 font-bold text-[17px] ">+234 706 8622 370</span></a></p>
         <p><a href="mailto:lorddube@gmail.com" className="flex flex-row items-center gap-3 my-2"><span className=" p-2 rounded-full font-bold"><HiOutlineMail className="text-[25px] text-slate-50  "/></span> <span className="text-slate-300 font-bold text-[15px] ">lorddube@gmail.com</span></a></p>
       </div>
         
          <iframe className="md:max-w-[700px]  rounded w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7495896853366!2d7.007749473817494!3d4.813004040676176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cc2ba5c89d31%3A0x5b47ec7122ab5d27!2s132%2C%20148%20Port%20Harcourt%20-%20Aba%20Expy%2C%20Rumukalagba%20500101%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1684877524070!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       
          </div>
          <div data-aos='fade-up' aos-data-duration='2000'>
            <h1 className="my-[10px] text-[25px] font-myfont   ">Get In Touch With Us</h1>
                <form action="" ref={form} onSubmit={sendEmail} className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-slate-900 text-[20px] font-fonty " htmlFor="name">Name:</label>
                        <input required className="bg-Tp outline-0 text-white w-full py-[10px] px-[10px] rounded text-[15px] md:text-[20px] " type="text" name="from_name" placeholder="Full Name" id="" />
                    </div>
                    <div>
                        <label className="text-slate-900 text-[20px] font-fonty " htmlFor="email">email:</label>
                        <input required className="bg-Tp outline-0 text-white w-full py-[10px] px-[10px] rounded text-[15px] md:text-[20px] " type="email" name="from_email" placeholder="Email" id="" />
                    </div>
        
                    <div className="md:col-span-2 ">
                        <label className="text-slate-900 text-[20px] font-fonty " htmlFor="message">Message:</label>
                        <textarea required className="bg-Tp outline-0 text-white w-full py-[10px] px-[10px] min-h-[100px] rounded text-[15px] md:text-[20px] " name="message" id=""placeholder="Write Your Message" ></textarea>
                    </div>
                    <button  className=" md:float-right  transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 text-slate-50  w-fit self-start bg-slate-900   text-[20px] md:text-[25px] px-[30px] shadow-2xl  font-fonty py-[5px] rounded hover:bg-slate-400 " type="submit">Send</button>
                </form>
                </div>
        </div>
       
    )
}