import "../stylesheets/AppBar.css";
import AppBarUl from "./AppBarUl";
import { useState } from "react";
import { AppBarProps } from "../types";
import AnimationContainer from "./AnimationContainer";

export default function AppBar({
  aboutMeRef,
  aboutFooterContacts,
  experienceRef,
  projectsRef,
}: AppBarProps) {
  const [menuState, setMenuState] = useState(false);
  const listItems = [
    {
      sectionName: "About Me",
      onClick: () => aboutMeRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      sectionName: "Experience",
      onClick: () =>
        experienceRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      sectionName: "Projects",
      onClick: () => projectsRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      sectionName: "Contacts",
      onClick: () =>
        aboutFooterContacts.current.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <nav className="AppBarColor">
      <div className="container-max-AppBar AppBar">
        <article className="AppBar-name_container">
          <AnimationContainer type="top_to_bottom">
            <button
              className="button-reset"
              onClick={() => setMenuState(false)}
            >
              <a className="AppBar-a" href="#">
                <h3>K. Solovjov</h3>
              </a>
            </button>
          </AnimationContainer>
        </article>
        <AppBarUl
          listItems={listItems}
          menuState={menuState}
          setMenuState={setMenuState}
        />
      </div>
    </nav>
  );
}
