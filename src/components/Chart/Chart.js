import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 100000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 65000,
    pv: 1398,
    amt: 1500,
  },
  {
    name: 'Page C',
    uv: 850,
    pv: 9800,
    amt: 850,
  },
  {
    name: 'Page D',
    uv: 375,
    pv: 3908,
    amt: 375,
  },
  {
    name: 'Page E',
    uv: 300,
    pv: 4800,
    amt: 300,
  },
  {
    name: 'Page F',
    uv: 150,
    pv: 3800,
    amt: 150,
  },
];

const Chart = () => {
    return (
      <ResponsiveContainer width="100%" aspect={ 4 / 1}>
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

export default Chart;
