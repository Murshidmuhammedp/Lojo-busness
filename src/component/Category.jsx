import React from 'react'

const Category = () => {

    const category = ["Beds", "Cabinets", "Chairs and seating", "Chests", "Clocks", "Desks", "Tables"];

    return (
        <div className='m-10'>
            <h1 className='font-bold text-2xl'>Group Buy Marketplace</h1>
            <div className='w-full h-44 border-4 mt-4 rounded-lg'>
                <h2 className='font-bold text-xl mt-4 ml-6'>Search Products</h2>
                <div className='flex items-center justify-between mt-5 ml-3'>
                    <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-black text-sm font-bold mb-2 text-left mt-1" htmlFor="Category">
                            Category
                        </label>
                        <div className='relative'>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="Category"
                            >
                                <option value="">Select category</option>
                                {category.map((value, index) => (
                                    <option key={index} value={value}>{value}</option>
                                ))}
                            </select>
                            <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Sub Category">
                            Sub Category
                        </label>
                        <div className='relative'>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="Sub Category"
                            >
                                <option value="">Select sub category</option>
                                {category.map((value, index) => (
                                    <option key={index} value={value}>{value}</option>
                                ))}
                            </select>
                            <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Product">
                            Product
                        </label>
                        <div className='relative'>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="Product"
                            >
                                <option value="">Select product</option>
                                {category.map((value, index) => (
                                    <option key={index} value={value}>{value}</option>
                                ))}
                            </select>
                            <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Search">
                            Search
                        </label>
                        <input
                            type='text'
                            placeholder='Search Product'
                            className=" border rounded w-full py-2 px-3 text-white bg-black"
                        >
                        </input>
                    </div>
                </div>
            </div>
            <div className='w-full h-36 border-4 rounded-lg mt-8'>
                <h1 className='text-center font-bold text-2xl mt-7'>Current Active Groups</h1>
            </div>
        </div>
    )
}

export default Category