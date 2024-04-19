import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Allproject from './components/Allproject';
import Allpage from './components/Allpage';
import Advanceproject from './components/Advanceproject';
import Miniproject from './components/Miniproject'
import Gamesproject from './components/Gamesproject'
import Resumeimg from './components/Resumeimg';
import { Dataprovider } from './alldata/data';

function App() {
  return (
    <div className="App">
      <Dataprovider>
      <Routes>
        <Route index element={<Allpage/>}/>
        <Route path='/Advanceproject' element={<Advanceproject/>} />
        <Route path='/Miniproject' element={<Miniproject/>} />
        <Route path='/Gamesproject' element={<Gamesproject/>} />
        <Route path='/resume' element={<Resumeimg/>} />

      </Routes>

      </Dataprovider>
    
      
      
      

    </div>
  );
}

export default App;
