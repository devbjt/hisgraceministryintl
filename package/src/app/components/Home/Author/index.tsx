'use client'

import Image from 'next/image'
import { useState } from 'react'

const Author = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className='bg-deep-slate py-16 lg:py-24' id='author' aria-labelledby='author-heading'>
      <div className='container grid items-center gap-10 lg:grid-cols-2 lg:gap-20'>
        <div className='mx-auto w-full max-w-[26rem] lg:max-w-none'>
          <Image
            src='/images/mentor/user1.webp'
            alt='Bamidele Juwon Israel'
            width={560}
            height={560}
            className='h-auto w-full object-contain'
          />
        </div>
        <div className='max-w-2xl'>
          <p className='mb-4 text-sm font-semibold uppercase text-primary'>
            The Author
          </p>
          <h2 id='author-heading' className='text-midnight_text'>
            Bamidele Juwon Israel
          </h2>
          <p className='mt-4 text-lg font-medium text-black/60'>
            Gospel Minister, Youth Pastor &amp; Author
          </p>
          <p className='mt-8 text-lg leading-8 text-black/75'>
            I am Bamidele Juwon Israel, known as “His Grace,” and I write as
            J. I. Bamidele. By God&apos;s grace, I serve as a Gospel minister,
            youth pastor, Bible teacher, researcher and Christian author. I help
            young people apply Scripture to questions of faith, identity,
            relationships and everyday life.
          </p>
          <div id='author-biography'>
            {isExpanded && (
              <div className='mt-5 space-y-5 text-lg leading-8 text-black/75'>
                <p>
                  I hold a BA in Religious Studies and write on relationships,
                  purpose, Christian living, spiritual growth, research and
                  devotionals. By God&apos;s grace, I have authored books
                  including <em>Knowing God&apos;s Will</em>, <em>Before You Choose</em>,
                  <em> Love Without Confusion</em>, <em>Ready for Love</em>,
                  <em> The Pride Trap</em>, <em>When Life Is Too Heavy</em>,
                  <em> Eternal Security</em>, <em>Christian Youth and Struggles</em>,
                  <em> The Youth and the Church</em>, <em>I Am Not a Failure</em>,
                  and <em>The World of Philosophy</em>.
                </p>
                <p>
                  Following the Holy Spirit&apos;s direction, I help young people
                  think honestly about life, grow in their faith and take
                  responsible next steps. I believe there is a solution to every
                  problem.
                </p>
              </div>
            )}
          </div>
          <button
            type='button'
            aria-expanded={isExpanded}
            aria-controls='author-biography'
            onClick={() => setIsExpanded(!isExpanded)}
            className='mt-6 inline-flex font-medium text-primary hover:underline'
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Author