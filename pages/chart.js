import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
import Navbar from '../components/Navbar/navbar';

const data = [
  {
    name: 'jan', burger: 4000, chiken: 2400, hottang: 2000, pizza: 1800, amt: 2400,
  },
  {
    name: 'feb', burger: 3000, chiken: 1398, hottang: 2300, pizza: 2350, amt: 2210,
  },
  {
    name: 'mar', burger: 6000, chiken: 8800, hottang: 5400, pizza: 3200, amt: 2290,
  },
  {
    name: 'apr', burger: 5780, chiken: 3908, hottang: 2600, pizza: 3000, amt: 2000,
  },
  {
    name: 'may', burger: 1890, chiken: 4800, hottang: 4000, pizza: 4600, amt: 2181,
  },
  {
    name: 'jun', burger: 2390, chiken: 1800, hottang: 3400, pizza: 5700, amt: 2500,
  },
  {
    name: 'jul', burger: 3490, chiken: 7300, hottang: 4800, pizza: 7300, amt: 2100,
  },
  // {
  //   name: 'agt', burger: 3290, chiken: 2300, hottang: 5100, pizza: 5600, amt: 2100,
  // },
  // {
  //   name: 'sep', burger: 4490, chiken: 4900, hottang: 5000, pizza: 5000, amt: 2100,
  // },
  // {
  //   name: 'oct', burger: 3990, chiken: 4300, hottang: 7000, pizza: 4300, amt: 2100,
  // },
  // {
  //   name: 'nov', burger: 2190, chiken: 8300, hottang: 3400, pizza: 3700, amt: 2100,
  // },
  // {
  //   name: 'dec', burger: 6490, chiken: 4300, hottang: 4200, pizza: 5600, amt: 2100,
  // },
];

const Chart = () => {

  return (
    <>
      <p className="hidden md:block pt-5 text-center font-padauk font-bold text-lg text-red-600 ">Data Penjulan</p>
      <div style={{ width:800, height: 400 }} className="flex mt-5">
        <ResponsiveContainer >
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 25, right: 5, left: 25, bottom: 25,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="burger" stroke="#FFFF00" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="chiken" stroke="#FF0000" />
            <Line type="monotone" dataKey="pizza" stroe="#FF00FF" />
            <Line type="monotone" dataKey="hottang" stroke="#00FF00" />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </>

  )
};

export default Chart;