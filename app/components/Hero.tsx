

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {MdOutlineEmail} from "react-icons/md";
import {MdOutlinePhone} from "react-icons/md";





const Hero = ()=> {
    return(
        <section className={'h-500px] flex flex-col md:flex-row items-center justify-center gap-8 w-full z-10'}>
            <div className=' relative flex flex-col items-center mx-auto lg:flex-row-reverse gap-8  py-10'>

                <div className="w-[400px] h-auto bg-gray-900 border-8 border-amber-300 p-1 rounded-t-2xl" >
                    <Image src="/tools1.jpg"
                           width={400} height={400}
                           className="object-cover"/>
                </div>

                <div className="max-w-lg bg-white -z-30 md:shadow-lg mx-auto px-4">
                    <h2 className="text-3xl text-center capitalize text-green-800 font-bold">Expert Electrical Services</h2>
                    <div className="flex flex-col items-center justify-center">

                        <ul className={'max-w-lg font-medium mx-auto flex flex-col items-center justify-center'}>
                            <li className="mt-2 text-[1.2rem] flex items-center justify-center">

                                Electric James is a Fully qualified and reliable electrician,
                                that delivers electrical services across North West London.
                            </li>

                        <li className="
                            text-[1.1rem] pt-2 font-semibold flex items-center justify-center">Reliable solutions for electrical
                                installations or repairs.
                            </li>

                            <li className="text-[1.1rem] flex font-semibold items-center  justify-center">Safety, Efficiency, And Quality – My
                                commitment to you!
                            </li>
                        </ul>
                        <div className="flex items-center space-x-4 mt-4">
                            <MdOutlinePhone className="h-6 w-6 text-blue-900"/>
                            <span className="text-green-900 text-sm">123-456-7890</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MdOutlineEmail className="h-6 w-6 text-blue-900"/>
                            <span className="text-green-900">info@electrijames.com</span>
                        </div>
                        <Link href={'/'}
                              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md flex mb-6 items-center justify-center">
                            services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero

