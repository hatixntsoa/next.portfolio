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
  const minLoadingTime: number = 2000;
  const isLoading: boolean = Loader(minLoadingTime);

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