
'use client';
import React from 'react'
import Image from 'next/image'

import {MdOutlineEmail} from "react-icons/md";
import {MdOutlinePhone} from "react-icons/md";

import Logo from '@/app/components/Logo'

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row min-h-[600px] bg-gray-700 pt-10 md:pt-20 pb-10 px-10">
            {/* First Column */}
            <div className="md:w-1/2 p-8">


                <div>
                    <Logo />

                </div>

                <div className={'flex flex-col space-y-1 max-w-md items-center justify-center'}>
                    <h2 className="text-white  text-[15px] items-center justify-center mb-4">
                        North West London Registered Electrician
                    </h2>
                    <p className="text-white  mb-4 text-[16px] flex font-bold  items-center justify-center tracking-wider max-prose">
                        Provides reliable electrical services, including repairs, installations, and
                        inspections
                    </p>

                    <p className="text-white  mb-4 text-[16px] flex font-bold  items-center justify-center tracking-wider max-prose">
                        Provides reliable electrical services, including repairs, installations, and
                        inspections
                    </p>
                    <p className="text-white  mb-4 text-[16px] flex font-bold  items-center justify-center tracking-wider max-prose">
                        Provides reliable electrical services, including repairs, installations, and
                        inspections
                    </p>
                </div>

                <div className="flex items-center space-x-4 mt-4">
                    <MdOutlinePhone className="h-6 w-6 text-white"/>
                    <span className="text-white text-sm">123-456-7890</span>
                </div>
                <div className="flex items-center space-x-4">
                    <MdOutlineEmail className="h-6 w-6 text-white"/>
                    <span className="text-white">info@electrijames.com</span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md flex  items-center justify-center">
                    services
                </button>
            </div>

            {/* Second Column */}
            <div className="md:w-1/2 w-full h-full md:h-1/2">
                    <Image src='/control2.jpg' width={600} height={600} alt="Electric James logo"
                       className="object-cover w-full h-full shrink-0 rounded-3xl" sizes="100vw"
                           />
            </div>
        </div>
    );
};

export default HeroSection;








