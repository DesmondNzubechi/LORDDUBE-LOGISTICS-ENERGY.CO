import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';

export const Navlink = [
    {link: '/', linkName: 'Home'},
    {link: '/service', linkName: 'Services'},
    {link: '/about', linkName: 'About'},
    {link: '/products', linkName: 'Product'},
    {link: '/contact', linkName: 'Contact'},
]

export const DesktopHeader = () => {


  return(
    <div className="hidden md:flex z-[10] flex-row text-slate-50 fixed top-0 w-full left-0 right-0  px-[50px] py-[10px] justify-between bg-Tp">
        <div>
            <div className="text-[25px] relative z-[5] font-myfont uppercase"><h1>lorddube</h1></div>
        </div>
                    <ul className={`flex gap-5  font-fonty  bg-black  transition delay-150 duration-1000 ease-in-out  px-[20px]  flex-row `}>
                        {
                         Navlink.map(links => {
                return(
                        <li >
                            <NavLink  to={links.link} style={({isActive}) => {
return isActive ? {color: 'yellow', fontWeight: 'bold'} : {}
}} className=" text-[22px] " >
                             {links.linkName}
                            </NavLink>
                        </li> )})  }
                        </ul>
    </div>
  )
}