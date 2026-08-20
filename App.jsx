import { useState } from 'react'

const WHATSAPP_LINK =
  'https://wa.me/97400000000?text=Assalamu%20alaikum%2C%20I%27d%20like%20to%20book%20a%20free%2015-minute%20assessment%20for%20my%20child.'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Plans', href: '#plans' },
  { label: 'FAQ', href: '#faq' },
]

const JOURNEY_STEPS = [
  { n: '01', label: 'Free assessment' },
  { n: '02', label: 'Right level & class' },
  { n: '03', label: 'Live weekly lessons' },
  { n: '04', label: 'Monthly progress' },
]

const CURRICULUM = [
  { title: "Qur'an", sub: 'Reading & Tajweed' },
  { title: 'Arabic', sub: 'Reading & Writing' },
  { title: 'Memorisation', sub: 'Surahs & Du\u2019as' },
  { title: 'Islamic Studies', sub: 'Knowledge & Manners' },
]

const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'Assess',
    body: "We spend 15 minutes getting to know your child and checking their current Qur'an and Arabic level.",
  },
  {
    n: '02',
    title: 'Place',
    body: "We recommend the right level and class plan based on your child's needs and your family's schedule.",
  },
  {
    n: '03',
    title: 'Learn',
    body: 'Your child joins live, structured lessons in a small group with clear goals and regular practice.',
  },
  {
    n: '04',
    title: 'Progress',
    body: 'You receive regular feedback so you can see what your child has learned and what comes next.',
  },
]

const PLANS = [
  {
    name: 'Starter',
    price: 'QAR 120',
    features: ['2 classes per week', '30\u201340 minutes', 'Small group'],
    cta: 'Start with Starter',
    featured: false,
  },
  {
    name: 'Progress',
    price: 'QAR 180',
    features: [
      '3 classes per week',
      '40 minutes',
      'Small group',
      'Monthly progress report',
    ],
    cta: 'Choose Progress',
    featured: true,
  },
  {
    name: 'Intensive',
    price: 'QAR 280',
    features: [
      '4 classes per week',
      '45 minutes',
      'Smaller group',
      'Monthly progress report',
      'Monthly 1-to-1 assessment',
    ],
    cta: 'Choose Intensive',
    featured: false,
  },
]

const WHY_US = [
  {
    title: 'Small classes',
    body: 'Your child gets attention without paying private-tutor prices.',
  },
  {
    title: 'Flexible schedules',
    body: 'Choose class times that work around school and family routines.',
  },
  {
    title: 'Progress tracking',
    body: 'Know what your child is learning and what they should work on next.',
  },
  {
    title: 'Child-friendly teaching',
    body: 'Lessons are structured to keep young learners engaged and encouraged.',
  },
]

const LEVELS = [
  {
    tag: 'Level 1',
    title: 'Foundation',
    body: 'Arabic letters, sounds, Qaida basics, short surahs, basic du\u2019as and learning habits.',
  },
  {
    tag: 'Level 2',
    title: 'Reader',
    body: "Qur'an reading, basic Tajweed, Arabic reading and writing, memorisation and Islamic vocabulary.",
  },
  {
    tag: 'Level 3',
    title: 'Developing',
    body: 'Reading fluency, Tajweed improvement, Arabic comprehension, longer memorisation and Islamic studies.',
  },
]

