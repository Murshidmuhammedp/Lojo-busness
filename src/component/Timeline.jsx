import React, { useState } from 'react';

const Timeline = () => {
    const [selectedDays, setSelectedDays] = useState(7);

    // Sample data for different timelines
    const timelineData = {
        7: {
            name: 'Fans',
            category: 'Electricals',
            subcategory: 'Appliances',
            manufacturer: 'Orient Electric',
            units: 500,
            buyers: 15,
            endDate: '2023-10-07'
        },
        14: {
            name: 'LED Lights',
            category: 'Electricals',
            subcategory: 'Lighting',
            manufacturer: 'Phillips',
            units: 1000,
            buyers: 25,
            endDate: '2023-10-14'
        },
        28: {
            name: 'Air Conditioner',
            category: 'Electricals',
            subcategory: 'Cooling',
            manufacturer: 'Samsung',
            units: 200,
            buyers: 8,
            endDate: '2023-10-28'
        }
    };

    const timelineOptions = [
        { label: '7 Days', value: 7 },
        { label: '14 Days', value: 14 },
        { label: '28 Days', value: 28 }
    ];

    const handleTimelineChange = (days) => {
        setSelectedDays(days);
    };

    const currentProductData = timelineData[selectedDays];

    return (
        <div className=' h-1/2 border-4 rounded-lg m-10'>

            <div className=" p-6">
                <h2 className="text-2xl font-bold mb-6">Featured Products by Timeline</h2>

                <div className="flex mb-6">
                    {timelineOptions.map((option) => (
                        <div
                            key={option.value}
                            className={`flex-1 p-3 text-center border  cursor-pointer transition-colors
              ${selectedDays === option.value
                                    ? 'bg-blue-50 border-blue-200'
                                    : 'bg-white hover:bg-gray-50'}`}
                            onClick={() => handleTimelineChange(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>

                <div className="border-4 rounded-lg p-6 bg-white w-1/2">
                    <div className="flex gap-6">
                        <div className="w-32 h-32 bg-gray-200 rounded-md mt-10"></div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{currentProductData.name}</h3>
                            <div className="space-y-1 text-sm">
                                <div>
                                    <span className="text-gray-600">Category: </span>
                                    <span>{currentProductData.category}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Subcategory: </span>
                                    <span>{currentProductData.subcategory}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Manufacturer: </span>
                                    <span>{currentProductData.manufacturer}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Units: </span>
                                    <span>{currentProductData.units}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Buyers: </span>
                                    <span>{currentProductData.buyers}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">End Date: </span>
                                    <span>{currentProductData.endDate}</span>
                                </div>
                            </div>
                            <button className="mt-4 px-4 py-2 text-sm bg-white border-2 rounded-md hover:bg-gray-50">
                                Join Group
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;