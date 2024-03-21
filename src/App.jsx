import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Receitas from './pages/Receitas'

import {BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path='/receitas' element={<Receitas />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
  );
}

export default App;
