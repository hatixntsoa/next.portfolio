import Image from 'next/image';
import ThemeToggler from './components/ThemeToggler';
import ProjectList from './components/ProjectList';
import WhoAmI from './components/WhoAmI';
import ReachMe from './components/ReachMe';
import Footer from './components/Footer';

// Import the image
import hatixImage from './images/hatix.jpg';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[58%] mx-auto">
        <ThemeToggler />
        <div className="content flex flex-col items-start">
          <Image 
            src={hatixImage}
            alt="Hatix Ntsoa"
            className="round-img"
            width={200} height={200}
          />
          <WhoAmI />
          <ProjectList />
          <ReachMe />
          <Footer />
        </div>
      </div>
    </div>
  );
}
