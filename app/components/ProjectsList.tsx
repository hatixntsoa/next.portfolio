const projects = [
  {
    name: "WSL2 Forwarder",
    url: "https://github.com/h471x/wsl2_forwarder",
    description: "Simple Batch Script to Forward WSL2 Ports.",
  },
  {
    name: "Baiboly JSON",
    url: "https://github.com/h471x/baiboly_json",
    description: "A Simple Malagasy Bible App using JSON Data.",
  },
  {
    name: "Git & GitHub CLI",
    url: "https://github.com/h471x/git_gh",
    description: "Simple Automation Scripts.",
  },
  {
    name: "markdown_previewer",
    url: "https://github.com/h471x/markdown_previewer",
    description: "A markdown note-taking tool.",
  },
  {
    name: "password_generator",
    url: "https://github.com/h471x/password_generator",
    description: "A Password Generation CLI Tool.",
  },
  {
    name: "port_scanner",
    url: "https://github.com/h471x/port_scanner",
    description: "A Simple CLI Tool to scan open ports.",
  },
  {
    name: "web_scraper",
    url: "https://github.com/h471x/web_scraper",
    description: "A Simple CLI Tool to scrap the web.",
  },
  {
    name: "whois_lookup",
    url: "https://github.com/h471x/whois_lookup",
    description: "A Simple CLI Tool to perform whois lookup.",
  },
  {
    name: "youtube_downloader",
    url: "https://github.com/h471x/youtube_downloader",
    description: "Simple YouTube Video Downloader.",
  },
];

const ProjectsList = () => {
  return (
    <>
      <h2 className="command-line">   ~ cat projects </h2>
      <br />
      <div className="project-list flex flex-col gap-5">
        {projects.map((project) => (
          <p key={project.name} className="text-xl leading-[1.6] flex flex-wrap">
            <a
              className="custom-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bullet hidden sm:inline">● </span>
              <span className="project">{project.name}</span>
            </a>
            <span className="
              project-description
              inline-block
              sm:inline w-full
              sm:w-auto"
            >
              {project.description}
            </span>
          </p>
        ))}
      </div>
      <br /> <br />
    </>
  );
};

export default ProjectsList;