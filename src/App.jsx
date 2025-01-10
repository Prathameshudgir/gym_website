// import React from 'react'
// import Navbar from './components/navbar'
// import Hero from './components/hero'
// import Service from './components/service'
// import Poster from './components/Poster'
// import Blog from './components/blog'
// import Membership from './components/Membership'
// import Contact from './components/contact'
// import Footer from './components/footer'


// import './index.css'
// import'./App.css'
// const App = () => {
//   return (
//     <div>
      
      
// <Navbar/>
// <Hero/>
// <Service/>
// <Poster/>
// <Membership/>
// <Blog/>
// <Contact/>
// <Footer/>





 









//     </div>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/home";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Hero from "./components/hero";
import Service from "./components/service";
import Poster from "./components/Poster";
import Blog from "./components/blog";
import Membership from "./components/Membership";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
      
        <Navbar />
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/service" element={<Service />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
