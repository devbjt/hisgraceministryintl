import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section id='home-section' className='bg-slate-gray'>
      <div className='container pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-1 gap-10 items-center'>
          <div className='col-span-6 flex flex-col gap-8'>
            <div className='flex gap-2 mx-auto lg:mx-0'>
              <Icon
                icon='solar:verified-check-bold'
                className='text-success text-xl inline-block me-2'
              />
              <p className='text-success text-sm font-semibold text-center lg:text-start tracking-widest uppercase'>
                Be The First to Preorder
              </p>
            </div>
            <h1 className='text-midnight_text lg:text-start text-center font-semibold leading-tight capitalize'>
              Living the Quality of Life God ordained 
            </h1>
            <p className='text-black/70 text-lg lg:text-start text-center max-w-xl capitalize'>
              Get a copy of our latest book and learn how to live a life of purpose, joy, and fulfillment. Preorder now and be the first to receive your copy!
            </p>
            <div className='flex items-center justify-between pt-10 lg:pt-4 flex-wrap gap-4'>
              <div className='flex gap-2'>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Faith-Inspiring Christian Books
                </p>
              </div>
              <div className='flex gap-2'>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Equipping You to Live Your God-Given Purpose
                </p>
              </div>
              <div className='flex gap-2'>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Christ-Centered Material for Growth
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-6 flex justify-center'>
            <Image
              src='/images/banner/books.jpeg'
              alt='nothing'
              width={1000}
              height={805} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
