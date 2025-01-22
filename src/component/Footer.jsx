import React from 'react'

const Footer = () => {
    return (
        <div className="h-48 rounded-lg m-10 bg-gray-500 flex justify-center items-center flex-col">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
                Special Offer!
            </h1>
            <h5 className="text-white text-center font-bold mt-3 text-base md:text-lg">
                Join any group buy this week and get an additional 5% discount!
            </h5>
        </div>
    )
}

export default Footer
