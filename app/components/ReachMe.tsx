import contactLinks from "../data/contacts.json";

const ReachMe = () => {
  return (
    <div>
      <h2 className="command-line">   ~ cat reachme </h2>
      <br />
      <p className="text-xl leading-[1.6]">
        Get in touch via&nbsp;
        {contactLinks.map((link, index) => (
          <span key={link.name}>
            <a
              className="social link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
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
