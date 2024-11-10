"use client";

import { useState, useEffect } from 'react';

// Components
// import ThemeToggler from './ThemeToggler';
import Profile from './Profile';
import ProjectList from './ProjectList';
// import SkillsList from './SkillsList';
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
    <>
      {/* {!isLoading && <ThemeToggler />} */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`main-container fade-in`}>
          <div className="main-content">
            <Profile />
            <WhoAmI />
            {/* <SkillsList /> */}
            <ProjectList />
            <ReachMe />
            <Footer />
          </div>
        </div>
      )}
    </>
  );  
};

export default MainContent;