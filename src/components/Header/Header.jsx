import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../../public/logo.svg'

// React Icons
import { RiMenu4Fill } from "react-icons/ri";
import { useEffect, useState } from 'react';

export default function Header() {
       const [showMenu,setShowMenu] = useState(false)

       function activeShowMenu(){
              if (!showMenu) {
                     return setShowMenu(true)
              }

              return setShowMenu(false)
       }

       // event scroll
       useEffect(function(){
              document.addEventListener('scroll', function(){
                     const header = document.querySelector('header');
                     if (window.scrollY > 400) {
                            header.classList.add('scrolled');
                     }else{
                            header.classList.remove('scrolled');
                     }
              })
       },[])


       return (
              <header>
              <nav className="navigation | container m-auto flex items-center justify-between p-7">
                     {/* logo website Axios */}
                     <Link to='/'><img src={logo} alt="Logo website" width={100}/></Link>

                     {/* menu nav links */}
                     <menu className={`${!showMenu ? 'hidden' : 'flex'} fixed items-center justify-center lg:flex lg:static`}>
                            <li><NavLink to='/'>Sections</NavLink></li>
                            <li><NavLink to=''>Axios Pro</NavLink></li>
                            <li><NavLink to=''>Events</NavLink></li>
                            <li><NavLink to=''>About Axios</NavLink></li>
                            <li><NavLink to=''>Subscribe</NavLink></li>
                     </menu>

                     {/* button menu nav responsive mobile */}
                     <button onClick={activeShowMenu} className="btn-menu | md:block lg:hidden"><RiMenu4Fill size={25} /></button>
              </nav>
              </header>
       )
}

