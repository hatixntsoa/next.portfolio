import Image from 'next/image';
import loadingImage from '../images/logo.gif';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image 
        src={loadingImage} 
        alt="Loading..." 
        width={625} 
        height={625} 
        unoptimized 
      />
    </div>
  );
};

export default Loading;