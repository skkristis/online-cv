import "../stylesheets/AboutMe.css";
import { forwardRef } from "react";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeBackground from "./AboutMeBackground";
import AnimationContainer from "./AnimationContainer";

const AboutMe = forwardRef(({}, ref) => {
  const listItems = [
    {
      skillName: "TypeScript",
    },
    {
      skillName: "React.Js",
    },
    {
      skillName: "Node.Js",
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
    <section
      ref={ref as React.MutableRefObject<HTMLDivElement>}
      className="AboutMe-bg_color"
    >
      <div className="AboutMe-container container-max ">
        <AnimationContainer type="left_to_right">
          <AboutMeBackground />
        </AnimationContainer>
        <AnimationContainer type="right_to_left">
          <AboutMeSkills listItems={listItems} />
        </AnimationContainer>
      </div>
    </section>
  );
});

export default AboutMe;
