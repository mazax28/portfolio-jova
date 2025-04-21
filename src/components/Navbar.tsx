
import {Link} from "react-scroll"

function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full border-2  border-white/10 backdrop-blur-md shadow-md z-50">
        <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#161616] rounded-box z-1 mt-3 w-52 p-2 shadow">
            <Link to='home' smooth={true} duration={500}><li><a>Inicio</a></li></Link>
            <Link to='about' smooth={true} duration={500}><li><a>Sobre mi</a></li></Link>
            <Link to='projects' smooth={true} duration={500}><li><a>Proyectos</a></li></Link>
            <Link to='courses' smooth={true} duration={500}><li><a>Cursos</a></li></Link>
            <Link to='contact' smooth={true} duration={500}><li><a>Contacto</a></li></Link>
            </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-light"> 
            <Link to='home' smooth={true} duration={500} offset={-64}><li><a>Inicio</a></li></Link>
            <Link to='about' smooth={true} duration={500} offset={-64}><li><a>Sobre mi</a></li></Link>
            <Link to='projects' smooth={true} duration={500} offset={-64}><li><a>Proyectos</a></li></Link>
            <Link to='courses' smooth={true} duration={500} offset={-64}><li><a>Cursos</a></li></Link>
            <Link to='contact' smooth={true} duration={500} offset={-64}><li><a>Contacto</a></li></Link>
        </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
        <select className="select border border-[#fafafa] bg-[#09090b] bg-blur-md w-[80px] focus:outline-none">
            <option>ES</option>
            <option>EN</option>
        </select>
        <a className="btn border border-[#fafafa] bg-[#09090b]">Descargar CV</a>
        </div>
  </div>
  )
}

export default Navbar
