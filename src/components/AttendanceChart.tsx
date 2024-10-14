"use client";

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
    
  },
  {
    name: 'Tue',
    present: 30,
    absent: 13,
    
  },
  {
    name: 'Wed',
    present: 20,
    absent: 98,
    
  },
  {
    name: 'Thu',
    present: 27,
    absent: 39,
  },
  {
    name: 'Fri',
    present: 18,
    absent: 48,
  
  },
  
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
               <h1 className='text-lg font-semibold'>Attendance Chart</h1>
               <Image src="/moreDark.png" alt="moreDark" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend align="left" verticalAlign='top'
          wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="present" fill="#8884d8" 
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          legendType='circle' />
          <Bar dataKey="absent" fill="#82ca9d" activeBar={<Rectangle fill="gold"
           stroke="purple" />}
           legendType='circle' />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
}  
export default AttendanceChart;