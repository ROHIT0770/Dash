import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "",
    guest: 100,
    user: 200,
  },
  {
    name: "week1",
    guest: 395,
    user: 395,
  },
  {
    name: "week2",
    guest: 150,
    user: 100,
  },
  {
    name: "week3",
    guest: 450,
    user: 300,
  },
  {
    name: "week4",
    guest: 200,
    user: 220,
  },
  {
    name: "",
    guest: 270,
    user: 470,
  },
];

export default function ChartContainer() {
  return (
    <div>
      <LineChart
        width={1010}
        height={400}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="user" stroke="green" />
        <Line type="monotone" dataKey="guest" stroke="red" />
      </LineChart>
    </div>
  );
}
