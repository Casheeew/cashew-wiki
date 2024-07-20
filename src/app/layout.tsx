import './globals.css';

import { Mulish, Poppins } from 'next/font/google';

import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Cashew | Profile',
  description: 'Developer looking to solve real world problems.',
  keywords: [
    'Cashew',
    'Nghiem Xuan Son',
    'Son Nghiem Xuan',
    'software engineer',
    'software developer',
    'software engineer in Korea',
    'software engineer in Vietnam',
  ],
  openGraph: {
    title: 'Cashew | Profile',
    url: process.env.VERCEL_URL,
    type: 'website',
    locale: 'en_US',
    description: 'Developer looking to solve real world problems.',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${poppins.variable} font-mulish`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
