import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Heromid from "./components/Heromid"
import Bugg from "./components/Bugg"
import Next from "./components/Next"
import Nextmid from "./components/Nextmid";
import Nextmidafter from "./components/Nextmidafter";
import Footer from "./components/Footer";
import Foot from "./components/Foot"

function App() {
    return(
        <div> 
            <Navbar />
            <Hero />
            <Heromid />
            <Bugg />
            <Next />
            <Nextmid />
            <Nextmidafter />
            <Footer />
            <Foot />
        </div>
    );
}


export default App;