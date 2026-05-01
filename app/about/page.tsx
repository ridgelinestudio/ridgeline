'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Placeholder } from '@/components/ui';

export default function AboutPage() {
  return <main>
    <section className='containerx min-h-[100dvh] py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <p className='text-accent text-sm font-semibold tracking-widest'>ABOUT</p>
        <h1 className='text-5xl md:text-6xl font-black mt-4'>We build gym websites that actually do something.</h1>
        <p className='text-white/75 mt-6'>RidgeLine is a specialist web design studio for gyms and fitness businesses. We don&apos;t build websites for everyone — we focus on one niche, do it well, and stay focused on what matters: getting your visitors to book a trial.</p>
        <p className='text-white/75 mt-5'>Most gym websites look presentable but convert badly. The offer isn&apos;t clear. The mobile experience is broken. There&apos;s no obvious next step. We fix all of that — with custom design, real copywriting, and fast development.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
        <Placeholder name='aboutFounderImage' className='min-h-[500px]' />
      </motion.div>
    </section>

    <section className='containerx py-8 grid md:grid-cols-3 gap-4'>
      {[
        ['Niche focus', 'We only work with gyms and fitness businesses. That means we understand your market, your members, and what actually drives conversions.'],
        ['No fluff', 'No unnecessary pages, no filler copy, no bloated codebases. Everything on your site has a job.'],
        ['You own it', 'When we hand over your site, you own it completely. The code, the domain, the content. No lock-in.'],
      ].map(([t, d], i) => <motion.div key={t} className='glass rounded-2xl p-6' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><h3 className='font-bold text-xl'>{t}</h3><p className='text-white/70 mt-3'>{d}</p></motion.div>)}
    </section>

    <section className='containerx py-16 grid md:grid-cols-2 gap-10'>
      <p className='text-white/80 text-lg'>We&apos;re not a full-service agency. We don&apos;t do logos, social media management, paid ads, or video production. We do websites.</p>
      <p className='text-white/80 text-lg'>We&apos;re also not a template shop. Every site is designed and built from scratch for your gym specifically.</p>
    </section>

    <section className='containerx pb-20 text-center'>
      <Link href='/contact' className='inline-flex bg-accent text-black px-6 py-3 rounded-xl font-semibold'>Work with us</Link>
    </section>
  </main>;
}
