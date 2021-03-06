import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class Chart extends PureComponent {

  render() {  
    const numData = this.props.numbers
    console.log("numbers", numData)
    return (
      // <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={numData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      // </ResponsiveContainer>
    );
  }
}
