import Author from '@/app/components/Home/Author'
import Companies from '@/app/components/Home/Companies'
import Courses from '@/app/components/Home/Courses'
import Hero from '@/app/components/Home/Hero'
import Testimonial from '@/app/components/Home/Testimonials'
import ContactForm from '@/app/components/ContactForm'

export default function HomeContent() {
  return (
    <main>
      <Hero />
      <Companies />
      <Courses />
      <Author />
      <Testimonial />
      <ContactForm />
    </main>
  )
}
