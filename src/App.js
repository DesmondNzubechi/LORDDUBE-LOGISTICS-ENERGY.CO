import './App.css';
import { MobileHeader } from './Components/Header/MobileHeader';
import { DesktopHeader } from './Components/Header/DesktopHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Pages/About/AboutFull';


function App() {
  return (
    <BrowserRouter>
 <div className="App">
  <DesktopHeader/>
  <MobileHeader/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<AboutUs/>} />
  </Routes>
  <Footer/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
