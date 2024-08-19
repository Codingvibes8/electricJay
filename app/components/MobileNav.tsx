"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "@/app/constants/constants";
import { SingleNavItem } from "@/app/components/SingleNavItem";

export default function MobileNav() {
    const [isSideMenuOpen, setSideMenu] = useState(false);
    const closeSideMenu = () => setSideMenu(false);
    const openSideMenu = () => setSideMenu(true);

    return (
        <section className="h-[calc(100vh-5rem)] fixed left-0 top-0 flex  min-h-screen w-full justify-center md:hidden z-20">
            <div className="w-full h-full bg-red-500 px-4 py-4">
                <section className="flex justify-end">
                    {isSideMenuOpen ? (
                        <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
                    ) : (
                        <GiHamburgerMenu onClick={openSideMenu} className="cursor-pointer text-4xl" />
                    )}
                </section>
                <div className="flex flex-col text-[1.1rem] text-white gap-2 transition-all">
                    {navItems.map((item, index) => (
                        <SingleNavItem key={index} label={item.label} icon={item.icon} link={item.link}>
                            {item.children}
                        </SingleNavItem>
                    ))}
                </div>
                <section className="flex flex-col gap-4 mt-4 items-center">
                    <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 bg-blue-600 text-slate-100 transition-all hover:border-black hover:text-yellow-200">
                        Call us on: 07686 787 677
                    </button>
                    <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 bg-red-600 text-slate-100 transition-all hover:border-black hover:text-yellow-200">
                        Contact us
                    </button>
                </section>
            </div>
        </section>
    );
}
