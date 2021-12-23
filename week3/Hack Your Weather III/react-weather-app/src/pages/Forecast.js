
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
  CartesianGrid
} from "recharts";

function Forecast() {

  const { forecastData } = useContext(GlobalContext);

  return (
    <div className='forecastPage'>
      <h1>5 Days Forecast</h1>

      <div className='forecastChart'>
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart
            data={forecastData}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 0
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type='monotone' dataKey='temp' stroke='#282c34' fill='#282c34' />
            <XAxis
              dataKey='date'
              tick={{ fill: '#282c34' }}
            />
            <YAxis
              dataKey='temp'
              tick={{ fontSize: 15, fill: '#282c34' }}
              tickFormatter={temp => `${temp} °C`}
            />
            <Tooltip content={<CustomTooltip />} />
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

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>{`${label}`}</p>
        <p>{`${payload[0].value}°C`}</p>
      </div>
    );
  }

  return null;
}

export default Forecast;