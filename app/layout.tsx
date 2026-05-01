import './globals.css';
import { Header, Footer } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ridgelinestudio.net'),
  title: {
    default: 'RidgeLine | Gym Websites That Convert',
    template: '%s | RidgeLine',
  },
  description: 'RidgeLine builds high-converting websites for gyms and fitness studios.',
  openGraph: {
    title: 'RidgeLine',
    description: 'Gym websites that turn visitors into members.',
    images: [{ url: '/og-home.jpg', alt: 'ogHomeImage' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
