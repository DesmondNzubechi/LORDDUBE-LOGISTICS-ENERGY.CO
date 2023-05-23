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

export const MobileHeader = () => {
const [icons, setIcons] = useState({
    hideicon: false,
    showIcon: true,
});
const [sideLink, setSideLink] = useState('left-[-1000px]');


  return(
    <div className="flex md:hidden z-[10] flex-row text-slate-50 fixed top-0 w-full left-0 right-0  px-[20px] py-[10px] justify-between bg-Tp">
        <div>
            <div className="text-[25px] relative z-[5] font-myfont uppercase"><h1>lorddube</h1></div>
        </div>
                    <ul className={`flex gap-5 fixed font-fonty top-0 bottom-0 w-[50%] bg-black ${sideLink} transition delay-150 duration-1000 ease-in-out pt-[100px] px-[20px] flex-col`}>
                        {
                         Navlink.map(links => {
                return(
                        <li >
                            <NavLink  to={links.link} style={({isActive}) => {
return isActive ? {color: 'yellow', fontWeight: 'bold'} : {}
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