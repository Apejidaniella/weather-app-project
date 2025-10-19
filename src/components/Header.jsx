import React from 'react'
import Logo from './Logo';
import { Link, NavLink } from 'react-router-dom';
import { Bell } from 'lucide-react';


const links = [
  {
    id: 1,
    to: '/',
    name: 'Dashboard',
  },
  {
    id: 2,
    to: '/past-trips',
    name: 'Past Trips',
  },
  {
    id: 3,
    to: '/new-trip',
    name: 'New Trip',
  },

]

function Header() {
  return (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-stone-200 dark:border-stone-800 px-10 py-4">
    <Link to='/' className="flex items-center gap-3 text-stone-900 dark:text-white">
      <Logo />
      <h2 className="text-xl font-bold">PackSmart</h2>
    </Link>
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.to}
          className={({ isActive }) => `text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-primary dark:hover:text-primary transition-colors ${isActive ? '!text-primary' : ''}`}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
    <div className="flex items-center gap-4">
      <button className="flex items-center justify-center rounded-full h-10 w-10 cursor-pointer bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors">
         <Bell />
      </button>
     <img className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" src='https://lh3.googleusercontent.com/aida-public/AB6AXuDm5Jlm_LCqwFrazWzA_3L_7jUiT-EHXJctKWXnSnzXeZqyaF8hPSXCozGHOPtzAHDFLP48fLqdVOnwKXoM6BI_0VBsVD0EQkYJ8rnbfXxTzNvYVG3jkMoB4oE_puvMmkXKfsgq3_gbhtpJkE0qKWkqXj-c9cwtXcfvheTM9UfxHOtFrgJUdIXJ2v_54e3o2jw6bidOEXyQf-HsDHw1txl0KU0zBMMx0wh-51dHfuTtPyiQxLlAxW6M0VKeIQLrhFu9VC4jX8Gyf28-'/>
    {/* <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDm5Jlm_LCqwFrazWzA_3L_7jUiT-EHXJctKWXnSnzXeZqyaF8hPSXCozGHOPtzAHDFLP48fLqdVOnwKXoM6BI_0VBsVD0EQkYJ8rnbfXxTzNvYVG3jkMoB4oE_puvMmkXKfsgq3_gbhtpJkE0qKWkqXj-c9cwtXcfvheTM9UfxHOtFrgJUdIXJ2v_54e3o2jw6bidOEXyQf-HsDHw1txl0KU0zBMMx0wh-51dHfuTtPyiQxLlAxW6M0VKeIQLrhFu9VC4jX8Gyf28-")}} /> */}
    </div>
  </header>
  )
}

export default Header;