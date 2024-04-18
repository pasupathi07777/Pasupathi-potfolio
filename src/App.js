

import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Header';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import Project from './components/Project';
// import Resume from './components/Resume';
import Allproject from './components/Allproject';
import Allpage from './components/Allpage';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hero />
      <About />
      <Project />


      <Resume />
      <Contact />
      <Footer /> */}
      
      <Routes>
        <Route index element={<Allpage/>}/>
        <Route path='/project' element={<Allproject />} />

      </Routes>
      

    </div>
  );
}

export default App;
