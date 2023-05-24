import './App.css';
import { MobileHeader } from './Components/Header/MobileHeader';
import { DesktopHeader } from './Components/Header/DesktopHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Pages/About/AboutFull';
import { ContactUs } from './Pages/Contact/Contact';
import { Services } from './Pages/Services/Services';
import { OurProducts } from './Pages/Product/Product';
import ScrollToTop from './Components/scrollToTop/ScrollTop';
import {RiWhatsappFill} from 'react-icons/ri';

function App() {
  return (
    <BrowserRouter>
 <div className="App">
  <DesktopHeader/>
  <MobileHeader/>
  <a className='fixed z-[20] p-2 rounded-[50px] shadow-2xl bg-pink-500  right-[10px] bottom-[50px] '  href="https://wa.me/+2347068622370?text=Hello%20LORDDUBE,%20LOGISTIC%20ENERGY%20.CO%20"><RiWhatsappFill className="   text-[50px] text-slate-200 " /></a> 
  <ScrollToTop/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<AboutUs/>} />
    <Route path='/contact' element={<ContactUs/>} />
    <Route path='/service' element={<Services/>} />
    <Route path='/products' element={<OurProducts/>} />
  </Routes>
  
  <Footer/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
