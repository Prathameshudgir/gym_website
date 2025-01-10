import React from "react";
import Hero from "./hero";
import Service from "./service";
import Poster from "./Poster";
import Membership from "./Membership";
import Blog from "./blog";
import Contact from "./contact";

const Home = () => {
  return (
   <div>
    <Hero/>
    <Service/>
    <Poster/>
 <Membership/>
 <Blog/>
<Contact/>
   </div>
    
  );
};

export default Home;
