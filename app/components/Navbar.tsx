"use client";

import Link from "next/link";
import React, { useState} from "react";

import {navItems} from "@/app/constants/constants";

import { FaPhoneSquare } from "react-icons/fa";
import { FaSquareFacebook,
          FaXTwitter,
         FaSquareInstagram,
         FaSquareWhatsapp,}
    from "react-icons/fa6";

import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {MdElectricBolt} from "react-icons/md";



type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];

}


export default function Navbar() {

    const [isSideMenuOpen, setSideMenue] = useState(false);
    function openSideMenu() {
        setSideMenue(true);
    }
    function closeSideMenu() {
        setSideMenue(false);
    }

    return (
        <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm h-20 bg-slate-300">
            {/* left side  */}
            <section className="flex items-center gap-10">
                {/* logo */}
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center space-x-1'>
                        <span>
                    <MdElectricBolt className='w-8 h-8 text-red-900 rounded-full bg-green-500  p-[2px]'/>
                    </span>
                        <span className='text-red-600 text-2xl
                             font-bold font-serif leading-none'>
                    Electric James
                  </span>
                    </div>
                    <p className='text-gray-700 text-[1rem] font-serif font-medium'>
                        Good,Honest,Reliable Electrician
                    </p>
                </div>


                {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu}/>}
                <div className="hidden md:flex items-center gap-4 transition-all">

                    {navItems.map((d, i) => (
                        <Link
                            key={i}
                            href={d.link ?? "#"}
                            className="relative group  px-2 py-3 transition-all "
                        >
                            <p className="flex cursor-pointer items-center gap-2
              text-red-500 font-semibold group-hover:text-black text-[1.2rem]">
                                <span>{d.label}</span>
                                {d.children && (
                                    <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                                )}
                            </p>

                            {/* dropdown */}
                            {d.children && (
                                <div className="absolute left-0 top-10 hidden w-auto
                 flex-col gap-1 rounded-lg bg-white py-3
                  shadow-md transition-all group-hover:flex z-50">
                                    {d.children.map((ch, i) => (
                                        <Link
                                            key={i}
                                            href={ch.link ?? "#"}
                                            className=" flex cursor-pointer items-center py-1 pl-6 pr-8
                       text-neutral-400 hover:text-black text-2xl"
                                        >

                                            {/* item */}
                                            <span className="whitespace-nowrap   pl-3 ">
                                        {ch.label}
                                        </span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
                {/* navItems */}
            </section>

            {/* right side data */}
            <section className=" hidden md:flex items-center gap-6">

                <div className={'flex items-center justify-center gap-4'}>
                    <span> <FaSquareWhatsapp className='text-red-700 text-3xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>
                    <span> <FaSquareFacebook className='text-red-700 text-3xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>
                    <span> <FaXTwitter className='text-red-700 text-3xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>
                    <span> <FaSquareInstagram className='text-red-700 text-3xl  rounded-xl border-2 transition-all hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>


                </div>


            </section>

            <FiMenu
                onClick={openSideMenu}
                className="cursor-pointer text-4xl md:hidden"
            />
        </div>
    );
}




function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
    return (
        <section className="fixed left-0 top-0 flex h-full min-h-screen w-full
    justify-center md:hidden bg-cover bg-no-repeat bg-center bg-fixed z-50 bg-green-3s00"
             >
            
            <div className=" h-full w-full bg-white px-4 py-4">
                <section className="flex justify-end">
                    <AiOutlineClose
                        onClick={closeSideMenu}
                        className="cursor-pointer text-4xl "
                    />
                </section>
                <div className='flex items-center justify-center'>
                    {/* logo */}
                    <div className='flex flex-col items-center justify-center mb-6'>
                  <span className='text-red-600 text-3xl
         font-bold font-serif leading-none'>
                    Electric James
                  </span>
                        <p className='text-gray-700 text-[1.2rem] font-serif font-medium'>
                            Good,Honest,Reliable Electrician
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-[1.5rem] text-gray-700 mb-6 gap-2 transition-all duration-500">
                    {navItems.map((d, i) => (
                        <SingleNavItem
                            key={i}
                            label={d.label}
                            link={d.link}
                        >
                            {d.children}
                        </SingleNavItem>
                    ))}
                </div>

                <section className="flex flex-col gap-4 mt-4 items-center justify-center">
                    {/*socialicons*/}
                    <div className={'flex items-center justify-center gap-4'}>
                        <span> <FaSquareWhatsapp
                            className='text-red-700 text-3xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>
                        <span> <FaSquareFacebook
                            className='text-red-700 text-3xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>
                        <span> <FaXTwitter
                            className='text-red-700 text-3xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>
                        <span> <FaSquareInstagram
                            className='text-red-700 text-3xl  rounded-xl border-2 transition-all hover:translate-y-1.5 duration-500 hover:text-blue-800'/></span>


                    </div>

                    <div className='flex items-center justify-center'>
                <span>
                    <FaPhoneSquare
                        className='rounded-xl text-red-700 border-2 text-3xl transition-all hover:border-black'/>
                     </span>
                        <span className={'text-lg text-red-700 font-bold'}>:0796577888<br/>0208765785</span>


                    </div>
                </section>
            </div>
        </section>
    );
}

function SingleNavItem(d: NavItem) {

    const [isItemOpen, setItem] = useState(false);

    function toggleItem() {
        return setItem(!isItemOpen);
    }

    return (
        <Link

            onClick={toggleItem}
            href={d.link ?? "#"}
            className="relative px-2 py-3 transition-all "
        >
            <p className="flex cursor-pointer items-center gap-2
       text-neutral-400 group-hover:text-black">
                <span>{d.label}</span>
                {d.children && (
                    // rotate-180
                    <IoIosArrowDown
                        className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
                    />
                )}
            </p>

            {/* dropdown */}
            {isItemOpen && d.children && (
                <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3
          transition-all flex ">
                    {d.children.map((ch, i) => (
                        <Link
                            key={i}
                            href={ch.link ?? "#"}
                            className="flex cursor-pointer items-center
                py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                        >

                            {/* item */}
                            <span className="whitespace-nowrap pl-3 ">
                {ch.label}
              </span>
                        </Link>
                    ))}
                </div>
            )}
        </Link>
    )}









