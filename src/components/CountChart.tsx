"use client";

import { count } from 'console';
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 50,
        fill: '#8884d8',
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#83a6ed',
    },

];


const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className='relative w-full h-[70%]'>
                {<ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar

                            background

                            dataKey="count"
                        />

                    </RadialBarChart>
                </ResponsiveContainer>}
                <Image src="/maleFemale.png" alt="" width={50} height={50}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaSky rounded-full">
                        <h1 className="font-blod">1234</h1>
                        <h2 className="text-xs text-gray-300">Boy (90%)</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaYellow rounded-full">
                        <h1 className="font-blod">1234</h1>
                        <h2 className="text-xs text-gray-300">Girds (10%)</h2>
                    </div>
                </div>
                <div className=''></div>
            </div>
        </div>
    );
}
export default CountChart;
