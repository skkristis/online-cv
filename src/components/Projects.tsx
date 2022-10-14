import { forwardRef } from "react";
import "../stylesheets/Projects.css";
import { FetchedProjects } from "../types";
import ProjectsList from "./ProjectsList";
import { useGetRepositories } from "../hooks/projects.hooks";

const Projects = forwardRef(({}, ref) => {
  const repositories = useGetRepositories();

  if (repositories.status === "loading") {
    return (
      <section ref={ref as React.MutableRefObject<HTMLDivElement>} className="Projects-bg_color">
        <div className="container-max Projects-container">
          <div className="loader">Loading...</div>
        </div>
      </section>
    );
  }

  if (repositories.status === "error") {
    return (
      <section ref={ref as React.MutableRefObject<HTMLDivElement>} className="Projects-bg_color">
        <div className="container-max Projects-container ">
          <h1 className="Projects-h1">Something went wrong fetching projects.</h1>
        </div>
      </section>
    );
  }

  if (repositories.data.message) {
    return (
      <section ref={ref as React.MutableRefObject<HTMLDivElement>} className="Projects-bg_color">
        <div className="container-max Projects-container ">
          <h1 className="Projects-h1">GitHub API rate limit exceeded</h1>
          <button className="button-reset Projects-see_more">
            <a target="_blacnk" href="https://github.com/skkristis">
              See projects on GitHub
            </a>
          </button>
        </div>
      </section>
    );
  }
  return (
    <section ref={ref as React.MutableRefObject<HTMLDivElement>} className="Projects-bg_color">
      <div className="container-max Projects-container">
        <h1 className="Projects-h1">PROJECTS</h1>
        <div className="Projects-article_container">
          <ProjectsList
            language="TypeScript"
            projects={repositories.data.filter((project: FetchedProjects) => project.language === "TypeScript")}
          />
          <ProjectsList
            language="JavaScript"
            projects={repositories.data.filter((project: FetchedProjects) => project.language === "JavaScript")}
          />
        </div>
        <button className="button-reset Projects-see_more">
          <a target="_blacnk" href="https://github.com/skkristis">
            See more at my GitHub
          </a>
        </button>
      </div>
    </section>
  );
});

export default Projects;
