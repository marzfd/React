
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Forecast() {

  const { forecastData } = useContext(GlobalContext);

  return (
    <div className='forecastPage'>
      <h1>5 Days Forecast</h1>

      <div className='forecastChart'>
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart
            data={forecastData}
            margin={{
              top: 30,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <Area
              type='monotone'

              dataKey='temp'

              stroke='#945cb4'
              fill='#d0b9f5'

            />
            <XAxis
              dataKey='date'
              tick={{ fill: '#282c34' }}
            />
            <YAxis
              dataKey='temp'
              tick={{ fontSize: 15, fill: '#282c34' }}
              tickFormatter={temp => `${temp} °C`}
            />
            <Tooltip
            />
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <Link to='/'>
        <button className='backBtn'>
          Back to Home
        </button>
      </Link>

    </div>
  );
}

export default Forecast;