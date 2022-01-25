import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

const data = [
  {
    name: "Illustrator",
   
   levels:80,
   
  },
  {
    name: "Photoshop",
   
    levels: 80,
   
  },
  {
    name: "Premiere",

    levels: 70,
   
  },
  {
    name: "After effect",
    
    levels: 30,
  
  },


];

export default function App() {
  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={400}
      data={data}
      margin={{
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
  
      <Bar dataKey="levels" barSize={20} fill="#00000" />
     
    </ComposedChart>
  );
}
