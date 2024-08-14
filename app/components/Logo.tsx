import {MdElectricBolt} from "react-icons/md";
import React from "react";

const  Logo = ()=>{
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center space-x-1 mb-2'>
                 <span>
                 <MdElectricBolt className='w-8 h-8 text-red-900 rounded-full bg-green-500  p-[2px]'/>
                </span>
                <span className='text-white text-5xl
                         font-bold font-serif leading-none'>
                  ElectricJay
                 </span>
            </div>
        </div>
    )
}
export default Logo