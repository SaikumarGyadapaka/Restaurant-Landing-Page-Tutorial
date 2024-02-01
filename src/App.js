import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    
    <div className="App">
      <div id="particles-js"></div>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      <script type="text/JavaScript" src="particles.js"></script>
    <script type="text/JavaScript" src="app.js"></script>
    </div>
    
  );
}

export default App;
