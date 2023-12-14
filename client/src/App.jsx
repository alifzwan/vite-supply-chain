
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home"
import Project from "./components/showcase/project/Project";
import ProjectHero from "./components/showcase/project/projectHero/ProjectHero";
import Register from "./components/showcase/register/Register";
import Order from "./components/showcase/order/Order";
import Admin from "./components/showcase/admin/Admin";
import Track from "./components/showcase/track/Track";
import Info from "./components/showcase/info/Info";
import Login from "./components/showcase/login/Login";


const App = () => {
  return (
    <>
    <Router>
    <Routes>
          <Route path = '/' exact element={<Home />}/>
          <Route path = '/project' exact  element={<Project />} />
          <Route path = '/projecthero' exact  element={<ProjectHero />} />
          <Route path = '/login' exact  element={<Login />} />
          <Route path = '/register' exact  element={<Register />} />
          <Route path = '/order' exact  element={<Order />} />
          <Route path = '/admin' exact  element={<Admin />} />
          <Route path = '/track' exact  element={<Track />} />
          <Route path = '/info' exact  element={<Info />} />
        </Routes>
    </Router>
    </>
    
  );
};

export default App;
