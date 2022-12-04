import './App.css';
import { Routes,Route } from 'react-router-dom';
import TempLink from './Temp-link';
import Troller from './pages/troller-vehicle assignment/Troller';
import Vehicle from './pages/troller-vehicle assignment/Vehicle';

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
    <Routes>
      <Route path='/' element={<TempLink />} />
      <Route path='/Vehicle' element={<Vehicle vehicle={vehicleInfo} />} />
      <Route path='/Troller' element={<Troller troller={trollerInfo} />} />
    </Routes>
  );
}

export default App;
