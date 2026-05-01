'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Btn, Section } from '@/components/ui';
import { portfolio, services, testimonials, imageVars } from '@/lib/data';

export default function Home() {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const marqueeItems = ['IRON FITNESS', 'BEAST MODE', 'ELITE TRAINING', 'MAX PERFORMANCE', 'FITNESS LAB'];
  const processSteps = [
    { title: 'Discovery', desc: 'One call. We learn your gym, your members, your goal.' },
    { title: 'Design', desc: "We design from scratch. You see it when it's done, not as a wireframe." },
    { title: 'Build', desc: 'Every line of code, every word of copy — we handle it.' },
    { title: 'Launch', desc: 'Live on your domain. In your hands. Done in 2 weeks.' },
  ];

  return (
    <main>
      <section className='relative min-h-[100dvh] overflow-hidden flex items-end pb-20'>
        <Image src='/heroAthleteImage.jpg' alt='hero' fill className='object-cover object-center' priority />
        <div
          className='absolute inset-0'
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%)' }}
        />
        <div className='relative z-10 containerx max-w-2xl'>
          <motion.h1
            initial='hidden'
            animate='show'
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            className='font-black text-5xl md:text-7xl leading-none'
          >
            {'WE BUILD GYM WEBSITES THAT CONVERT.'.split(' ').map((word, i) => (
              <motion.span key={`${word}-${i}`} variants={{ hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1 } }} className='inline-block mr-3'>
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <p className='text-white/80 mt-6'>High-converting websites for gyms and fitness studios. From first visit to booked trial.</p>
          <div className='mt-8 flex gap-3'>
            <Btn href='/contact'>Get a Free Mockup</Btn>
            <Btn href='/portfolio' secondary>See Our Work</Btn>
          </div>
          <div className='flex items-center gap-2 mt-6'>
            <span className='w-2 h-2 rounded-full bg-accent inline-block'></span>
            <span className='text-white/60 text-sm'>Gym websites that turn visitors into members</span>
          </div>
        </div>
      </section>

      <section className='bg-white/5 border-y border-white/10 py-6 overflow-hidden'>
        <motion.div
          className='flex w-max gap-3'
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
        >
          {[...marqueeItems, ...marqueeItems].map((name, idx) => (
            <span key={`${name}-${idx}`} className='border border-white/20 rounded-full px-4 py-1 text-xs text-white/50 uppercase tracking-widest'>
              {name}
            </span>
          ))}
        </motion.div>
      </section>

      <Section kicker='WHAT WE DO' title='Built for one outcome. More members.'>
        <div ref={servicesRef}>
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={service.title}
                className='grid grid-cols-1 md:grid-cols-5 gap-8 items-center py-12 border-b border-white/10'
                initial={{ x: isEven ? -40 : 40, opacity: 0 }}
                animate={servicesInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`md:col-span-3 ${isEven ? 'md:order-2' : ''}`}>
                  <p className='text-accent text-sm font-semibold mb-2'>{String(index + 1).padStart(2, '0')}</p>
                  <h3 className='font-bold text-2xl'>{service.title}</h3>
                  <p className='text-white/70 mt-3'>{service.desc}</p>
                </div>
                <div className={`md:col-span-2 ${isEven ? 'md:order-1' : ''}`}>
                  <div className='glass rounded-2xl flex items-center justify-center h-40 text-6xl text-accent'>{service.icon}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <section className='bg-white/5 py-20'>
        <div className='containerx'>
          <p className='text-accent text-sm font-semibold mb-3'>THE PROCESS</p>
          <h2 className='text-4xl md:text-5xl font-black mb-10'>Four steps. No surprises.</h2>
          <div ref={processRef} className='relative flex flex-col md:flex-row gap-0'>
            <div className='hidden md:block absolute left-[12.5%] right-[12.5%] top-[56px] border-t-2 border-dashed border-accent/30' />
            {processSteps.map((step, index) => (
              <motion.div key={step.title} className='flex-1 flex flex-col items-center text-center p-8' initial={{ opacity: 0, y: 20 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }}>
                <motion.div
                  className='w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center text-accent font-bold text-lg'
                  initial={{ scale: 0 }}
                  animate={processInView ? { scale: [0, 1, 0.95, 1], boxShadow: ['0 0 0px rgba(184,255,68,0)', '0 0 22px rgba(184,255,68,0.5)', '0 0 0px rgba(184,255,68,0)'] } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15, times: [0, 0.5, 1], repeat: 2 }}
                >
                  {`0${index + 1}`}
                </motion.div>
                <h3 className='font-bold mt-4'>{step.title}</h3>
                <p className='text-white/70 mt-2'>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section kicker='OUR WORK' title='Websites That Deliver Results'>
        <div className='grid md:grid-cols-4 gap-4'>
          {portfolio.map((p) => (
            <Link href={`/portfolio/${p.slug}`} key={p.slug} className='glass p-3 rounded-2xl'>
              <Image src={`/${p.img}.jpg`} alt={p.name} width={640} height={420} className='w-full h-44 object-cover rounded-xl' />
              <h3 className='font-semibold mt-3'>{p.name}</h3>
              <p className='text-sm text-white/70'>{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section kicker='WHAT OUR CLIENTS SAY' title='Results that speak for themselves.'>
        <div className='grid md:grid-cols-3 gap-4'>
          {testimonials.map((t, i) => (
            <div key={i} className='glass rounded-2xl p-8'>
              <p className='italic text-white/90 text-lg'>“{t.quote}”</p>
              <p className='text-white/40 text-sm mt-4'>{t.industry}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className='containerx'>
        <div className='glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center'>
          <Image src={`/${imageVars.ctaAthleteImage}.jpg`} alt='cta' width={800} height={600} className='w-full h-72 object-cover rounded-2xl' />
          <div>
            <h3 className='text-4xl font-bold'>Ready to get more members from your website?</h3>
            <p className='text-white/70 my-4'>We&apos;ll build you a free homepage mockup first. No commitment.</p>
            <div className='flex gap-3'>
              <Btn href='/contact'>Book a Free Call</Btn>
              <Btn href='mailto:faheem@ridgelinestudio.net' secondary>Email Us</Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
