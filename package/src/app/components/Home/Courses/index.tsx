'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CourseType } from '@/app/types/course'
import CourseSkeleton from '../../Skeleton/Course'

const Courses = () => {
  const [course, setCourse] = useState<CourseType[]>([])
  const [selectedBook, setSelectedBook] = useState<CourseType | null>(null)
  const [loading, setLoading] = useState(true)
  const sliderRef = useRef<Slider | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setCourse(Array.isArray(data.CourseData) ? data.CourseData : [])
      } catch (error) {
        console.error('Error fetching service:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!selectedBook) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedBook(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedBook])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars

    return (
      <div>
        {Array.from({ length: fullStars }, (_, index) => (
          <Icon
            key={`full-${index}`}
            icon='tabler:star-filled'
            className='text-yellow-500 text-xl inline-block'
          />
        ))}
        {halfStars > 0 && (
          <Icon
            key='half'
            icon='tabler:star-half-filled'
            className='text-yellow-500 text-xl inline-block'
          />
        )}
        {Array.from({ length: emptyStars }, (_, index) => (
          <Icon
            key={`empty-${index}`}
            icon='tabler:star-filled'
            className='text-gray-400 text-xl inline-block'
          />
        ))}
      </div>
    )
  }

  return (
    <section id='books' className='scroll-mt-12 pb-20'>
      <div className='container'>
        <div className='sm:flex justify-between items-center mb-10'>
          <h2 className='text-midnight_text mb-5 sm:mb-0 capitalize'>
            Books in Store
          </h2>
          <Link
            href={'#books'}
            className='text-primary text-lg font-medium hover:underline duration-500'>
            Browse All Books&nbsp;&gt;
          </Link>
        </div>
        <div className='relative'>
          <Slider ref={sliderRef} {...settings}>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <CourseSkeleton key={i} />
                ))
              : course.map((items) => (
                <div key={items.heading}>
                  <div
                    role='button'
                    tabIndex={0}
                    aria-haspopup='dialog'
                    onClick={() => setSelectedBook(items)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setSelectedBook(items)
                      }
                    }}
                    aria-label={`View details for ${items.heading}`}
                    className='h-full w-full text-left'>
                  <div className='m-3 flex h-[44rem] flex-col rounded-2xl border border-black/10 bg-white px-3 pt-3 pb-8 shadow-md'>
                    <div className='relative flex h-80 shrink-0 items-center justify-center rounded-2xl bg-slate-50'>
                        <Image
                          src={items.imgSrc}
                          alt={items.heading}
                          width={389}
                          height={262}
                          className='h-full w-full rounded-2xl object-contain'
                        />
                      <div className='absolute right-4 top-4 rounded-full border border-black/10 bg-white/90 px-3 py-1 shadow-sm'>
                        <p className='text-center text-xs font-medium uppercase text-black/65'>
                          {items.selarUrl ? 'Available on Selar' : 'Coming soon'}
                        </p>
                      </div>
                    </div>

                    <div className='flex min-h-0 flex-1 flex-col px-3 pt-6'>
                      <h3 className='line-clamp-2 min-h-14 text-2xl font-semibold text-black hover:text-primary'>
                        {items.heading}
                      </h3>
                      <p className='text-base font-normal pt-6 text-black/75'>
                        {items.author}
                      </p>
                      <div className='flex justify-between items-center py-6 border-b'>
                        <div className='flex items-center gap-4'>
                          <p className='text-red-700 text-2xl font-medium'>
                            {items.rating.toFixed(1)}
                          </p>
                          <div className='flex'>
                            {renderStars(items.rating)} {/* Dynamic stars */}
                          </div>
                        </div>
                        <p className='text-sm font-medium text-slate-600'>
                          {items.selarUrl ? 'Buy on Selar' : 'Coming soon'}
                        </p>
                      </div>
                      <div className='mt-auto flex justify-end pt-6'>
                        <div className='flex gap-4'>
                          <Icon
                            icon='solar:users-group-rounded-linear'
                            className='text-primary text-xl inline-block me-2'
                          />
                          <p className='text-base font-medium text-black/75'>
                            {items.viewers} viewers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
          </Slider>
          <div className='pointer-events-none absolute inset-x-0 top-44 z-20 flex -translate-y-1/2 justify-between'>
            <button
              type='button'
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label='Show previous books'
              title='Previous books'
              className='pointer-events-auto grid size-10 place-items-center rounded-full border border-black/10 bg-white/95 text-black shadow-lg transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
              <Icon icon='tabler:chevron-left' className='text-2xl' />
            </button>
            <button
              type='button'
              onClick={() => sliderRef.current?.slickNext()}
              aria-label='Show next books'
              title='Next books'
              className='pointer-events-auto grid size-10 place-items-center rounded-full border border-black/10 bg-white/95 text-black shadow-lg transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
              <Icon icon='tabler:chevron-right' className='text-2xl' />
            </button>
          </div>
        </div>
      </div>
      {selectedBook && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-8'
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedBook(null)
          }}>
          <section
            role='dialog'
            aria-modal='true'
            aria-labelledby='book-dialog-title'
            className='relative grid h-[90vh] w-full max-w-5xl grid-cols-1 grid-rows-[30vh_minmax(0,1fr)] overflow-hidden bg-white shadow-2xl md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:grid-rows-1'>
            <button
              type='button'
              onClick={() => setSelectedBook(null)}
              aria-label='Close book details'
              className='absolute right-3 top-3 z-10 inline-flex h-10 items-center gap-2 rounded-full border border-black/10 bg-white/95 px-4 text-sm font-medium text-black shadow-lg backdrop-blur-sm transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-5 sm:top-5'>
              <Icon icon='material-symbols:close-rounded' className='text-lg' />
              Cancel
            </button>
            <div className='flex min-h-0 items-center justify-center bg-slate-50 p-4 sm:p-8 md:p-12'>
              <Image
                src={selectedBook.imgSrc}
                alt={selectedBook.heading}
                width={560}
                height={740}
                className='h-full max-h-[70vh] w-auto max-w-full object-contain'
                priority
              />
            </div>
            <div className='flex min-h-0 flex-col overflow-y-auto p-6 sm:p-10 lg:p-12'>
              <div className='mb-8'>
                <p className='text-sm font-semibold uppercase text-primary'>
                  Book details
                </p>
              </div>
              <h2 id='book-dialog-title' className='text-midnight_text'>
                {selectedBook.heading}
              </h2>
              <p className='mt-3 text-lg text-black/60'>
                By {selectedBook.author}
              </p>
              <p className='mt-8 whitespace-pre-line text-base leading-7 text-black/75'>
                {selectedBook.summary}
              </p>
              <div className='mt-auto pt-10'>
                {selectedBook.selarUrl ? (
                  <a
                    href={selectedBook.selarUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center justify-center bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90'>
                    Order on Selar
                  </a>
                ) : (
                  <div>
                    <button
                      type='button'
                      disabled
                      className='cursor-not-allowed bg-primary/40 px-6 py-3 font-semibold text-white'>
                      Order on Selar
                    </button>
                    <p className='mt-3 text-sm text-black/55'>
                      Purchase link coming soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}

export default Courses
