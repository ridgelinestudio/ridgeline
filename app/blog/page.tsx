'use client';

import { posts } from '@/lib/data';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categoryFor = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('seo')) return 'SEO';
  if (t.includes('marketing') || t.includes('branding')) return 'MARKETING';
  return 'WEBSITE';
};

export default function BlogPage() {
  return <main>
    <section className='containerx py-24 max-w-4xl'>
      <p className='text-accent text-sm font-semibold tracking-widest'>BLOG</p>
      <h1 className='text-5xl md:text-6xl font-black mt-4'>Gym marketing. No fluff.</h1>
      <p className='text-white/70 mt-5 text-lg'>Practical articles for gym owners on websites, SEO, and getting more members.</p>
    </section>

    <section className='containerx grid grid-cols-1 md:grid-cols-2 gap-6 pb-20'>
      {posts.map((post, i) => <motion.article key={post.slug} className='glass rounded-2xl p-6' initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
        <span className='inline-flex rounded-full px-3 py-1 text-xs bg-accent/20 text-accent'>{categoryFor(post.title)}</span>
        <h3 className='font-bold text-lg mt-4'>{post.title}</h3>
        <p className='text-white/60 text-sm mt-2'>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className='text-accent text-sm mt-4 inline-block'>Read article →</Link>
      </motion.article>)}
    </section>
  </main>;
}
