import React   from 'react';
import Navbar from './pages/shared/navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliders from './pages/shared/slider/Sliders';
import Services from './pages/services/services/Services';
function App() {
  
  
 
  return (
    <div className="App">
     <Navbar/>
     <Sliders/>
     <Services/>
    </div>
  );
}

export default App;
