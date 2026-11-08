import { CourseType } from '@/app/types/course'
import { TestimonialType } from '@/app/types/testimonial'
import { forewords } from '@/app/data/forewords'
import { NextResponse } from 'next/server'

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/1fr.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
  {
    imgSrc: '/images/companies/google.svg',
  },
  {
    imgSrc: '/images/companies/hubspot.svg',
  },
  {
    imgSrc: '/images/companies/microsoft.svg',
  },
  {
    imgSrc: '/images/companies/walmart.svg',
  },
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
]

const CourseData: CourseType[] = [
  {
    heading: 'Knowing God\'s Will In Choosing A Life Partner',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/1F.jpeg',
    selarUrl: 'https://selar.com/518221r17g',
    summary: 'Knowing God’s Will in Choosing a Life Partner helps singles approach relationships with faith, wisdom and confidence.\n\nThrough biblical teaching, relatable stories, reflections and prayers, J.I Bamidele explores hearing God, recognising character, understanding compatibility, setting boundaries and identifying warning signs.\nThe book encourages readers to combine prayer with honest conversations and sound judgment, without yielding to fear or spiritual pressure.\nIts central message is clear: choosing wisely involves knowing God, understanding yourself and knowing the person you intend to marry.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 4.4,
  },
  {
    heading: 'Before You Choose',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/bycf.jpeg',
    selarUrl: 'https://selar.com/6b764i4696',
    summary: 'Before You Choose by J.I Bamidele helps young Christians understand their identity, recognise their abilities and make purposeful decisions amid the pressure to “meet up.”\n\nThrough relatable Nigerian stories, biblical teaching and practical exercises, the book addresses comparison, quick-money temptations, education, careers, relationships, money and character.\nIt encourages readers to combine faith with sound judgement, develop their capacity and seek trustworthy guidance.\nFor those who have already made painful mistakes, it offers a path towards responsibility, restoration and fresh beginnings. A purpose workbook and ninety-day plan help readers turn reflection into action.\nIts central message is simple: You do not have to destroy yourself to become somebody.',
    viewers: 130,
    pages: 12,
    price: 0,
    rating: 4.5,
  },
  {
    heading: 'Christian Youth and Struggles',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/cysf.jpeg',
    selarUrl: 'https://selar.com/uke2077642',
    summary: 'Christian Youth and Struggles by J.I Bamidele offers practical, biblical guidance for young people navigating faith, identity, relationships and the pressures of everyday life.\n\nIt addresses emotional well-being, sexual purity, social media comparison, education, work, finances and disappointment within the church. Through Scripture, reflection questions and practical exercises, it encourages readers to build healthy habits, seek trustworthy support and learn from setbacks.\nIts central message is reassuring: loving God does not mean you will never struggle. Growth involves honesty, wise choices, receiving help and continuing to walk with Christ—even when progress feels slow.\nThe book also encourages parents, pastors and mentors to listen compassionately and support young people without shame or control.',
    viewers: 120,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'Eternal Security',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/eternalsecurity.jpeg',
    selarUrl: 'https://selar.com/h1in4h448y',
    summary: 'Eternal Security explores whether a person who truly belongs to Christ can finally lose their salvation.\n\nJ.I Bamidele presents a case for God’s preserving grace while carefully considering biblical warnings and differing Christian interpretations. Through practical teaching and reflection questions, the book connects assurance with repentance, accountability and continuing faith—encouraging readers to find confidence in Christ and live faithfully.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'When Life is Too Heavy',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/heavy.jpeg',
    selarUrl: 'https://selar.com/4xi06xd115',
    summary: 'When Life Is Too Heavy — Come to Jesus by J.I Bamidele is an evangelistic invitation to people weighed down by shame, disappointment, confusion, emotional pain and everyday pressures.\n\nWritten in a warm, relatable Nigerian voice and anchored in Acts 4:12, the book presents Jesus Christ as the only Saviour. It explains sin, God’s love, Christ’s death and resurrection, repentance, forgiveness and new life through faith in him.\nThrough familiar situations and biblical teaching, readers are invited to come honestly to Jesus, move beyond religious performance and begin following him. The book includes a prayer of response, practical guidance for new believers, answers to common questions and a seven-day Scripture reading plan.\nIts central message is clear: you do not have to put your life together before coming to Jesus. Come to him for forgiveness, lasting hope and a new beginning.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'Ready For Love',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/lovef.jpeg',
    selarUrl: 'https://selar.com/z1gtq8yz83',
    summary: 'Ready for Love helps young people understand when to begin dating, enter courtship and prepare for marriage.\n\nWritten from a Christian perspective, it addresses family pressure, emotional maturity, character, compatibility, finances and seeking God’s guidance. Through relatable examples, reflection exercises and a readiness workbook, the book encourages readers to prepare responsibly instead of rushing because of age, attraction or pressure from others.\nIts central message is clear: begin dating when you can responsibly get to know someone; begin courtship when both of you are seriously considering marriage; marry when you are freely willing and sufficiently prepared to build a life together.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'Love Without Confusion',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/lwcf.jpeg',
    selarUrl: 'https://selar.com/0bod4e0311',
    summary: 'Love Without Confusion by J.I Bamidele is a practical Christian guide to dating, discernment and marriage, written especially for Nigerian singles.\n\nThrough relatable stories, biblical reflection and practical exercises, the book helps readers understand themselves, clarify relationship intentions, examine character and recognise whether they can build a life together. It addresses sexual boundaries, finances, family expectations, spiritual pressure, disagreements and harmful relationships.\nThe book encourages readers to combine prayer with sound judgment, ask difficult questions and make decisions freely. Its workbook provides tools for setting boundaries, discussing engagement and preparing realistically for marriage.\nAt its heart is a simple message: love wisely, choose honestly and remember that marriage does not determine your worth.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'I Am Not Failure',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/notfailf.jpeg',
    selarUrl: 'https://selar.com/1fvp919791',
    summary: 'I Am Not a Failure: I Carry Possibilities by J.I Bamidele speaks to young people struggling with academic setbacks, rejection, family expectations and comparison with their mates.\n\nThrough familiar experiences, biblical reflections, affirmations and practical exercises, the book helps readers separate their worth from disappointing results. It encourages them to acknowledge mistakes, improve their methods, seek support and rebuild confidence.\nA thirty-day action plan gives direction, while guidance for parents and mentors explains how to correct without crushing hope.\nIts central message is clear: you can experience failure without becoming a failure. Your life still carries possibilities.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'Christian Theologians, Philosophers & Scholars',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/PandS.jpeg',
    summary: 'Christian Theologians, Philosophers and Scholars: Their Lives, Works and Ideas, a research work by J.I Bamidele, introduces 104 individuals associated with Christian intellectual history, from the early Church to African and global Christianity.\n\nThe book explores their backgrounds, major writings, central ideas and influence. It traces early Christian foundations, medieval thought, the Reformation, modern theology, Christian philosophy, biblical scholarship and African contributions.\nDesigned for students, pastors, teachers and interested readers, it includes a historical overview, theological glossary, guided reading programme, reflection questions and alphabetical index. It encourages readers to understand thinkers in their historical settings, examine differing perspectives fairly and consult their original works.\nIt is a selective reference guide, rather than an exhaustive catalogue of every Christian thinker.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'Little Hearts Big Bible Adventures',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/children.jpeg',
    summary: 'Little Hearts, Big Bible Adventures by J.I Bamidele is a colourful, one-year Bible learning book for children aged 3–7. Its 52 weekly lessons take children from creation and familiar Old Testament stories to the life, teachings, death and resurrection of Jesus, followed by the early church.\n\nEach lesson combines a simple story with questions, memory verses, prayers, games, crafts and workbook activities. Through colouring, counting, tracing, storytelling and practical acts of kindness, children explore faith, honesty, forgiveness, gratitude and love.\nDesigned for parents and Sunday-school teachers, the book includes age-appropriate guidance, answer notes, review activities and a completion certificate—helping children learn about God through joyful, supported discovery.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'The Pride Trap',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/pride.jpeg',
    selarUrl: 'https://selar.com/7p0cw4074s',
    summary: 'The Pride Trap by J.I Bamidele helps young people, church workers and leaders recognise when faithful service becomes a desire for recognition, superiority or control.\n\nDrawing from 1 John 2:16, it distinguishes healthy self-worth from pride through practical church stories and personal reflections. Readers learn to receive correction, maintain healthy boundaries, share responsibility and celebrate others—remembering that their gifts matter, while the church belongs to Christ.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'The Surrendered Life',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/Surrrenderf.jpeg',
    summary: 'The Surrendered Life by J.I Bamidele speaks to young people who sincerely love God but feel trapped in repeated sin, secrecy, pornography, harmful sexual behaviour, alcohol misuse, or gambling.\n\nThrough Scripture and relatable Nigerian stories, its twelve chapters explore shame, temptation, repentance, surrender, and rebuilding after setbacks. Readers are encouraged to identify harmful patterns, establish practical boundaries, seek trustworthy accountability, and receive professional care where needed.\nThe book includes reflection exercises, prayers, a thirty-day practical companion, and guidance for parents and church leaders.\nIts central invitation is compassionate and challenging: bring your real struggles to God, stop hiding, and take the next responsible step towards lasting change.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'The World of Philosophy',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/twop.jpeg',
    summary: 'The World of Philosophy by J.I Bamidele introduces 149 thinkers from major world traditions, alongside a separate exploration of Ubuntu. Each profile provides a brief background, selected works, core ideas, positions challenged, and a critical perspective.\n\nWritten for readers encountering philosophy for the first time, the book explores questions about God, knowledge, reality, morality, freedom, justice, and human existence. Comparative chapters, everyday examples, a glossary, and reading guides help readers understand different viewpoints and develop thoughtful judgments.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
  {
    heading: 'The Youth and The Church',
    author: 'J.I Bamidele',
    imgSrc: '/images/book/tyacf.jpeg',
    selarUrl: 'https://selar.com/4yi775k3s2',
    summary: 'The Youth and the Church by J. I. Bamidele explores how young people can become rooted in Christ, equipped for everyday life, and prepared to serve meaningfully.\n\nAcross twelve chapters, it addresses identity, discipleship, digital influence, purpose, economic hardship, relationships, holiness, and leadership. Drawing on Scripture and relatable Nigerian experiences, it also examines difficult issues such as church hurt, favouritism, family pressure, and volunteer exhaustion.\nThe book challenges young people to develop character and accept responsibility, while encouraging churches to listen, mentor, protect, and provide meaningful opportunities. Its central message is that young people belong to the church today—and investing in their spiritual and practical growth strengthens the church for tomorrow.',
    viewers: 150,
    pages: 12,
    price: 0,
    rating: 5.0,
  },
]

const TestimonialData: TestimonialType[] = forewords.map((foreword) => ({
  slug: foreword.slug,
  name: foreword.name,
  profession: foreword.profession,
  comment: foreword.preview,
  imgSrc: foreword.imgSrc,
  rating: 5,
}))

export const GET = () => {
  return NextResponse.json({
    TechGaintsData,
    CourseData,
    TestimonialData,
  })
}
