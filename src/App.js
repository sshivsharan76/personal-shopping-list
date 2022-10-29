import {Routes, Route} from 'react-router-dom';
import AddItem from './AddItem';
import Home from './Home';
import './App.css';
export default function App() {

  
  return (
    <div className='main'>
      <div >
        <h1 className='heading'>Personal Shopping List</h1>
      <Routes>
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
