import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis,  Tooltip,  } from 'recharts';

const Statistics = () => {
    const quizdata = useLoaderData();
    const data= quizdata.data;
    
    return (
        <div >
            <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
            </LineChart>
        </div> 
    );
};

export default Statistics;