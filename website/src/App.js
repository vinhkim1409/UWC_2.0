import "./App.css";
import { Routes, Route } from "react-router-dom";
import TempLink from './Temp-link';
import Troller from "./pages/troller-vehicle assignment/Troller";
import Vehicle from "./pages/troller-vehicle assignment/Vehicle";
import TaskAssignment1 from "./pages/task-assignment/TaskAssignment1";
import TaskAssignment2 from "./pages/task-assignment/TaskAssignment2";
import Mcps from "./pages/Vinh/Mcps"
import Map_area from "./pages/Vinh/Map_area"
import Ass_collector from "./pages/Quan/Ass_collector"
import Ass_janitor from "./pages/Quan/Ass_janitor"

const trollerInfo = [
  {
    name: "troller 1",
    id: 1,
  },
  {
    name: "troller 2",
    id: 2,
  },
  {
    name: "troller 3",
    id: 3,
  },
  {
    name: "troller 4",
    id: 4,
  },
  {
    name: "troller 5",
    id: 5,
  },
  {
    name: "troller 6",
    id: 6,
  },
];

const vehicleInfo = [
  {
    name: "ISUZU PVZ 1",
    id: 1,
  },
  {
    name: "ISUZU PVZ 2",
    id: 2,
  },
  {
    name: "ISUZU PVZ 3",
    id: 3,
  },
  {
    name: "ISUZU PVZ 4",
    id: 4,
  },
  {
    name: "ISUZU PVZ 5",
    id: 5,
  },
  {
    name: "ISUZU PVZ 6",
    id: 6,
  },
];

const taskInfo = {
  id: 1,
  name: "Dọn vệ sinh khu vực KTX khu A",
  workingArea: "Khu A",
  startPlace: "Toà BA3",
  endPlace: "MCP tòa D05",
};
const map_area_info =[
  {
    name: "Khu vực A",
  },
  {
    name: "Khu vực B",
  },
  
];
const mcps_info =[
  {
    name: "Khu vực A",
  },
  {
    name: "Khu vực B",
  },
  {
    name: "Khu vực C",
  },
  
];

const Ass_collector_info = [
  {
    name: "Nguyễn Văn A",
    id: 1,

  },
  {
    name: "Nguyễn Văn B",
    id: 2,
  },
  {
    name: "Nguyễn Văn C",
    id: 3,
  },
  {
    name: "Trần Thị D",
    id: 4,
  },
  {
    name: "Lê Thị F",
    id: 5,
  },

];
const Ass_janitor_info = [
  {
    name: "Nguyễn Văn A",
    id: 1,

  },
  {
    name: "Nguyễn Văn B",
    id: 2,
  },
  {
    name: "Nguyễn Văn C",
    id: 3,
  },
  {
    name: "Trần Thị D",
    id: 4,
  },
  {
    name: "Lê Thị F",
    id: 5,
  },

];

function App() {
  return (
      <Routes>
      <Route path='/' element={<TempLink />} />
        <Route path="/Vehicle" element={<Vehicle vehicle={vehicleInfo} />} />
        <Route path="/Troller" element={<Troller troller={trollerInfo} />} />
        <Route
          path="/Task-Assignment-1"
          element={<TaskAssignment1 task={taskInfo} />}
        />
        <Route
          path="/Task-Assignment-2"
          element={<TaskAssignment2 task={taskInfo} />}
        />
        <Route path="/Map_area" element={<Map_area map_area={map_area_info} />} />
        <Route path="/Mcps" element={<Mcps mcps={mcps_info} />} />



        <Route path="/Ass_collector" element={<Ass_collector ass_collector={Ass_collector_info} />} />
        <Route path="/Ass_janitor" element={<Ass_janitor ass_janitor={Ass_janitor_info} />} />



        


        

      </Routes>
  );
}

export default App;
