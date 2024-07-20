import About from '@/components/home/About';
import Introduction from '@/components/home/Introduction';
import { ProjectList } from '@/components/home/project-list';

const HomePage = () => {
  return (
    <main className="text-darkgrey bg-[#FCFAFF] flex flex-col gap-y-12 md:gap-y-48 py-24 px-8">
      <Introduction id="home" />
      <About id="about" />
      <ProjectList id="projects" />
    </main>
  );
};

export default HomePage;
