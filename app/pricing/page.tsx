'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const included = [
    'Custom design — no templates',
    'All copywriting written for you',
    'Mobile-first Next.js build',
    'Booking flow integration',
    'On-page SEO setup',
    '1 round of revisions',
    'Launch support',
    'You own the code outright',
  ];

  return <main>
    <section className='containerx py-24 max-w-4xl'>
      <p className='text-accent text-sm font-semibold tracking-widest'>PRICING</p>
      <h1 className='text-5xl md:text-6xl font-black mt-4'>Straightforward pricing. No surprises.</h1>
      <p className='text-white/70 mt-5 text-lg'>Every project is scoped based on what you actually need. We&apos;ll give you a clear number before anything starts.</p>
    </section>

    <section className='containerx grid md:grid-cols-3 gap-4'>
      {[
        ['We scope it together', 'Tell us about your gym and what you&apos;re looking for. We&apos;ll ask a few questions and put together a clear project scope.'],
        ['You get a fixed quote', 'No hourly rates. No \"it depends\". You get a number upfront and that&apos;s what you pay. No invoices appearing after launch.'],
        ['Pay in two parts', '50% to start. 50% when you approve the final site before it goes live. That&apos;s it.'],
      ].map(([t, d], i) => <motion.div key={t} className='glass rounded-2xl p-6' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><h3 className='font-bold text-xl'>{t}</h3><p className='text-white/70 mt-3'>{d}</p></motion.div>)}
    </section>

    <section className='containerx py-16'>
      <h2 className='text-3xl font-bold mb-6'>What&apos;s always included</h2>
      <div className='grid md:grid-cols-2 gap-3'>
        {included.map((item) => <div key={item} className='flex items-center gap-3'><span className='w-6 h-6 rounded-full bg-accent text-black font-bold text-xs flex items-center justify-center'>✓</span><span className='text-white'>{item}</span></div>)}
      </div>
      <p className='text-white/50 mt-8'>Ongoing maintenance, paid ads, social media, logo design, and photography are not included but can be discussed separately.</p>
    </section>

    <section className='containerx pb-20'>
      <div className='glass rounded-3xl p-12 text-center'>
        <h2 className='text-4xl font-bold'>Get a quote for your project.</h2>
        <p className='text-white/70 mt-4'>Takes 2 minutes. We&apos;ll get back to you within 24 hours.</p>
        <Link href='/contact' className='inline-flex mt-8 bg-accent text-black px-6 py-3 rounded-xl font-semibold'>Get a Quote</Link>
      </div>
    </section>
  </main>;
}
