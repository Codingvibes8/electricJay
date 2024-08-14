



import {HomeIcon, SunIcon} from "@heroicons/react/24/outline";

export const navItems = [
    {
        label: "Home",
        link: "/",
        icon:HomeIcon,
    },
    {
        label: "Services",
        link: "/services",
        children: [
            {
                label: "Residential Electrical Repairs",
                link: "/services/patTest",
                icon:SunIcon,
            },
            {
                label: "Commercial  Electrical Repairs",
                link: "/services/ElectricalSafetyCertificates",
                icon:SunIcon,
            },

            {
                label: "Outdoor Lighting and Heating",
                link: "/services/OutdoorLightingAndHeating",
                icon:SunIcon,
            },

            {
                label: "Electric Vehicle Charging Installation",
                link: "/services/ElectricVehicleChargingInstallation",
                icon:HomeIcon,

            },
            {
                label: "Air Conditioning Installation & Services",
                link: "/services/AirConServices",
                icon:HomeIcon,
            },
            {
                label: "Flood damage",
                link: "/services//FloodDamage",
                icon:SunIcon,
            },
            {
                label: "Contact us",
                icon:HomeIcon,
                link: "/contact",
            }
        ]
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
        id:5,
        title:'Flood Damage',
        url:'/services/FloodDamage',
    }
]




