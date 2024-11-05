"use client";

// Components
import ThemeToggler from './ThemeToggler';
import Profile from './Profile';
import ProjectList from './ProjectList';
import WhoAmI from './WhoAmI';
import ReachMe from './ReachMe';
import Footer from './Footer';
import Loading from './Loading';

// Hooks
import Loader from '../hooks/Loader';

const MainContent: React.FC = () => {
  const isLoading: boolean = Loader();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[58%] mx-auto">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ThemeToggler />
            <div className="content flex flex-col items-start">
              <Profile />
              <WhoAmI />
              <ProjectList />
              <ReachMe />
              <Footer />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainContent;