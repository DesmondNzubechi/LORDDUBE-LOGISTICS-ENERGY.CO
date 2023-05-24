import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';
import {IoMdArrowDropdown} from 'react-icons/io';
import logo from '../../Images/logo.png';
export const Navlink = [
    {link: '/', linkName: 'Home'},
    {link: '/service', linkName: 'Services'},
    {link: '/about', linkName: 'About'},
    {link: '/products', linkName: `Products `},
    {link: '/contact', linkName: 'Contact'},
]

export const MobileHeader = () => {
const [icons, setIcons] = useState({
    hideicon: false,
    showIcon: true,
});
const [sideLink, setSideLink] = useState('left-[-1000px]');


  return(
    <div className="flex md:hidden z-[10] flex-row text-slate-50 fixed top-0 w-full left-0 right-0  px-[20px] py-[10px] justify-between bg-Tp">
        <div>
            <div className=" relative z-[5]  max-w-[70px] rounded-[50px]"><img src={logo} alt="Lorddube lorgistic Energy" className="rounded" /></div>
        </div>
       { /*<ul className="absolute w-[60%] left-4 z-[5] top-[305px] shadow-2xl bg-black border-slate-900 border px-[20px] flex flex-col gap-2 py-[20px] rounded ">
            <li><Link className="text-[11px] text-slate-200 font-bold uppercase w-full  ">Oil tools</Link></li>
            <li><Link className="text-[11px] text-slate-200 font-bold uppercase w-full  "> Hose pipe</Link></li>
            <li><Link className="text-[11px] text-slate-200 font-bold uppercase w-full  ">Electrical equipment</Link></li>
            <li><Link className="text-[11px] text-slate-200 font-bold uppercase w-full  ">Instrumentation/ stainless fittings</Link></li>
            <li><Link className="text-[11px] text-slate-200 font-bold uppercase w-full  ">Structural steel plates, pipe, H- Beam, Ang</Link></li>
            <li><Link className="text-[11px] text-slate-200 font-bold uppercase w-full  ">Safety fabrications & Construction</Link></li>
  </ul>*/}
                    <ul className={`flex gap-5 fixed font-fonty top-0 bottom-0 w-[50%] bg-black ${sideLink} transition delay-150 duration-1000 ease-in-out pt-[100px] px-[20px] flex-col`}>
                        {
                         Navlink.map(links => {
                return(
                        <li  onClick={() => {
                            setIcons({
                                hideicon: false,
                                showIcon: true,
                            });
                            setSideLink('left-[-1000px]')
                        }} >
                            <NavLink  to={links.link} style={({isActive}) => {
return isActive ? {color: 'pink', fontWeight: 'bold'} : {}
}} className="xl:text-[17px] text-[25px] " >
                             {links.linkName}
                            </NavLink>
                        </li> )})  }
                        </ul>
        <div className="flex flex-row items-center">
        { icons.showIcon &&  <FaBars onClick={() => {
            setIcons({
                hideicon: true,
                showIcon: false,
            });
            setSideLink('left-0')
        }} className="text-[30px] text-slate-50 "/>}
       { icons.hideicon &&   <HiOutlineXMark onClick={() => {
            setIcons({
                hideicon: false,
                showIcon: true,
            });
            setSideLink('left-[-1000px]')
        }} className="text-[30px] text-slate-50 "/>}
        </div>
    </div>
  )
}