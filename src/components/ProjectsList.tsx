import { Repositories } from "../types";
import AnimationWrapper from "./AnimationWrapper";

export default function ProjectsList({ projects, language }: Repositories) {
  return (
    <article>
      <AnimationWrapper type="top_to_bottom">
        <h3 className="Projects-h3">{language}</h3>
      </AnimationWrapper>
      <ul className="Projects-ul">
        {projects.map((entry, i) => {
          return (
            <AnimationWrapper key={entry.name} type="right_to_left" delay={200 * i + 100}>
              <li className="Projects-li">
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
            </AnimationWrapper>
          );
        })}
      </ul>
    </article>
  );
}
