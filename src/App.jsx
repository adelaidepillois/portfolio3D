import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas} from "./components";
import * as THREE from 'three';
import "./fonts/Pilowlava-Regular.otf";
import "./fonts/TINY5x3-100.otf";



const App = () => {

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-black">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar/>
                    <Hero/>
                </div>
                <Experience/>
                <Works/>
                <div className="relative z-0">
                  <Contact/>
                  <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
