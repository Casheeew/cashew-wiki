import ProjectItem from './ProjectItem';
import { Project } from './types';

import yomitan from '@/public/images/yomitan-terms.png';
import linkid from '@/public/images/linkid-footprint-demo.jpg';
import BaseProps from '@/types/BaseProps';
import PageSection from '../../shared/PageSection';



const projects = new Array<Project>(
  {
    title: 'Yomitan',
    description: <div>Multilingual pop-up dictionary with flashcard integration for language learning boasting 50,000+ users.</div>,
    position: 'Open-source Software Maintainer',
    type: 'Yomidevs',
    skills: ['JavaScript', 'TypeScript', 'Handlebars', 'HTML', 'CSS'],
    sourceLink: 'https://github.com/themoeway/yomitan',
    demoLink: 'https://yomitan.wiki',
    image: yomitan,
  },
  {
    title: 'Digital Footprint Portal',
    description: <div>Developed an analytics web dashboard using TypesScript framework React.js and Ant Design.</div>,
    position: 'Software Engineering Intern',
    type: 'VPBank - Digital Footprint Team',
    skills: ['React', 'TypeScript', 'AntDesign', 'TailwindCSS'],
    demoLink: 'https://www.vpbank.com.vn/en/ve-chung-toi',
    image: linkid,
  },
);

export type ProjectListProps = BaseProps;

const ProjectList = (props: ProjectListProps) => {
  return (
    <PageSection {...props}>
      <h2 className="text-3xl font-bold font-poppins text-center sm:text-start">
        My Projects
      </h2>
      <hr/>
      <ul className="flex flex-col gap-12 mt-8">
        {projects.map((project, idx) => (
          <ProjectItem key={project.title} project={project} right={idx % 2 === 1} />
        ))}
      </ul>
    </PageSection>
  );
};

export default ProjectList;
