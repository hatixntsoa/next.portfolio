const projects = [
  {
    name: "Problem Solving",
    url: "https://github.com/h471x/git_gh",
    description: "Simple Automation Scripts.",
  },
  {
    name: "Python",
    url: "https://github.com/h471x/markdown_previewer",
    description: "A markdown note-taking tool.",
  },
  {
    name: "DevOps",
    url: "https://github.com/h471x/password_generator",
    description: "A Simple CLI Tool to generate passwords.",
  },
  {
    name: "Kali Linux",
    url: "https://github.com/h471x/port_scanner",
    description: "A Simple CLI Tool to scan open ports.",
  },
  {
    name: "Penetration Testing",
    url: "https://github.com/h471x/web_scraper",
    description: "A Simple CLI Tool to scrap the web.",
  },
  {
    name: "Cybersecurity",
    url: "https://github.com/h471x/whois_lookup",
    description: "A Simple CLI Tool to perform whois lookup.",
  },
  {
    name: "Shell Scripting",
    url: "https://github.com/h471x/whois_lookup",
    description: "A Simple CLI Tool to perform whois lookup.",
  },
  {
    name: "Networking",
    url: "https://github.com/h471x/whois_lookup",
    description: "A Simple CLI Tool to perform whois lookup.",
  },
  {
    name: "Neovim",
    url: "https://github.com/h471x/whois_lookup",
    description: "A Simple CLI Tool to perform whois lookup.",
  },
];

const SkillsList = () => {
  return (
    <>
      <h2 className="command-line">  󰔸 ~ cat skills </h2>
      <br />
      <div className="project-list">
        {projects.map((project) => (
          <p key={project.name} className="text-xl leading-[1.6] flex items-center">
            <span className="bullet">●</span>
            <span className="flex items-center w-full truncate">
              <a
                className="custom-link whitespace-nowrap"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              <span className="ml-2 whitespace-nowrap">
                : {project.description}
              </span>
            </span>
          </p>
        ))}
      </div>
      <br /> <br />
    </>
  );
};

export default SkillsList;