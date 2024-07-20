import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';

export type FooterProps = BaseProps;

const Footer = ({ className, id }: FooterProps) => {
  return (
    <footer id={id} className={clsx(
      'flex justify-between items-center sticky top-0 inset-x-0 px-12 py-5 z-10 gap-6',
      'text-center text-slate-400 text-xs md:text-base',
      'backdrop-blur-md bg-black shadow',
      className,
      )}>
      Made by Cashew @ 2024
    </footer>
  );
};

export default Footer;
