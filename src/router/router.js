import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from '../components/main/Header';
import Footer from '../components//main/Footer';

import Home from '../pages/Home'; 
import About from '../pages/About';
import Contact from '../pages/Contact';
import Cars from '../pages/Cars';
import SliderCar from '../pages/SliderCar';

const Routess = () =>{
    return(
        <Router>
            <Header  />
            <div className='py-16 w-full h-auto '>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/cars' element={<Cars />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/slider_car/:id' element={<SliderCar />} />
            </Routes>
            </div>
            <Footer  />
        </Router>
    )
}

export default Routess;