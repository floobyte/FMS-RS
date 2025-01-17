
import './AdminDashboard.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {
  ResponsiveContainer,
  ComposedChart,
 
 Area,
 Line
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const data2 = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700
  }
];



export default function AdminDashboard() {
  return (
    <div>
      
      <div className="admin-panel">
      <header className="admin-header">
        <h1>Domino's Admin Panel</h1>
      </header>

      <div className="dashboard">
        {/* Cards Section */}
        <div className="cards">
          <div className="card">
            <h3>Total Sales</h3>
            <p>$45,000</p>
          </div>
          <div className="card">
            <h3>Total Orders</h3>
            <p>1,200</p>
          </div>
          <div className="card">
            <h3>Total Users</h3>
            <p>2,300</p>
          </div>
          <div className="card">
            <h3>Total Staff</h3>
            <p>50</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts">
          <div className="chart">
            <h3>Sales Chart</h3>
            {/* Replace with your chart component */}
            
            <div className="placeholder-chart">
              <div>
              <BarChart
      width={500}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
              </div>
            </div>
          </div>
          <div className="chart">
            <h3>User Growth Chart</h3>
            {/* Replace with your chart component */}
            <div className="placeholder-chart">
            <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={200}
          height={100}
          data={data2}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="tables">
          <div className="table-container">
            <h3>Restaurant Materials</h3>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cheese</td>
                  <td>20 kg</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>Flour</td>
                  <td>50 kg</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h3>Staff Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sunil Chouhan</td>
                  <td>Manager</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>Chef</td>
                  <td>On Leave</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}