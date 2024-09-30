"use client";

import Link from "next/link";
import React, { useState} from "react";

import {navItems, socialIcons} from "@/app/constants/constants";
import MobileNav from './MobileNav'

import { FaSquareFacebook,
          FaXTwitter,
         FaSquareInstagram,
         FaSquareWhatsapp,} from "react-icons/fa6"

import { IoIosArrowDown } from "react-icons/io";


import {MdElectricBolt} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";



type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    icon?:iconType;

}


export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5
         text-sm h-20 shadow-md bg-gradient-to-r from-red-700 to-gray-300">
                {/* left side content  */}
            <div className="flex items-center gap-10">

                        {/* logo */}

                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center space-x-1'>
                        <span>
                    <MdElectricBolt className='w-6 h-6 text-red-900 rounded-full bg-white  p-[2px]'/>
                    </span>
                        <span className='text-white text-xl
                             font-bold font-serif leading-none'>
                    Electric James
                  </span>
                    </div>
                    <p className='text-white text-[12px] font-serif font-medium'>
                        Good,Honest,Reliable Electrician
                    </p>
                </div>


                       {/* navlinkMd */}
                <div className={'hidden md:flex items-center justify-center gap-4 text-white hover:font-bold hover:text-slate-200 text-[16px]'}>
                {navItems.map((items,index) => (
                       <Link key={index} href={items.link}>
                  {items.label}
                      </Link>
                ))}
                 </div>
                          {/* MobileView */}
                {/*//<MobileNav />*/}

            </div>

            <div>

        </div>

                      {/*} right side content */}
            <div className=" hidden md:flex flex-col justify-center items-center gap-2">
                <div className={'flex items-center justify-center gap-4'}>
                    {socialIcons.map((socialIcon) => (
                        <div key={socialIcon.id}>
                            <span>{socialIcon.icon} </span>
                        </div>
                    ))}

                </div>
                <div>
                <span className={'text-sm'}> Call: 07877 988-885 or 0209 789-654 </span>
                </div>
            </div>
        </nav>


    );
}












// import Link from "next/link";
// import { navBarLinks, socials } from "@/data/constants";
// import NavMenuBtn from "@/components/NavMenuBtn";





// const NavbarLogic = () => {
//
//     return (
//         <nav className="bg-red-800 w-full sticky top-0 left-0 z-50">
//             <div className="h-20 text-white p-4 w-full mx-auto flex items-center justify-between md:h-24 lg:px-20 xl:px-40">
//                 {/* logo */}
//                 <Link href="/"> <span className="flex items-center justify-start font-bold font-serif">
//             ElectricJay </span>
//                 </Link>
//                 {/* navLinks */}
//                 <div className="hidden md:flex gap-4 items-center justify-center">
//                     {navBarLinks.map((item) =>
//                         ( <>
//                                 <Link href={item.path} key={item.title}>
//                                     <span className=''>{item.title}</span>
//                                 </Link>
//                                 {item.subServices && item.subServices.map((subItem, id) =>
//                                     <Link href={subItem.path} key={id}>
//                                         <span className=''>{subItem.title}</span>
//                                     </Link> )}
//                             </>
//                         ))}
//                 </div>
//                 {/* socialLinks */}
//                 <div className="md:flex justify-center items-center hidden">
//                     {socials.map((item) =>
//                         ( <Link href={item.link} key={item.name}>
//                             <span className="">{item.icon}</span>
//                         </Link> ))}
//                     <div className="flex justify-center items-center text-sm">
//                 <span>
//                     Free quotes: 0786 498-959 or <br /> 0209 876-567
//                 </span>
//                     </div>
//                 </div>
//                 {/* MOBILE MENU */}
//                 <div className="flex items-center justify-end text-yellow-100 md:hidden">
//                     <NavMenuBtn />
//                 </div>
//             </div>
//         </nav> );
// };
// export default NavbarLogic;










