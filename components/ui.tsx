'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

export const Section = ({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) => (
  <section className='containerx py-16'>
    <p className='text-accent text-sm mb-2'>{kicker}</p>
    <h2 className='text-4xl font-bold mb-8'>{title}</h2>
    {children}
  </section>
);

export const Btn = ({ href, children, secondary }: { href: string; children: ReactNode; secondary?: boolean }) => (
  <Link href={href} className={`px-5 py-3 rounded-xl font-semibold inline-block ${secondary ? 'border border-white/25' : 'bg-accent shadow-glow'}`}>
    {children}
  </Link>
);

export const Placeholder = ({ name, className = '' }: { name: string; className?: string }) => (
  <div className={`relative overflow-hidden rounded-2xl ${className}`}>
    <img
      src={`/${name}.jpg`}
      alt={name}
      className='w-full h-full object-cover absolute inset-0'
      onError={(e) => {
        (e.target as HTMLImageElement).style.opacity = '0';
      }}
    />
  </div>
);
