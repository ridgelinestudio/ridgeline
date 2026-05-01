'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const serviceBlocks = [
  { number: '01', title: 'Gym Website Design', heading: "A website built around one goal: get visitors to book a trial.", body: 'We design from scratch — no templates, no drag-and-drop builders. Every layout decision is made with conversion in mind. The headline, the button placement, the hero image — all of it is intentional. Most gym websites look fine but do nothing. We fix that.', tags: ['Custom Design', 'Conversion-focused', 'Mobile-first'], visualLine: 'Built to convert from first click' },
  { number: '02', title: 'Website Development', heading: 'Fast, clean code. No platform lock-in.', body: 'We build on Next.js hosted on Vercel. Your site loads in under 1.5 seconds, scores well on Core Web Vitals, and you own the code outright. No monthly Wix fees. No Squarespace tax. No platform holding your site hostage.', tags: ['Next.js', 'Sub-1.5s load', 'You own it'], visualLine: 'Performance-first engineering' },
  { number: '03', title: 'Booking & Class Scheduling', heading: "A booking flow that doesn't lose people halfway through.", body: 'We integrate with your existing booking system or set up a simple, frictionless flow. Visitors go from landing page to confirmed trial without needing to call, email, or figure out a complicated form. Less friction = more bookings.', tags: ['Booking integration', 'CRM handoff', 'Lead capture'], visualLine: 'Less friction, more bookings' },
  { number: '04', title: 'SEO & Growth Optimization', heading: 'Show up when local people search for a gym.', body: "We set up on-page SEO, Google Business optimisation, and a content structure that gives you a real shot at ranking in your city. Not overnight — but within months, consistently. We also write the initial content so you're not starting from zero.", tags: ['Local SEO', 'Google Business', 'Content strategy'], visualLine: 'Rank where your members search' },
  { number: '05', title: 'Maintenance & Support', heading: 'Need something changed after launch? We handle it.', body: "Every project includes one round of revisions at launch. After that, we offer one-off fixes and structured maintenance plans depending on what you need. If you want a retainer, we can discuss it. If you just need one thing changed, we'll quote it. No drama.", tags: ['Post-launch support', 'One-off or retainer', 'Quick turnaround'], visualLine: 'Support when you need it' },
];

export default function ServicesPage() {
  return <main>
    <section className='py-24'>
      <div className='containerx max-w-4xl'>
        <span className='inline-flex glass rounded-full px-4 py-2 text-xs tracking-widest text-accent'>WHAT WE DO</span>
        <h1 className='text-5xl md:text-6xl font-black leading-tight mt-6'>Everything your gym&apos;s website needs. Done properly.</h1>
        <p className='text-white/70 mt-5 text-lg'>We handle design, copy, development, and launch. You focus on running your gym.</p>
        <Link href='/contact' className='inline-flex mt-8 bg-accent text-black font-semibold px-6 py-3 rounded-xl'>Get a Free Mockup</Link>
      </div>
    </section>

    <section className='containerx'>
      {serviceBlocks.map((block, index) => {
        const reverse = index % 2 === 1;
        return <motion.div key={block.number} initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className='grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-b border-white/10 items-start'>
          <div className={reverse ? 'md:order-2' : ''}>
            <p className='text-accent text-sm font-semibold'>{block.number} — {block.title}</p>
            <h3 className='text-3xl font-bold mt-3'>{block.heading}</h3>
            <p className='text-white/70 mt-4 leading-relaxed'>{block.body}</p>
            <div className='flex flex-wrap gap-2 mt-5'>
              {block.tags.map((tag) => <span key={tag} className='glass rounded-full px-3 py-1 text-xs text-white/80'>{tag}</span>)}
            </div>
          </div>
          <div className={reverse ? 'md:order-1' : ''}>
            <div className='glass rounded-2xl p-8 min-h-64 flex flex-col items-center justify-center text-center'>
              <p className='text-8xl font-black text-accent/20 leading-none'>{block.number}</p>
              <p className='text-white font-bold text-xl mt-4'>{block.visualLine}</p>
            </div>
          </div>
        </motion.div>;
      })}
    </section>

    <section className='containerx py-20'>
      <div className='glass rounded-3xl p-12 text-center'>
        <h2 className='text-4xl font-bold'>Not sure which services you need?</h2>
        <p className='text-white/70 mt-4'>Tell us about your gym and we&apos;ll figure it out together. No sales pitch — just a conversation.</p>
        <Link href='/contact' className='inline-flex mt-8 bg-accent text-black font-semibold px-6 py-3 rounded-xl'>Start the conversation</Link>
      </div>
    </section>
  </main>;
}
