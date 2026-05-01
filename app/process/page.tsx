'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stages = [
  { num: '01', title: 'Discovery (Days 1–2)', body: "You fill out a brief. We jump on a 30-minute call. We learn your gym, your members, what's not working, and what success looks like.", deliverable: 'Brief + scope confirmed' },
  { num: '02', title: 'Design & Copy (Days 3–7)', body: "We write the copy and design the site simultaneously. You don't see wireframes or half-finished work — you see the full thing when it's ready.", deliverable: 'Full design + all copy' },
  { num: '03', title: 'Build (Days 7–12)', body: 'We develop on Next.js. Mobile-first. Fast. Clean. Integrated with your booking flow.', deliverable: 'Fully functional site on staging' },
  { num: '04', title: 'Review & Launch (Days 12–14)', body: 'You review. We action your feedback. One round of revisions included. Then it goes live on your domain.', deliverable: 'Live on your domain' },
];

export default function ProcessPage() {
  return <main>
    <section className='containerx py-24 text-center max-w-4xl'>
      <p className='text-accent text-sm font-semibold tracking-widest'>THE PROCESS</p>
      <h1 className='text-5xl md:text-6xl font-black mt-4'>How we go from brief to live site in 2 weeks.</h1>
      <p className='text-white/70 mt-5 text-lg'>Four stages. No back-and-forth. No surprises.</p>
    </section>

    <section className='py-24'>
      <div className='containerx relative'>
        <div className='hidden md:block absolute top-8 left-0 right-0 h-px bg-accent/20' />
        <motion.div initial='hidden' whileInView='show' viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }} className='flex flex-col md:flex-row items-start gap-10 md:gap-0'>
          {stages.map((s, i) => <motion.div key={s.num} variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }} className='flex-1 flex flex-col items-center text-center px-6'>
            <motion.div className='w-16 h-16 rounded-full border-2 border-accent bg-black flex items-center justify-center font-bold text-accent text-lg' animate={{ boxShadow: ['0 0 0px #CAFF4B00', '0 0 20px #CAFF4B66', '0 0 0px #CAFF4B00'] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}>
              {s.num}
            </motion.div>
            <h3 className='font-bold text-xl mt-5'>{s.title}</h3>
            <p className='text-white/70 mt-3'>{s.body}</p>
            <p className='text-accent text-sm mt-4'>Deliverable: {s.deliverable}</p>
          </motion.div>)}
        </motion.div>
      </div>
    </section>

    <section className='containerx'>
      <div className='glass rounded-2xl grid md:grid-cols-3 gap-4 p-6'>
        <div><h4 className='font-semibold'>Do I need to be available during the build?</h4><p className='text-white/70 mt-2 text-sm'>Just for the discovery call and final review. We don&apos;t check in constantly.</p></div>
        <div><h4 className='font-semibold'>What do I need to provide?</h4><p className='text-white/70 mt-2 text-sm'>A 30-minute call, any photos you have, and your booking system login if you have one.</p></div>
        <div><h4 className='font-semibold'>What if I want changes after launch?</h4><p className='text-white/70 mt-2 text-sm'>One round of revisions is included. Anything after that is quoted separately.</p></div>
      </div>
      <div className='text-center py-16'>
        <Link href='/contact' className='inline-flex bg-accent text-black px-6 py-3 rounded-xl font-semibold'>Ready to start?</Link>
      </div>
    </section>
  </main>;
}
