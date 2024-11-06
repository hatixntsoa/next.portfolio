"use client";

import { useState, useEffect } from 'react';

// Components
// import ThemeToggler from './ThemeToggler';
import Profile from './Profile';
import ProjectList from './ProjectList';
import WhoAmI from './WhoAmI';
import ReachMe from './ReachMe';
import Footer from './Footer';
import Loading from './Loading';

// Hooks
import Loader from '../hooks/Loader';

const MainContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const minLoadingTime: number = 2000;
  const loadingStatus = Loader(minLoadingTime);

  useEffect(() => {
    setIsLoading(loadingStatus);
  }, [loadingStatus]);

  return (
    <div className={`flex items-center justify-center min-h-screen ${!isLoading ? 'fade-in' : ''}`}>
      <div className="w-[58%] mx-auto">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="content flex flex-col items-start">
            {/* <ThemeToggler /> */}
            <Profile />
            <WhoAmI />
            <ProjectList />
            <ReachMe />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;