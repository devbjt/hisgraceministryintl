import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { forewords } from '@/app/data/forewords'

const Testimonial = () => {
  return (
    <section id='foreword' className='bg-slate-50'>
      <div className='container'>
        <div className='mx-auto mb-12 max-w-2xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>
            Words of wisdom
          </p>
          <h2 className='text-midnight_text'>Foreword</h2>
          <p className='mt-4 text-base leading-7 text-slate-600'>
            Read what these trusted voices have to say about the books and the
            guidance within.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {forewords.map((foreword) => (
            <Link
              key={foreword.slug}
              href={`/foreword/${foreword.slug}`}
              className='group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'>
              <div className='mb-6 flex items-center gap-4'>
                <Image
                  src={foreword.imgSrc}
                  alt={foreword.name}
                  width={72}
                  height={72}
                  className='h-[72px] w-[72px] rounded-full border-2 border-white object-cover shadow-md'
                />
                <div>
                  <h3 className='text-lg font-semibold leading-snug text-midnight_text'>
                    {foreword.name}
                  </h3>
                  <p className='mt-1 text-sm leading-5 text-slate-500'>
                    {foreword.profession}
                  </p>
                </div>
              </div>

              <Icon
                icon='tabler:quote'
                aria-hidden='true'
                className='mb-2 text-3xl text-primary/70'
              />
              <p className='flex-1 text-base leading-7 text-slate-600'>
                {foreword.preview}
              </p>

              <span className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary'>
                Read the full foreword
                <Icon
                  icon='tabler:arrow-up-right'
                  aria-hidden='true'
                  className='text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
