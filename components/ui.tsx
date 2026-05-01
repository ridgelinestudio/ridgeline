import Link from 'next/link';
import { ReactNode } from 'react';
export const Section=({title,kicker,children}:{title:string;kicker?:string;children:ReactNode})=><section className='containerx py-16'><p className='text-accent text-sm mb-2'>{kicker}</p><h2 className='text-4xl font-bold mb-8'>{title}</h2>{children}</section>;
export const Btn=({href,children,secondary}:{href:string;children:ReactNode;secondary?:boolean})=><Link href={href} className={`px-5 py-3 rounded-xl font-semibold inline-block ${secondary?'border border-white/25':'bg-accent shadow-glow'}`}>{children}</Link>;
export const Placeholder=({name,className=''}:{name:string;className?:string})=><div aria-label={name} className={`glass rounded-2xl min-h-44 flex items-center justify-center text-sm text-white/80 ${className}`}>{name}</div>;
