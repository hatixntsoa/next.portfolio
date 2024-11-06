import { useState, useEffect } from 'react';
import Loader from '../hooks/Loader';

// Components
import ThemeToggler from './ThemeToggler';
import Profile from './Profile';
import ProjectList from './ProjectList';
import WhoAmI from './WhoAmI';
import ReachMe from './ReachMe';
import Footer from './Footer';
import Loading from './Loading';

const MainContent: React.FC = () => {
  // State to manage loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Using the Loader hook inside the component
  const minLoadingTime: number = 2000;

  useEffect(() => {
    const loadingStatus = Loader(minLoadingTime);
    setIsLoading(loadingStatus);
  }, [minLoadingTime]);

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