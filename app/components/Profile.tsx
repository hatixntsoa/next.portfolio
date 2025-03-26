import Image from 'next/image';
import hatixImage from '../images/HaintsoN.jpg';

const Profile: React.FC = () => {
  return (
    <Image
      src={hatixImage}
      alt="Hatix Ntsoa"
      className="round-img"
      width={200}
      height={200}
    />
  );
};

export default Profile;