const FAQS = [
  {
    q: 'What age do you teach?',
    a: 'We teach children aged 5 to 15, grouped by age and current level so lessons stay engaging and appropriately paced.',
  },
  {
    q: 'Are the classes live or recorded?',
    a: 'All classes are live and interactive, taught by a teacher in a small group \u2014 not pre-recorded videos.',
  },
  {
    q: 'How do you know which class is right for my child?',
    a: "Every child starts with a free 15-minute assessment. We use this to recommend the right level and class plan for your child.",
  },
  {
    q: 'What if my child is a complete beginner?',
    a: 'That\u2019s completely fine. Our Foundation level is built for children starting from the very first Arabic letters.',
  },
  {
    q: 'What time are classes?',
    a: 'We offer a range of Qatar-friendly time slots after school and in the evening. You can choose what fits your family\u2019s routine.',
  },
  {
    q: 'How do I enrol?',
    a: 'Book a free assessment via WhatsApp. Once we recommend a level and plan, we\u2019ll help you get your child scheduled into a class.',
  },
]

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold sm:text-lg">{q}</span>
        <span
          className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink text-sm transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <p className="max-w-2xl pr-10 font-body text-sm leading-relaxed text-ink/70 sm:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between sm:h-20">
          <a href="#top" className="font-display text-base font-extrabold tracking-tight sm:text-lg">
            ArabicWithCloud
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#assessment"
              className="hidden rounded-full bg-ink px-5 py-2.5 font-display text-sm font-semibold text-paper transition-opacity hover:opacity-85 sm:inline-block"
            >
              Book Free Assessment
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ink/20 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-ink transition-transform ${
                    menuOpen ? 'translate-y-1.5 rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-px w-4 bg-ink transition-transform ${
                    menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-ink/10 bg-paper md:hidden">
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 font-body text-sm font-medium text-ink/70"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#assessment"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-2.5 text-center font-display text-sm font-semibold text-paper"
              >
                Book Free Assessment
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="container-page grid gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
            <div className="animate-fadeUp">
              <p className="eyebrow mb-6">Live Online Classes &middot; For Children in Qatar</p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Give your child a strong foundation in Qur&rsquo;an &amp; Arabic.
              </h1>
              <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink/70 sm:text-lg">
                Small, engaging online classes that help children build confidence in
                Qur&rsquo;an reading, Arabic and Islamic foundations &mdash; from the comfort of
                home.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#assessment"
                  className="rounded-full bg-ink px-7 py-3.5 text-center font-display text-sm font-semibold text-paper transition-opacity hover:opacity-85"
                >
                  Book a Free Assessment
                </a>
                <a
                  href="#plans"
                  className="rounded-full border border-ink px-7 py-3.5 text-center font-display text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  View Plans
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-ink/60">
                <li className="flex items-center gap-1.5">
                  <span aria-hidden="true">&#10003;</span> Ages 5&ndash;15
                </li>
                <li className="flex items-center gap-1.5">
                  <span aria-hidden="true">&#10003;</span> Small groups
                </li>
                <li className="flex items-center gap-1.5">
                  <span aria-hidden="true">&#10003;</span> Qatar-friendly schedules
                </li>
              </ul>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-[2.5rem] border border-ink/10">
                <span
                  className="font-display text-[8rem] leading-none text-ink sm:text-[10rem]"
                  aria-hidden="true"
                >
                  &#1575;
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY STRIP */}
        <section className="border-y border-ink/10 bg-ink text-paper">
          <div className="container-page py-10">
            <p className="eyebrow mb-6 text-paper/60">Your Child&rsquo;s Journey</p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {JOURNEY_STEPS.map((step) => (
                <div key={step.n}>
                  <p className="font-display text-xs font-semibold text-paper/40">{step.n}</p>
                  <p className="mt-2 font-display text-sm font-semibold leading-snug sm:text-base">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM PILLS */}
        <section>
          <div className="container-page grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-4">
            {CURRICULUM.map((item) => (
              <div key={item.title} className="bg-paper px-5 py-8 text-center">
                <p className="font-display text-sm font-bold sm:text-base">{item.title}</p>
                <p className="mt-1 font-body text-xs text-ink/60 sm:text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 sm:py-28">
          <div className="container-page">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              A simple learning journey for your child.
            </h2>

            <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map((step) => (
                <div key={step.n} className="border-t border-ink pt-6">
                  <p className="font-display text-sm font-semibold text-ink/40">{step.n}</p>
                  <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section id="plans" className="border-t border-ink/10 bg-ink text-paper">
          <div className="container-page py-20 sm:py-28">
            <p className="eyebrow mb-4 text-paper/60">Simple Monthly Plans</p>
            <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Choose the right pace for your child.
            </h2>
            <p className="mt-4 max-w-lg font-body text-sm text-paper/60 sm:text-base">
              Affordable, structured learning without the cost of private in-person
              tutoring.
            </p>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl border p-8 ${
                    plan.featured
                      ? 'border-paper bg-paper text-ink'
                      : 'border-paper/20 bg-transparent text-paper'
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-ink px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-widest2 text-paper">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  <p className="mt-3 font-display text-3xl font-extrabold">
                    {plan.price}
                    <span
                      className={`ml-1 font-body text-sm font-normal ${
                        plan.featured ? 'text-ink/50' : 'text-paper/50'
                      }`}
                    >
                      / month
                    </span>
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 font-body text-sm ${
                          plan.featured ? 'text-ink/75' : 'text-paper/75'
                        }`}
                      >
                        <span aria-hidden="true" className="mt-0.5">
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#assessment"
                    className={`mt-8 rounded-full px-6 py-3 text-center font-display text-sm font-semibold transition-opacity hover:opacity-85 ${
                      plan.featured ? 'bg-ink text-paper' : 'border border-paper text-paper'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-20 sm:py-28">
          <div className="container-page">
            <p className="eyebrow mb-4">Why Families Choose Us</p>
            <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Learning that is structured, personal and easy to fit around family life.
            </h2>

            <div className="mt-16 grid gap-10 sm:grid-cols-2">
              {WHY_US.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-ink" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/70 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEVELS */}
        <section className="border-t border-ink/10 py-20 sm:py-28">
          <div className="container-page">
            <p className="eyebrow mb-4">What Your Child Can Learn</p>
            <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              From first letters to confident Qur&rsquo;an reading.
            </h2>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {LEVELS.map((level) => (
                <div key={level.tag} className="rounded-3xl border border-ink/10 p-8">
                  <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-ink/50">
                    {level.tag}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold">{level.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{level.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-ink/10 py-20 sm:py-28">
          <div className="container-page">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Questions parents usually ask.
            </h2>

            <div className="mt-14 max-w-2xl border-t border-ink/10">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ASSESSMENT CTA */}
        <section id="assessment" className="border-t border-ink/10 bg-ink text-paper">
          <div className="container-page flex flex-col items-start gap-8 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow mb-4 text-paper/60">Start With A Free Assessment</p>
              <h2 className="max-w-md font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Let&rsquo;s find the right starting point for your child.
              </h2>
              <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-paper/70 sm:text-base">
                Book a free 15-minute assessment. We&rsquo;ll check your child&rsquo;s current
                level and recommend the best class.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none rounded-full bg-paper px-8 py-4 text-center font-display text-sm font-semibold text-ink transition-opacity hover:opacity-85"
            >
              WhatsApp to Book
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-ink/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm font-extrabold tracking-tight">ArabicWithCloud</p>
            <p className="mt-1 font-body text-xs text-ink/50">
              Online Qur&rsquo;an &amp; Arabic learning for children.
            </p>
          </div>
          <p className="font-body text-xs text-ink/40">
            &copy; {new Date().getFullYear()} ArabicWithCloud. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
