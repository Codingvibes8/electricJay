



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
                link: "/services/OutdoorLightingandHeating",
                icon:SunIcon,
            },

            {
                label: "Electric Vehicle Charging Installation",
                link: "/services/ElectricVehicleChargingInstallation",
                icon:HomeIcon,

            },
            {
                label: "Air Conditioning Installation & Services",
                link: "/services/AirConditioningInstallation&Services",
                icon:HomeIcon,
            },
            {
                label: "Flood damage",
                link: "/services//floodDamage",
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



