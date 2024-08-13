



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
                link: "/services/ResidentialElectricalRepairs",
                icon:SunIcon,
            },
            {
                label: "Commercial  Electrical Repairs",
                link: "/services/CommercialElectricalRepairs",
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
        title:'Residential Electrical Repairs',
        url:'/services/residentialElectricalRepairs',
    },
    {
        id:2,
        title:'CommercialElectricalRepairs',
        url:'/services/CommercialElectricalRepairs',
    },
    {
        id:3,
        title:'Outdoor Lighting and Heating',
        url:'/services/OutdoorLightingAndHeating',
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
    }
]




