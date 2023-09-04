/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

// import other components
import Logo from "../assets/MyLogo.png"
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    return (
        <header className={`${ bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className='container mx-auto h-full flex items-center justify-between'>
                {/* Logo */}
                <a href='#'>
                    {/* <img src={Logo} alt='' className='scale-[0.125]'></img> */}
                    DevelopedByArshvir
                </a>
                {/* Nav */}
                <div className='hidden lg:block'>
                    <Nav />
                </div>
                {/* Socials */}
                <div className='hidden lg:block'>
                    <Socials />
                </div>
                {/* Mobile Nav */}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header