import './App.css';
import AboutusPage from './components/AboutUs/AboutusPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from './components/services/ServicesPage';
import PatientEducation from './components/education/PatientEducation';
import ContactUspage from './components/contact/ContactUspage';
import { useEffect } from 'react';
import Blogsingle from './components/blogsingle/Blogsingle';

function App() {

  return (
    <div className="App fullwebssiteClass">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path='/about' element={<AboutusPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/patient-education' element={<PatientEducation />} />
          <Route path='/contact-us' element={<ContactUspage />} />
          <Route path='/blog-single' element={<Blogsingle />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
