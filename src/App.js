import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';

function App() {
  return (
    <div  >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

    </div>
  );
}

export default App;
