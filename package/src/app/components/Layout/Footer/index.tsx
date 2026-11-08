'use client'

import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
  return (
    <footer className='bg-deep-slate pt-12'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-10 border-b border-black/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.2fr] lg:gap-12'>
          <div>
            <div className='mb-6 max-w-[15rem]'>
              <Logo />
            </div>
            <p className='max-w-sm text-base leading-7 text-black/60'>
              Sharing faith, purpose and practical biblical wisdom for everyday
              life.
            </p>
          </div>
          <div>
            <h2 className='mb-5 text-lg font-semibold text-black'>Explore</h2>
            <nav aria-label='Footer navigation'>
              <ul className='flex flex-wrap gap-x-6 gap-y-3'>
                {[
                  { label: 'Home', href: '/', icon: 'solar:home-2-linear' },
                  { label: 'Books', href: '/#books', icon: 'solar:book-2-linear' },
                  { label: 'Author', href: '/#author', icon: 'solar:user-linear' },
                  { label: 'Contact Us', href: '/#contact', icon: 'solar:letter-linear' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className='inline-flex items-center gap-2 text-base text-black/60 transition hover:text-primary'
                    >
                      <Icon icon={item.icon} className='text-lg' aria-hidden='true' />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h2 className='mb-5 text-lg font-semibold text-black'>Get in touch</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex items-start'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='me-3 mt-0.5 shrink-0 text-2xl text-primary'
                />
                <p className='text-base text-black/60'>Ondo State, Nigeria</p>
              </div>
              <Link href='tel:+2349034731883' className='flex w-fit items-center'>
                <Icon
                  icon='solar:phone-bold'
                  className='me-3 shrink-0 text-2xl text-primary'
                />
                <span className='text-base text-black/60 transition hover:text-primary'>
                  +234 903 473 1883
                </span>
              </Link>
              <Link href='mailto:hisgraceministryint@gmail.com' className='flex w-fit items-center'>
                <Icon
                  icon='solar:mailbox-bold'
                  className='me-3 shrink-0 text-2xl text-primary'
                />
                <span className='break-all text-base text-black/60 transition hover:text-primary'>
                  hisgraceministryint@gmail.com
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className='py-5 text-center'>
          <p className='text-sm text-black/50'>
            © {new Date().getFullYear()} His Grace Ministry International. <br /> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
