import './App.css';
import Troller from './troller assignment/Troller';

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

function App() {
  return (
    <Troller troller={trollerInfo}/>
  );
}

export default App;
