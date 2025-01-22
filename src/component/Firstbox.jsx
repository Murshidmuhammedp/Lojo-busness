import React from 'react';

const Firstbox = () => {
    return (
        <div className="h-96 rounded-sm m-10 bg-gradient-to-r from-blue-500 via-white to-indigo-300 flex justify-center items-center flex-col shadow-lg">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
                Join Our Biggest Group Buy Yet!
            </h1>
            <h5 className="text-gray-700 text-center font-medium mt-3 text-base md:text-lg">
                Save up to <span className="text-indigo-600 font-bold">50%</span> on office furniture
            </h5>
        </div>
    );
};

export default Firstbox;
