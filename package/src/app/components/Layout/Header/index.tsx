'use client'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/#books' },
  { label: 'Author', href: '/#author' },
  { label: 'Contact Us', href: '/#contact' },
]

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-transparent ${
        sticky ? 'bg-white shadow-lg py-2' : 'shadow-none py-4'
      }`}>
      <div>
        <div className='container flex items-center justify-between'>
          <Logo />
          <nav className='hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center'>
            {navLinks.map((item) => (
              <HeaderLink key={item.href} item={item} />
            ))}
          </nav>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block lg:hidden p-2 rounded-lg hover:cursor-pointer'
            aria-label='Toggle mobile menu'>
            <span className='block w-6 h-0.5 bg-black'></span>
            <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
          </button>
        </div>
        {navbarOpen && (
          <button
            aria-label='Close navigation menu'
            onClick={() => setNavbarOpen(false)}
            className='fixed inset-0 w-full h-full bg-black/50 z-40'
          />
        )}
        <div
          aria-hidden={!navbarOpen}
          inert={!navbarOpen}
          style={{ transform: navbarOpen ? 'translateX(0)' : 'translateX(100%)' }}
          className='lg:hidden fixed top-0 right-0 h-full w-full max-w-xs transform bg-white shadow-lg transition-transform duration-300 z-50'>
          <div className='flex items-center justify-between gap-2 p-4'>
            <div>
              <Logo />
            </div>
            <button
              onClick={() => setNavbarOpen(false)}
              className='hover:cursor-pointer'
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-black hover:text-primary text-24 inline-block me-2'
              />
            </button>
          </div>
          <nav
            className='flex flex-col items-start p-4'
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) {
                setNavbarOpen(false)
              }
            }}>
            {navLinks.map((item) => (
              <MobileHeaderLink key={item.href} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
