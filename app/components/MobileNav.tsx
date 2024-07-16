"use client"
import {AiOutlineClose} from "react-icons/ai";
import {navItems} from "@/app/constants/constants";
import React,{useState} from "react";
import {SingleNavItem} from "@/app/components/SingleNavItem";



export default function MobileNav() {
    const [isSideMenuOpen, setSideMenue] = useState(false);

    const closeSideMenu=()=>{setSideMenue(false)}



    return (
        <section className="fixed left-0 top-0 flex h-full min-h-screen w-full
    justify-center md:hidden">
            <div className=" h-full w-full bg-white px-4 py-4">
                <section className="flex justify-end">
                    <AiOutlineClose
                        onClick={closeSideMenu}
                        className="cursor-pointer text-4xl "
                    />
                </section>
                <div className=" flex flex-col text-[1.1rem] text-[#f21818]  gap-2 transition-all">
                    {navItems.map((d, i) => (
                        <SingleNavItem
                            key={i}
                            label={d.label}
                            icon={d.icon}
                            link={d.link}
                        >
                            {d.children}
                        </SingleNavItem>
                    ))}
                </div>

                <section className="flex flex-col gap-8 mt-4 items-center">
                    {/*socialIcons*/}
                    <button className="w-full max-w-[200px] rounded-xl border-2
                       border-neutral-400 px-4 py-2 bg-blue-600 text-slate-100
                transition-all hover:border-black hover:text-yellow-200">
                        call us on :O7686 787 677
                    </button>

                    <button className='w-full max-w-[200px] rounded-xl border-2
                       border-neutral-400 px-4 py-2 bg-red-600 text-slate-100
                transition-all hover:border-black hover:text-yellow-200'>
                        contact us
                    </button>
                </section>
            </div>
        </section>
    );
}