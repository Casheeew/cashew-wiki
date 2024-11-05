import PageSection from '../../shared/PageSection';
import { Experience } from './types';

export type ExperienceItemProps = {
    experience: Experience;
};


const ExperienceItem = ({ experience }: ExperienceItemProps) => {

    return (
        <div>
            {experience.place ? <h3 className="text-3xl py-10 font-semibold">{experience.place}</h3> : <></>}
            <p className="text-sm sm:text-base text-lightgrey font-semibold">{experience.position}</p>
            <p className="text-sm sm:text-base text-gray-500 font-semibold">{experience.period}</p>
            <div className="mt-2 text-sm sm:text-lg">{experience.description}</div>
            {!experience.skipDivide && <hr className="w-48 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700" />}
        </div>
    );
};

export default ExperienceItem;
