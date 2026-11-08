import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { forewords } from '@/app/data/forewords'

type ForewordPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return forewords.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ForewordPageProps): Promise<Metadata> {
  const { slug } = await params
  const foreword = forewords.find((item) => item.slug === slug)

  return {
    title: foreword ? `Foreword by ${foreword.name}` : 'Foreword',
    description: foreword?.preview,
  }
}

export default async function ForewordPage({ params }: ForewordPageProps) {
  const { slug } = await params
  const foreword = forewords.find((item) => item.slug === slug)

  if (!foreword) notFound()

  return (
    <main className='min-h-screen bg-slate-50 pb-20 pt-28 sm:pt-32'>
      <div className='container'>
        <Link
          href='/#foreword'
          className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-primary'>
          <Icon icon='tabler:arrow-left' aria-hidden='true' />
          Back to all forewords
        </Link>

        <article className='mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'>
          <header className='bg-deep-slate px-6 py-10 sm:px-12 sm:py-14'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>
              A word of recommendation
            </p>
            <h1 className='text-4xl font-semibold text-midnight_text sm:text-5xl'>
              Foreword
            </h1>
            <div className='mt-8 flex items-center gap-4'>
              <Image
                src={foreword.imgSrc}
                alt={foreword.name}
                width={80}
                height={80}
                className='h-20 w-20 rounded-full border-4 border-white object-cover shadow-md'
                priority
              />
              <div>
                <h2 className='text-xl font-semibold text-midnight_text'>
                  {foreword.name}
                </h2>
                <p className='mt-1 text-sm leading-6 text-slate-600'>
                  {foreword.profession}
                </p>
              </div>
            </div>
          </header>

          <div className='px-6 py-9 sm:px-12 sm:py-12'>
            <div className='space-y-6 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9'>
              {foreword.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className='mt-10 border-t border-slate-200 pt-6 text-base font-semibold leading-7 text-midnight_text'>
              {foreword.signature.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
