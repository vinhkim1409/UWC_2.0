import './App.css';
import { Routes,Route } from 'react-router-dom';
import Troller from './pages/troller-vehicle assignment/Troller';
import Vehicle from './pages/troller-vehicle assignment/Vehicle';
import Header from './layouts/Header/index'
import Footer from './layouts/Footer/index'
import DefaultLayout from './layouts/DefaultLayout/index'
import TaskItem from './layouts/Task/TaskItem';
import TaskPage from './layouts/Task/TaskPage/Task';
const trollerInfo=[
  {
    name: 'troller 1',
    id: 1
  },
  {
    name: 'troller 2',
    id: 2
  },
  {
    name: 'troller 3',
    id: 3
  },
  {
    name: 'troller 4',
    id: 4
  },
  {
    name: 'troller 5',
    id: 5
  },
  {
    name: 'troller 6',
    id: 6
  }
]

const vehicleInfo=[
  {
      name: 'ISUZU PVZ 1',
      id: 1
  },
  {
      name: 'ISUZU PVZ 2',
      id: 2
  },
  {
      name: 'ISUZU PVZ 3',
      id: 3
  },
  {
      name: 'ISUZU PVZ 4',
      id: 4
  },
  {
      name: 'ISUZU PVZ 5',
      id: 5
  },
  {
      name: 'ISUZU PVZ 6',
      id: 6
  },
]

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<TaskPage  />} />
      <Route path='/Vehicle' element={<Vehicle vehicle={vehicleInfo} />} />
      <Route path='/Troller' element={<Troller troller={trollerInfo} />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
