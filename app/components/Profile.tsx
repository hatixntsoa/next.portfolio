import { useState } from 'react';
import Image from 'next/image';
import mainImage from '../images/ghibli.grey.png';
import hoverImage from '../images/ghibli.png';

const Profile: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverTime = 0;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, hoverTime);
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
