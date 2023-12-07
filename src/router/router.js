import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from '../components/main/Header';
import Footer from '../components//main/Footer';

import Home from '../pages/Home'; 
import About from '../pages/About';
import Contact from '../pages/Contact';


const Routess = () =>{
    return(
        <Router>
            <Header  />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer  />
        </Router>
    )
}

export default Routess;