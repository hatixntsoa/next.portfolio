import Image from 'next/image';
import loadingImage from '../images/logo.gif';

const Loading: React.FC = () => {
  return (
    <div className={`loading-image-container`}>
      <div className="loading-image-content">
        <div className="flex justify-center items-center min-h-screen">
          <Image 
            src={loadingImage} 
            alt="Loading..." 
            unoptimized 
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;