'use client';

import { Placeholder } from '@/components/ui';
import { portfolio } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPage() {
  return <main>
    <section className='containerx py-24 max-w-4xl'>
      <p className='text-accent text-sm font-semibold tracking-widest'>OUR WORK</p>
      <h1 className='text-5xl md:text-6xl font-black mt-4'>Four gyms. Four problems. Four results.</h1>
      <p className='text-white/70 mt-5 text-lg'>These are concept demos built to show range. Client sites are in progress.</p>
    </section>

    <section className='containerx grid grid-cols-1 md:grid-cols-2 gap-8'>
      {portfolio.map((p, i) => <motion.div key={p.slug} className='glass rounded-2xl overflow-hidden' initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
        <div className='relative h-64 w-full overflow-hidden'>
          <Placeholder name={p.img} className='h-64 rounded-none' />
        </div>
        <div className='p-6'>
          <h3 className='font-bold text-xl'>{p.name}</h3>
          <p className='text-white/60 text-sm mt-1'>{p.summary}</p>
          <div className='flex flex-wrap gap-2 mt-4'>
            <span className='glass rounded-lg px-3 py-1 text-xs'>Goal: {p.goals}</span>
            <span className='glass rounded-lg px-3 py-1 text-xs'>Result: {p.results}</span>
          </div>
          <Link href={`/portfolio/${p.slug}`} className='text-accent text-sm mt-4 inline-block'>View case study →</Link>
        </div>
      </motion.div>)}
    </section>

    <p className='text-center text-white/40 text-sm mt-12 pb-20 containerx'>Live client sites launching soon. These are concept demos showing design direction and range.</p>
  </main>;
}
