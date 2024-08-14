import Link from "next/link";
import Image from "next/image";
import {MdElectricBolt} from "react-icons/md";
import React from "react";

export default function Exhero(){
    return (


        <section className="bg-red-500 sm:pb-16 lg:pb-20 xl:pb-24 w-full z-50">
            <div className='flex items-center justify-center space-x-1 mb-4 pt-10'>
                 <span>
                 <MdElectricBolt className='w-8 h-8 text-red-900 rounded-full bg-amber-400 p-[2px]'/>
                </span>
                <span className='text-3xl text-amber-400
                         font-bold font-serif leading-none'>
                  ElectricJay
                 </span>
            </div>

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-10 w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full flex flex-col">



                    <div className={'max-w-md flex flex-col bg-white rounded-2xl p-4'}>
                        <span className="text-gray-700 font-bold pt-6 text-[1.7rem]">Expert Electrical Services</span>
                        <p
                            className="text-[1rem] max-w-md font-medium tracking-widest text-gray-700 uppercase mt-4">

                            Reliable solutions for electrical installations or repairs.</p>

                        <p className="flex items-center justify-center max-w-md mt-4 text-[1.5rem] font-medium text-green-900 sm:mt-8">Safety,
                            Efficiency, And Quality – My commitment to you.
                            Trusted Electrician Powering Your Home and Business .
                        </p>
                    </div>

                    <div className="">

                    <Link href="/services" title=""
                              className="mt-8 inline-flex items-center justify-center px-6 py-2 max-w-sm text-base font-normal text-white bg-amber-400 border border-transparent rounded-full"
                              role="button"> Services
                        </Link>
                    </div>

                    <div>

                    </div>
                </div>

                <div className="md:w-1/2 w-full h-auto rounded-t-2xl">
                    <Image className=""
                           src="/electric1.jpg" width={600} height={600}
                           alt=""/>
                </div>

            </div>
        </section>

    )
}
