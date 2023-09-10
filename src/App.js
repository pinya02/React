import logo from './logo.svg';
import './App.css';
import './input.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from './components/Navbar';

function App()  {
  return (
    <div className='bg-gradient-to-b from-[#E296FC] to-[#9495FA] h-screen'>
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element={<LandingPage/>}></Route>
        <Route path = "/details"element={<DetailsPage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
