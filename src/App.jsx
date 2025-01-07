import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Service from './components/service'
import Poster from './components/Poster'
import Blog from './components/blog'
import Membership from './components/Membership'
import Contact from './components/contact'
import Footer from './components/footer'
import './index.css'
import'./App.css'
const App = () => {
  return (
    <div>
<Navbar/>
<Hero/>
<Service/>
<Poster/>
<Blog/>
<Membership/>
<Contact/>
<Footer/>

    </div>
  )
}

export default App