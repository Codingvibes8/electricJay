import {FaSquareFacebook, FaSquareInstagram, FaSquareWhatsapp, FaXTwitter} from "react-icons/fa6";
import React from "react";


export const navItems = [
    {
        label: "Home",
        link: "/",

    },
    {
        label: "About",
        link: "/",

    },
    {
        label: "Services",
        link: "/services",
        children: [
            {
                id:1,
                label: "Residential Electrical Repairs",
                link: "/services/patTest",

            },
            {
                id:2,
                label: "Commercial  Electrical Repairs",
                link: "/services/ElectricalSafetyCertificates",

            },

            {
                id:3,
                label: "Outdoor Lighting and Heating",
                link: "/services/OutdoorLightingAndHeating",

            },

            {
                id:4,
                label: "Electric Vehicle Charging Installation",
                link: "/services/ElectricVehicleChargingInstallation",


            },
            {
                id:5,
                label: "Air Conditioning Installation & Services",
                link: "/services/AirConServices",

            },
            {
                id:6,
                label: "Flood damage",
                link: "/services//FloodDamage",

            },
            {
                id:7,
                label: "Contact us",

                link: "/contact",
            }
        ]
    },
    {
        label: "Contact",
        link: "/",

    },


];


export const servicePageItems=[

    {
        id:1,
        title:'Electrical Safety Certificates',
        url:'/services/ElectricalSafetyCertificates',
    },
    {
        id:2,
        title:'Outdoor Lighting and Heating',
        url:'/services/OutdoorLightingAndHeating',
    },
    {
        id:3,
        title:'PAT Testing',
        url:'/services/patTest',
    },
    {
        id:4,
        title:'Electric Vehicle Charging Installation',
        url:'/services/ElectricVehicleChargingInstallation',
    },
    {
        id:5,
        title:'AirConServices',
        url:'/services/AirConServices',
    },
    {
        id:6,
        title:'Flood Damage',
        url:'/services/FloodDamage',
    }
]


export const socialIcons =[
        {id:1,
        icon: <FaSquareWhatsapp
            className='text-red-700 text-xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/>
        },
        {id:2,
         icon: <FaSquareFacebook
        className='text-red-700 text-xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/>
        },
       {id:3,
        icon:<FaXTwitter
        className='text-red-700 text-xl rounded-xl border-2 transition-all  hover:translate-y-1.5 duration-500 hover:text-blue-800'/>
       },
       {id:4,
       icon:<FaSquareInstagram
        className='text-red-700 text-xl  rounded-xl border-2 transition-all hover:translate-y-1.5 duration-500 hover:text-blue-800'/>
       }
]

