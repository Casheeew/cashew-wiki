import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

export type Experience = {
  place: string;
  description: string | ReactNode;
  position: string;
  period: string;
  skipDivide?: boolean;
};
