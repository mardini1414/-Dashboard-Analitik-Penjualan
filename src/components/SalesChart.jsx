import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from 'recharts';

const dataLine = [
  {
    name: 'Produk A',
    sales: 100,
    profit: 400,
    quantity: 20,
  },
  {
    name: 'Produk B',
    sales: 150,
    profit: 300,
    quantity: 15,
  },
  {
    name: 'Produk C',
    sales: 80,
    profit: 200,
    quantity: 10,
  },
  {
    name: 'Produk D',
    sales: 120,
    profit: 500,
    quantity: 25,
  },
  {
    name: 'Produk E',
    sales: 90,
    profit: 250,
    quantity: 18,
  },
  {
    name: 'Produk F',
    sales: 110,
    profit: 350,
    quantity: 22,
  },
  {
    name: 'Produk G',
    sales: 130,
    profit: 450,
    quantity: 24,
  },
  {
    name: 'Produk H',
    sales: 95,
    profit: 220,
    quantity: 12,
  },
  {
    name: 'Produk I',
    sales: 85,
    profit: 210,
    quantity: 11,
  },
  {
    name: 'Produk J',
    sales: 140,
    profit: 470,
    quantity: 27,
  },
  {
    name: 'Produk K',
    sales: 160,
    profit: 490,
    quantity: 30,
  },
  {
    name: 'Produk L',
    sales: 170,
    profit: 520,
    quantity: 33,
  },
  {
    name: 'Produk M',
    sales: 180,
    profit: 540,
    quantity: 35,
  },
  {
    name: 'Produk N',
    sales: 190,
    profit: 560,
    quantity: 37,
  },
  {
    name: 'Produk O',
    sales: 200,
    profit: 580,
    quantity: 40,
  },
  {
    name: 'Produk P',
    sales: 210,
    profit: 600,
    quantity: 42,
  },
  {
    name: 'Produk Q',
    sales: 220,
    profit: 620,
    quantity: 44,
  },
  {
    name: 'Produk R',
    sales: 230,
    profit: 640,
    quantity: 46,
  },
  {
    name: 'Produk S',
    sales: 240,
    profit: 660,
    quantity: 48,
  },
  {
    name: 'Produk T',
    sales: 250,
    profit: 680,
    quantity: 50,
  },
  {
    name: 'Produk U',
    sales: 260,
    profit: 700,
    quantity: 52,
  },
  {
    name: 'Produk V',
    sales: 270,
    profit: 720,
    quantity: 54,
  },
  {
    name: 'Produk W',
    sales: 280,
    profit: 740,
    quantity: 56,
  },
  {
    name: 'Produk X',
    sales: 290,
    profit: 760,
    quantity: 58,
  },
  {
    name: 'Produk Y',
    sales: 300,
    profit: 780,
    quantity: 60,
  },
  {
    name: 'Produk Z',
    sales: 310,
    profit: 800,
    quantity: 62,
  },
];

const dataBar = [
  {
    name: 'Product A',
    sales: 4000,
  },
  {
    name: 'Product B',
    sales: 3000,
  },
  {
    name: 'Product C',
    sales: 2000,
  },
  {
    name: 'Product D',
    sales: 2780,
  },
  {
    name: 'Product E',
    sales: 1890,
  },
  {
    name: 'Product F',
    sales: 2390,
  },
  {
    name: 'Product G',
    sales: 3490,
  },
  {
    name: 'Product H',
    sales: 1500,
  },
  {
    name: 'Product I',
    sales: 2200,
  },
  {
    name: 'Product J',
    sales: 1800,
  },
  {
    name: 'Product K',
    sales: 2600,
  },
  {
    name: 'Product L',
    sales: 3200,
  },
  {
    name: 'Product M',
    sales: 2800,
  },
  {
    name: 'Product N',
    sales: 3300,
  },
  {
    name: 'Product O',
    sales: 1900,
  },
  {
    name: 'Product P',
    sales: 2700,
  },
  {
    name: 'Product Q',
    sales: 2100,
  },
  {
    name: 'Product R',
    sales: 3500,
  },
  {
    name: 'Product S',
    sales: 2400,
  },
  {
    name: 'Product T',
    sales: 2900,
  },
  {
    name: 'Product U',
    sales: 2300,
  },
  {
    name: 'Product V',
    sales: 2000,
  },
  {
    name: 'Product W',
    sales: 3100,
  },
  {
    name: 'Product X',
    sales: 2700,
  },
  {
    name: 'Product Y',
    sales: 2200,
  },
  {
    name: 'Product Z',
    sales: 3000,
  },
];
function SalesChart({ dataKey = 'name' }) {
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataBar}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide />
          <YAxis fontSize={10} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sales"
            fill="rgb(165, 55, 253, 0.5)"
            activeBar={<Rectangle fill="purple" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={500} data={dataLine}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} hide />
          <YAxis fontSize={10} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
          <Line type="monotone" dataKey="quantity" stroke="#699cad" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
