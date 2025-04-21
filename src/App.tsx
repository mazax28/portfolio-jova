
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects'
import Contact from './pages/Contact.jsx'
import Courses from './pages/Courses.jsx'
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
