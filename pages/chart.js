import React from "react";
import { VictoryPie, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from "victory";
import Navbar from "../components/Navbar/navbar";


const data = [
  { date: "2014", volume: 16197 },
  { date: "2015", volume: 32010 },
  { date: "2016", volume: 26518 },
  { date: "2017", volume: 18606 },
  { date: "2018", volume: 16795 },
  { date: "2019", volume: 28607 },
  { date: "2020", volume: 23621 }
];

const Chart = () => {
  return (
    <>
      <Navbar />
      {/* <p className="font-semibold pt-8 text-black"> Data Chart Penjualan </p> */}
      <div className="flex justify-center py-12 px-16 md:px-40 lg:px-64 lg:py-1">
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
          padding={55}
        >
          <VictoryAxis
            fixLabelOverlap
            style={{ tickLabels: { padding: 16, fontSize: 8 } }}
          />
          <VictoryAxis dependentAxis />
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 }
            }}
            data={data} x="date" y="volume"
          />
        </VictoryChart>
      </div>

    </>

  )
};

export default Chart;