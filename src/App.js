import './App.css'


import { Box } from '@mui/material'
import Nav from './components/nav'
import Header from './components/header'
import About from './components/About'
import Services from './components/services'
import Blog from './components/blog'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
        <Nav />
        <Header />
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
        <a href="#" className="scroll-top btn-hover">
          <i className="lni lni-chevron-up"></i>
        </a>
    </div>
  )
}

export default App
