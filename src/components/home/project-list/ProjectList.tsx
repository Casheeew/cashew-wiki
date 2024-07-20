import clsx from 'clsx';
import ProjectItem from './ProjectItem';
import { Project } from './types';

import yomitan from '@/public/images/yomitan-terms.png';
import BaseProps from '@/types/BaseProps';
import PageSection from '../../shared/PageSection';

const projects = new Array<Project>(
  {
    title: 'Yomitan',
    description:
      "A pop-up dictionary with flashcard integration with 25,000+ users and near 1,000 GitHub stars",
    position: 'Developer and Codeowner',
    type: 'Browser Extension',
    skills: ['JavaScript', 'TypeScript', 'Handlebars', 'HTML', 'CSS'],
    sourceLink: 'https://github.com/themoeway/yomitan',
    demoLink: 'https://yomitan.wiki',
    image: yomitan,
  },
);

export type ProjectListProps = BaseProps;

const ProjectList = (props: ProjectListProps) => {
  return (
    <PageSection {...props}>
      <h2 className="text-3xl font-bold font-poppins text-center sm:text-start">
        My Projects
      </h2>
      <ul className="flex flex-col gap-12 mt-8">
        {projects.map((project, idx) => (
          <ProjectItem key={project.title} project={project} right={idx % 2 === 1} />
        ))}
      </ul>
    </PageSection>
  );
};

export default ProjectList;