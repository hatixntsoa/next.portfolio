import { useState } from 'react';
import Image from 'next/image';
import mainImage from '../images/HaintsoN.jpg';
import hoverImage from '../images/logo.gif';

const Profile: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  return (
    <Image
      src={isHovered ? hoverImage : mainImage}
      alt="Hatix Ntsoa"
      className="round-img"
      width={200}
      height={200}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Profile;
