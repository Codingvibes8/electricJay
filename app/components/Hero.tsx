
'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {MdOutlineEmail} from "react-icons/md";
import {MdOutlinePhone} from "react-icons/md";




const Hero = ()=> {
    return(
        <section className={'min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 w-screen'}>
          <div className='relative flex flex-col items-center mx-auto lg:flex-row-reverse gap-8'>
            <div className="flex-1 w-full lg:h-auto block mx-auto px-10">
            <Image src="/control2.jpg" width={700} height={700} alt='' className="hidden md:block object-cover"/>
             </div>

            <div  className="max-w-lg bg-white -z-30 md:shadow-lg mx-auto">
            <div className="flex flex-1 flex-col md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Call Electric Jay</h2>
            <p className="mt-4 text-lg">
               For Electrical Repairs,Installations,and Inspections.
                <br/>
                Electric James is a Fully qualified and reliable electrician,
                that delivers electrical services across North West London.
            </p>
                <div className="flex items-center space-x-4 mt-4">
                <MdOutlinePhone className="h-6 w-6 text-blue-900"/>
                 <span className="text-green-900 text-sm">123-456-7890</span>
               </div>
            <div className="flex items-center space-x-4">
                     <MdOutlineEmail className="h-6 w-6 text-blue-900"/>
                     <span className="text-green-900">info@electrijames.com</span>
                 </div>
                 <Link href={'/'} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md flex mb-6 items-center justify-center">
                     services
              </Link>
             </div>
        </div>
    </div>
        </section>
    )}
export default Hero



