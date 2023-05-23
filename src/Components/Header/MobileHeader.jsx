import React from "react";
import { NavLink } from "react-router-dom";

export const Navlink = [
    {link: '/', linkName: 'Home'},
    {link: '/service', linkName: 'Services'},
    {link: '/about', linkName: 'About'},
    {link: '/products', linkName: 'Product'},
    {link: '/contact', linkName: 'Contact'},
]

export const MobileHeader = () => {
  return(
    <div>
        <div>
            <div><h1>lorddube</h1></div>
        </div>
        {
            Navlink.map(links => {
                return(
                    <ul>
                        <li>
                            <NavLink to={links.link} style={({isActive}) => {
return isActive ? {borderBottom : '5px solid white'} : {}
}} className="xl:text-[17px] text-[14px] " >
                             {links.linkName}
                            </NavLink>
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}