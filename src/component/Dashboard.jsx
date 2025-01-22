import React from 'react'

const Dashboard = () => {
    return (
        <div className='m-10'>
            <h1 className='font-bold text-2xl'>Dashboard</h1>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                <div className="bg-white p-8 rounded-lg border-4">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 flex justify-between items-center">
                            Total Savings Amount All Users
                            <span className="text-gray-500 text-xl font-bold">$</span>
                        </h3>
                    </div>
                    <p className="text-black mb-2 text-xl font-bold">₹ 2,500,000</p>
                    <p className="text-gray-400 text-sm">+25% Increment last Month</p>
                </div>

                <div className="bg-white p-8 rounded-lg border-4">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 flex justify-between items-center">
                            Group way Participated
                            <svg
                                className="w-6 h-6 text-blue-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 12a4 4 0 100-8 4 4 0 000 8zM12 20H7v-2a4 4 0 013-3.87M16 10h5v-2a4 4 0 00-3-3.87"
                                />
                            </svg>
                        </h3>
                    </div>
                    <p className="text-black mb-2 text-xl font-bold">1,200</p>
                    <p className="text-gray-400 text-sm">+31% Increment last Month</p>
                </div>

                <div className="bg-white p-8 rounded-lg border-4">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 flex justify-between items-center">
                            Orders Complited
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H6.4M7 13l-1.2 6M7 13h10m-6 8a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                                />
                            </svg>
                        </h3>
                    </div>
                    <p className="text-black mb-2 text-xl font-bold">900</p>
                    <p className="text-gray-400 text-sm">+16% Increment last Month</p>
                </div>
            </section>

            <section className=' grid grid-cols-1 md:grid-cols-2 gap-6 mt-6' >
                <div className="bg-white p-8 rounded-lg border-4">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 flex justify-between items-center">
                            Active Group Buys & Savings Opportunities
                        </h3>
                    </div>

                    <div className="mb-4">
                        <span className="flex justify-between items-center font-semibold text-black">
                            Smartphone X (Electronics)<span className="text-gray-500">75% Completed</span>
                        </span>
                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                            <div
                                className="bg-black h-4 rounded-full"
                                style={{ width: "75%" }}
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text-gray-400 text-sm">Total Savings :₹600,000</p>
                    </div>

                    <div className="mb-4">
                        <span className="flex justify-between items-center font-semibold text-black">
                            Office Chair Y (Furniture)<span className="text-gray-500">50% Completed</span>
                        </span>
                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                            <div
                                className="bg-black h-4 rounded-full"
                                style={{ width: "50%" }}
                                role="progressbar"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text-gray-400 text-sm">Total Savings :₹360,000</p>
                    </div>

                    <div className="mb-4">
                        <span className="flex justify-between items-center font-semibold text-black">
                            Laptop Z (Electronics)<span className="text-gray-500">90% Completed</span>
                        </span>
                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                            <div
                                className="bg-black h-4 rounded-full"
                                style={{ width: "90%" }}
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text-gray-400 text-sm">Total Savings :₹400,000</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg border-4">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 flex justify-between items-center">
                            Platform Metrics
                        </h3>
                    </div>
                    <span className="flex justify-between items-center font-semibold text-black">
                        Total Users on Platform:<span className="text-black font-bold">5,000+</span>
                    </span>
                    <p className="text-gray-400 text-sm">+600 new users this month</p>
                    <span className="flex justify-between items-center font-semibold text-black mt-5">
                        Group Buy Success Rate:<span className="text-black font-bold">83%</span>
                    </span>
                    <p className="text-gray-400 text-sm">1,000 successed group buys</p>
                    <span className="flex justify-between items-center font-semibold text-black mt-5">
                        Remaining Savings Potentials:<span className="text-black font-bold ">₹1,000,000</span>
                    </span>
                </div>


            </section>

        </div>
    )
}

export default Dashboard
