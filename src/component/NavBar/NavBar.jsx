import React from 'react';
import Link from './link';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  
const NavBar = () => {
    return (
        <nav>

            <ul className='flex'>
            {
                navLinks.map(route => <Link key={route.id} route ={route}></Link>)
            }
            </ul>

            {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='mr-10'> <a href='/'>{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul className='flex gap-10'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;