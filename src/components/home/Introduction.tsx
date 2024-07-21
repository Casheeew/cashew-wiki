import Image from 'next/image';

import BaseProps from '@/types/BaseProps';
import PageSection from '../shared/PageSection';
import { GitHub, Linkedin, Mail } from 'react-feather';
import PopupLink from '../shared/PopupLink';

import portrait from '@/public/images/portrait.jpg';

export type IntroductionProps = BaseProps;

const Introduction = (props: IntroductionProps) => {
  return (
    <PageSection {...props}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="flex-1 text-center md:text-start">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight">
            Son Nghiem 👋
          </h1>
          <p className="mt-4 text-base md:text-lg text-lightgrey">
            Hi, I'm Son, a.k.a Cashew. I'm a programmer currently studying Computer Science at Korea Advanced Institute of Science and Technology.
          </p>
          <p className="mt-4 text-base md:text-lg text-lightgrey">
            I'm interested in mathematics, computer science, and languages. You can reach out to me in Vietnamese, Japanese, Korean, Chinese, or English below! 📍
          </p>
        </div>

        <Image
          priority
          className="w-56 md:w-72 border-3 border-black animate-morph-infinite select-none"
          src={portrait}
          alt=""
        />
      </div>

      <div className="flex items-center justify-center md:justify-start mt-16 text-lg">
        <p className="hidden md:block">Contact me</p>
        <span className="hidden md:block text-lightgrey ml-4">|</span>

        <div className="flex flex-wrap justify-center items-center mx-6 select-none gap-4">
          <PopupLink target="_blank" href="https://github.com/casheeew" aria-label="GitHub">
            <GitHub size={28} />
          </PopupLink>

          <PopupLink target="_blank" href="https://www.linkedin.com/in/son-nghiem-xuan" aria-label="LinkedIn">
            <Linkedin size={28} />
          </PopupLink>

          <PopupLink href="mailto:tungbinem@gmail.com" aria-label="tungbinem@gmail.com">
            <Mail size={28} />
          </PopupLink>
        </div>
      </div>
    </PageSection>
  );
};

export default Introduction;
