import { Repositories } from "../types";

export default function ProjectsJS({ projects, language }: Repositories) {
  return (
    <article>
      <h3 className="Projects-h3">{language}</h3>
      <ul className="Projects-ul">
        {projects.map((entry) => {
          return (
            <li key={entry.name} className="Projects-li">
              <div className="Projects-li--sub_container">
                <h4 className="Projects-repo_name">{entry.name}</h4>
                <p>{entry.description}</p>
              </div>
              <div className="Projects-li--links">
                <a target="_blank" href={`https://skkristis.github.io/${entry.name}`}>
                  Check Preview
                </a>
                <a target="_blank" href={entry.html_url}>
                  Check Code
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
