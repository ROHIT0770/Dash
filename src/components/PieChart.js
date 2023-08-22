// import React from "react";
// import { PieChart, Pie } from "recharts";
// import './styles.css'

// const innerdata = [
//   { name: "Tees", value: 31 },
//   { name: "Pants", value: 14 },
//   { name: "Hoodies", value: 55 },
// ];

// const InnerPieChart = () => {
//   return (
//     <div className="chart-container">
//       <PieChart width={350} height={350}>
//         <Pie data={innerdata} dataKey="value" outerRadius={75} fill="teal" />
//       </PieChart>
//       <div className="chartData-styles">
//         <ul className="colored-list">
//           <li className="part">
//             <h3>Basic Tees</h3>
//             <p>55%</p>
//           </li>
//           <li className="part">
//             <h3>Custom Short pants</h3>
//             <p>31%</p>
//           </li>
//           <li className="part">
//             <h3>Super Hoodies</h3>
//             <p>21%</p>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default InnerPieChart;
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import './styles.css'

const innerdata = [
  { name: "Tees", value: 55 },
  { name: "Pants", value: 31 },
  { name: "Hoodies", value: 14 },
];

const colors = ["#98D89E", "#F6DC7D", "#EE8484"];

const InnerPieChart = () => {
  return (
    <div className="chart-container">
      <PieChart width={350} height={350}>
        <Pie data={innerdata} dataKey="value" outerRadius={75} startAngle={90}
          endAngle={450}>
          {
            innerdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
          }
        </Pie>
      </PieChart>
      <div className="chartData-styles">
        <ul className="colored-list">
          <li className="part">
            <h3>Basic Tees</h3>
            <p>55%</p>
          </li>
          <li className="part">
            <h3>Custom Short pants</h3>
            <p>31%</p>
          </li>
          <li className="part">
            <h3>Super Hoodies</h3>
            <p>21%</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InnerPieChart;
