'use client';

import { motion } from 'framer-motion';

export default function(){
  return <main className='containerx py-32 text-center'>
    <motion.p className='text-accent text-sm mb-4' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>BLOG</motion.p>
    <motion.h1 className='text-4xl font-bold' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Article coming soon.</motion.h1>
    <motion.p className='text-white/60 mt-4' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>We are working on this one. Check back shortly.</motion.p>
  </main>;
}
