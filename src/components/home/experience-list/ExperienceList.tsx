import ExperienceItem from './ExperienceItem';
import { Experience } from './types';
import clsx from 'clsx';

import BaseProps from '@/types/BaseProps';
import PageSection from '../../shared/PageSection';

const experiences = new Array<Experience>(
    {
        place: 'Neuro-Machine Augmented Intelligence Lab (NMAIL)    @ KAIST',
        position: 'Restoration of audio using Attention Mechanism in Deep Learning',
        description: <div>
            <p>• Performed individual research under the guidance of a KAIST professor</p>
            <p>•  Analyzed attention mechanism in deep learning and explored novel ways to incorporate it into audio restoration</p>
            <p>•  Developed a deep learning model with attention that showed considerable improvements to the general baseline</p>
        </div>,
        period: 'February 2023 - November 2023',
        skipDivide: true,
    },
    {
        place: '',
        position: 'Facial Emotion Recognition targeting on Complex Emotions using Deep Learning',
        description: <div>
            <p>• Lead the student-directed research group under the guidance of a KAIST professor</p>
            <p>• Explored, analyzed, implemented and performed ablation studies on machine learning and deep learning techniques
for robust and lightweight facial emotion recognition</p>
        </div>,
        period: 'February 2022 - December 2022',
    },
);

export type ExperienceListProps = BaseProps;

const ExperienceList = ({ id, className }: ExperienceListProps) => {
    return (
        <PageSection id={id} className={clsx("text-lg sm:text-xl md:text-2xl", className)}>
            <h2 className="text-3xl font-bold font-poppins text-center sm:text-start">
                Research Experience
            </h2>
            <hr/>
            <ul className="flex flex-col gap-6 mt-8">
                {experiences.map((experience) => (
                    <ExperienceItem key={experience.place} experience={experience} />
                ))}
            </ul>
        </PageSection>
    );
};

export default ExperienceList;
