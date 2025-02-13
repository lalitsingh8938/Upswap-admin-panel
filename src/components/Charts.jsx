// import {
//     Card,
//     CardBody,
//     CardHeader,
//     Typography,
//   } from "@material-tailwind/react";
//   import Chart from "react-apexcharts";
//   import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

//   // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
//   // import dynamic from "next/dynamic";
//   // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

//   const chartConfig = {
//     type: "bar",
//     height: 400,
//     series: [
//       {
//         name: "Sales",
//         data: [50, 150, 300, 320, 500, 350, 200, 230, 500],
//       },
//     ],
//     options: {
//       chart: {
//         toolbar: {
//           show: false,
//         },
//       },
//       title: {
//         show: "",
//       },
//       dataLabels: {
//         enabled: true,
//       },
//       colors: ["#020617"],
//       plotOptions: {
//         bar: {
//           columnWidth: "15%",
//           borderRadius: 3,
//         },
//       },
//       xaxis: {
//         axisTicks: {
//           show: false,
//         },
//         axisBorder: {
//           show: false,
//         },
//         labels: {
//           style: {
//             colors: "#616161",
//             fontSize: "12px",
//             fontFamily: "inherit",
//             fontWeight: 400,
//           },
//         },
//         categories: [
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ],
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: "#616161",
//             fontSize: "12px",
//             fontFamily: "inherit",
//             fontWeight: 400,
//           },
//         },
//       },
//       grid: {
//         show: true,
//         borderColor: "#dddddd",
//         strokeDashArray: 2,
//         xaxis: {
//           lines: {
//             show: true,
//           },
//         },
//         padding: {
//           top: 2,
//           right: 20,
//         },
//       },
//       fill: {
//         opacity: 0.8,
//       },
//       tooltip: {
//         theme: "dark",
//       },
//     },
//   };

//   export default function Example() {
//     return (
//       <Card>
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
//         >
//           {/* <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
//             <Square3Stack3DIcon className="h-6 w-6" />
//           </div>
//           <div>
//             <Typography variant="h6" color="blue-gray">
//               Bar Chart
//             </Typography>
//             <Typography
//               variant="small"
//               color="gray"
//               className="max-w-sm font-normal"
//             >
//               Visualize your data in a simple way using the
//               @material-tailwind/react chart plugin.
//             </Typography>
//           </div> */}
//         </CardHeader>
//         <CardBody className="px-2 pb-0">
//           <Chart {...chartConfig} />
//         </CardBody>
//       </Card>
//     );
//   }

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "9am - 12pm", deals: 120 },
  { time: "12pm - 3pm", deals: 80 },
  { time: "3pm - 6pm", deals: 140 },
  { time: "6pm - 9pm", deals: 110 },
];

const userEngagementData = [
  { day: "Mon", users: 95 },
  { day: "Tue", users: 90 },
  { day: "Wed", users: 85 },
  { day: "Thu", users: 100 },
  { day: "Fri", users: 95 },
  { day: "Sat", users: 110 },
  { day: "Sun", users: 120 },
];

const ChartCard = ({
  title,
  deals,
  data,
  xDataKey,
  yDataKey,
  gradientId,
  color,
}) => {
  const [filter, setFilter] = useState("Daily");

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg w-full sm:w-[40%]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-base font-semibold">{title}</h2>{" "}
          {/* Font size thoda reduce kiya */}
          <p className="text-gray-500 text-sm">{deals} deals posted</p>{" "}
          {/* Font size chhota kiya */}
        </div>
        <select
          className="border border-gray-300 rounded-md px-2 py-1 text-xs bg-orange-100 text-orange-600"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Last 3 months</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        {" "}
        {/* Height reduce kiya */}
        <AreaChart
          data={data}
          margin={{ top: 10, right: 5, left: 5, bottom: 0 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor={color} stopOpacity={0.8} />
              <stop offset="125%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xDataKey} tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={yDataKey}
            stroke={color}
            fillOpacity={1}
            fill={`url(#${gradientId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const EngagementCharts = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-6 md:ml-72 bg-gray-100">
      <ChartCard
        title="Vendor Engagement"
        deals="129"
        data={data}
        xDataKey="time"
        yDataKey="deals"
        gradientId="vendorGradient"
        color="#9747FF"
      />
      <ChartCard
        title="User Engagement"
        deals="129"
        data={userEngagementData}
        xDataKey="day"
        yDataKey="users"
        gradientId="userGradient"
        color="#FB5456"
      />
    </div>
  );
};
// 9747FF
// FB5456
 
export default EngagementCharts;
