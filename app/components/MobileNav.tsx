"use client";
import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {navItems} from "@/app/constants/constants";

import Link from "next/link";

export default function MobileNav() {

    const [open, setOpen] = useState(false);

    return (
        <section className="h-screen  flex  min-h-screen w-full justify-center md:hidden">

            <div className="w-full h-full bg-red-500">
                <section className="flex justify-end  onClick={()=> setOpen(true)}">
                    {!open ? (
                        <AiOutlineClose className="cursor-pointer text-4xl"/>
                    ) : (
                        <GiHamburgerMenu className="cursor-pointer text-4xl"/>
                    )}
                </section>
                <section>
                    { open && (
                        <div className='text-white absolute left-0 top-20 w-full
                h-[calc(100vh - 64px)] flex flex-col gap-8 items-center
                justify-center text-3xl z-50 font-serif bg-center
                bg-no-repeat bg-gray-600 bg-blend-multiply'
                             style={{backgroundImage: "url('/control2.jpg')"}}>

                            {navItems.map((item, index) =>
                                (<Link onClick={() => setOpen(false)} href={item.link} key={index}>
             <span className='text-white hover:text-orange-300 rounded-lg
                          text-2xl duration-300 ease-in-out'>
            <div className='flex items-center justify-center mb-2 pt-20 gap-2'>
                   {item.label}{item.icon}
            </div>
            </span>
                                    </Link>
                                ))}
                        </div>)}


                </section>

                <section className="flex flex-col gap-4 mt-4 items-center">
                    <button
                        className="w-fit rounded-xl border-2 border-neutral-400 px-4 py-2 bg-blue-600 text-slate-100 transition-all hover:border-black hover:text-yellow-200">
                        Call us on: 07686 787 677
                    </button>
                    <button
                        className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 bg-red-600 text-slate-100 transition-all hover:border-black hover:text-yellow-200">
                        Contact us
                    </button>
                </section>
            </div>
        </section>
    );
}


