import './App.css';
import { MobileHeader } from './Components/Header/MobileHeader';
import { DesktopHeader } from './Components/Header/DesktopHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
 <div className="App">
  <DesktopHeader/>
  <MobileHeader/>
  <Routes>
    <Route path='/' element={<Home/>} />
  </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
