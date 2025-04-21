

import Home from './pages/Home.jsx'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import  Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Courses/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
