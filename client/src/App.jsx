
import "./app.scss";
import Hero from "./components/homepage/hero/Hero";
import Navbar from "./components/homepage/navbar/Navbar";
import Register from "./components/register/Register";
import Order from "./components/order/Order";
import Admin from "./components/admin/Admin";
import Track from "./components/track/Track";
import Info from "./components/info/Info";
import About from "./components/about/About";
import AboutNavBar from "./components/about/aboutNavbar/AboutNavBar";
import Project from "./components/project/Project";
import Frameworks from "./components/frameworks/Frameworks";
import Credits from "./components/credits/Credits";


const App = () => {
  return (
    <div>
      
      <section id="Homepage">
      <Navbar />
      <Hero />
      </section>

      <section id="About Me">
      <AboutNavBar />
      <About />
      </section>

      <section id="Project Overview">
      <Project />
      </section>

      <section id="Register">
      <Register />
      </section>

      <section id="Order">
      <Order />
      </section>

      <section id="Admin">
      <Admin />
      </section>

      <section id="Track">
      <Track />
      </section>

      <section id="Info">
      <Info />
      </section>

      <section id="Frameworks">
      <Frameworks />
      <Credits />
      </section>
    
    </div>
  );
};

export default App;
