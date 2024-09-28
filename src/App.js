import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allpage from './components/Allpage';
import Resumeimg from './components/Resumeimg';
import { Dataprovider } from './alldata/data';
import AllProject from './components/project/AllProject';





function App() {
  return (
    <div className="App w-[100vw] h-[100vh] flex flex-col lg:flex-row     ">
      <Dataprovider>

     

        <Routes>

          <Route index element={<Allpage />} />
          <Route path='/resume' element={<Resumeimg />} />
          <Route path='/myproject' element={<AllProject />} />

        </Routes>







      </Dataprovider>





    </div>
  );
}

export default App;




