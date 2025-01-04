const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer text-center w-full">
      Copyright © {currentYear} h471x
    </div>
  );
};

export default Footer;
