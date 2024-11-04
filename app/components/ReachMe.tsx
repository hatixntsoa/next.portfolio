const contactLinks = [
  {
    name: "Gmail",
    url: "mailto:hatixntsoa@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hatixntsoa",
  },
  {
    name: "GitHub",
    url: "https://github.com/h471x",
  },
];

const ReachMe = () => {
  return (
    <div>
      <h2 className="command-line">   ~ cat reachme </h2>
      <br />
      <p className="text-xl leading-[1.6]">
        Feel free to reach out to me via&nbsp;
        {contactLinks.map((link, index) => (
          <span key={link.name}>
            <a className="custom-link" href={link.url}>{link.name}</a>
            {index < contactLinks.length - 1 ? (index === contactLinks.length - 2 ? " or " : ", ") : ""}
          </span>
        ))}
        .
      </p>
      <br /><br />
    </div>
  );
};

export default ReachMe;
