import "../stylesheets/AboutMe.css";
import { forwardRef } from "react";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeBackground from "./AboutMeBackground";

const AboutMe = forwardRef(({}, ref) => {
  const listItems = [
    {
      skillName: "TypeScript",
    },
    {
      skillName: "React.Js",
    },
    {
      skillName: "JavaScript",
    },
    {
      skillName: "HTML",
    },
    {
      skillName: "CSS",
    },
  ];

  return (
    <section ref={ref as React.MutableRefObject<HTMLDivElement>} className="AboutMe-bg_color">
      <div className="AboutMe-container container-max">
        <AboutMeBackground />
        <AboutMeSkills listItems={listItems} />
      </div>
    </section>
  );
});

export default AboutMe;
