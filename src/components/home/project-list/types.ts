import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

export type Project = {
  title: string;
  description: string | ReactNode;
  type: string;
  position?: string;
  skills: string[];
  image: ImageProps['src'];
  sourceLink?: string;
  demoLink?: string;
};
