
import projects from "../data/projects.json";

const ProjectsList = () => {
  return (
    <>
      <h2 className="command-line">   ~ cat projects </h2>
      <br />
      <div className="project-list flex flex-col gap-5">
        {projects.map((project) => (
          <p key={project.name} className="text-xl leading-[1.6] flex flex-wrap">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bullet hidden sm:inline">● </span>
              <span className="project link">{project.name}</span>
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