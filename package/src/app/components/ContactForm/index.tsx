import { Icon } from '@iconify/react'

const ContactForm = () => {
  return (
    <section id='contact' className='scroll-mt-12'>
      <div className='container'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>
            We would love to hear from you
          </p>
          <h2 className='text-midnight_text'>Get in Touch</h2>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600'>
            Have a question or want to connect? Send us a message directly on
            WhatsApp.
          </p>

          <a
            href='https://wa.me/2349034731883?text=Hello%2C%20I%27d%20like%20to%20get%20in%20touch.'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'>
            <Icon icon='tabler:brand-whatsapp' aria-hidden='true' className='text-2xl' />
            Chat with us on WhatsApp
          </a>

          <div className='mt-12 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 sm:px-10'>
            <p className='text-sm font-semibold uppercase tracking-[0.16em] text-primary'>
              Stay connected
            </p>
            <h3 className='mt-2 text-2xl font-semibold text-midnight_text'>
              Join our vibrant community
            </h3>
            <p className='mx-auto mt-3 max-w-xl leading-7 text-slate-600'>
              Connect with others, share encouragement and be part of the
              conversation in our WhatsApp community.
            </p>
            <a
              href='https://chat.whatsapp.com/KT7uM1uVfhh7ivN8HbqjfN?s=cl&p=a&iam=2'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'>
              <Icon icon='tabler:users-group' aria-hidden='true' className='text-xl' />
              Join the WhatsApp community
              <Icon icon='tabler:arrow-up-right' aria-hidden='true' className='text-lg' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
