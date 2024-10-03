import Header from "./Components/Common/Header.jsx";
import Home from "./Pages/Home.jsx";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import Footer from "./Components/Common/Footer.jsx";
import Rental from "./Pages/Rental.jsx";
import NotFound from "./Pages/NotFound.jsx";
import About from "./Pages/About.jsx";

export default function App() {     
    
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}