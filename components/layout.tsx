'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/lib/data';

export function Header() {
  const p = usePathname();

  return (
    <header className='sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10'>
      <div className='containerx flex h-16 items-center justify-between'>
        <Link href='/' className='font-bold'>
          RidgeLine
        </Link>
        <nav className='hidden md:flex gap-6'>
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className={p === href ? 'text-accent' : 'text-white/80'}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href='/contact' className='bg-accent px-4 py-2 rounded-lg text-black font-semibold'>
          Get a Free Mockup
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className='border-t border-white/10 mt-20'>
      <div className='containerx py-12 grid md:grid-cols-3 gap-8 text-sm'>
        <div>
          <p className='font-bold mb-2'>RidgeLine</p>
          <p className='text-white/70 mb-3'>Gym websites that convert visitors into members.</p>
          <a href='mailto:faheem@ridgelinestudio.net' className='text-accent'>
            faheem@ridgelinestudio.net
          </a>
          <p className='text-white/60 mt-4'>© 2026 RidgeLine Studio. All rights reserved.</p>
        </div>

        <div>
          <p className='font-semibold mb-2'>Quick Links</p>
          <ul className='space-y-1'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/services'>Services</Link></li>
            <li><Link href='/portfolio'>Portfolio</Link></li>
            <li><Link href='/process'>Process</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
          </ul>
        </div>

        <div>
          <p className='font-semibold mb-2'>Services</p>
          <ul className='space-y-1'>
            <li><Link href='/services'>Gym Website Design</Link></li>
            <li><Link href='/services'>Website Development</Link></li>
            <li><Link href='/services'>Booking Systems</Link></li>
            <li><Link href='/services'>SEO & Optimization</Link></li>
            <li><Link href='/services'>Maintenance & Support</Link></li>
          </ul>
        </div>
      </div>
      <div className='containerx py-4 text-xs text-white/60 flex gap-4'>
        <Link href='/privacy-policy'>Privacy Policy</Link>
        <span>|</span>
        <Link href='/terms-of-service'>Terms of Service</Link>
      </div>
    </footer>
  );
}
