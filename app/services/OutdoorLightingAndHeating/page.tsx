


import React from 'react';

const OutdoorLightingAndHeating: React.FC = () => {
    return (
        <div className="p-4 md:p-8 lg:p-12">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4">Outdoor Lighting and Heating</h1>
            <p className="text-lg mb-4">
                If you are looking for an electrician to install outdoor lighting in London, Electric James has the
                experience you are looking for.
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4">Outdoor Garden Lighting</h2>
            <p className="text-lg mb-4">
                Electric James has installed external garden lights in the North London area for many satisfied
                customers in a range of properties. These include timed, PIR, photocell sensor or manual:
            </p>
            {/* Add the list of outdoor lightings */}
            <ul className="list-disc pl-5">
                <li className="text-lg">on-site suitability assessment of your property</li>
                <li className="text-lg">installation of your EV charger</li>
                <li className="text-lg">registration of your charger</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4">Security Lights</h2>
            <p className="text-lg mb-6">
                Electric James will carry out security light installation in your home or business. This includes:
            </p>
            {/* Add the list of security lightings */}

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4">Outdoor heating</h2>
            <p className="text-lg mb-6">
                Use your external space all year round with outdoor electric heaters. Electric James will advise and
                install an outdoor heating element safely and securely for your London garden, balcony, terrace or
                patio.
            </p>
            {/* Add a call-to-action section */}
        </div>
    );
};

export default OutdoorLightingAndHeating;

