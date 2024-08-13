import React, {useState} from "react";
import Link from "next/link";
import {IoIosArrowDown} from "react-icons/io";
import navItems from '@/app/constants/constants'

export function SingleNavItem(d: navItem) {


    
    const [isItemOpen, setItem] = useState(false);
const toggleItem = ()=>{
    return(
        setItem(true)
    )
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
                            {/* image */}
                            {ch.icon &&
                                <span className="h-6 w-6">
                    <ch.icon />
                  </span>}
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