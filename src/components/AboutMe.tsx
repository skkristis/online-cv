import "../stylesheets/AboutMe.css";
import { forwardRef } from "react";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeBackground from "./AboutMeBackground";
import AnimationWrapper from "./AnimationWrapper";

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
      <div className="AboutMe-container container-max ">
        <AnimationWrapper type="left_to_right">
          <AboutMeBackground />
        </AnimationWrapper>
        <AnimationWrapper type="right_to_left">
          <AboutMeSkills listItems={listItems} />
        </AnimationWrapper>
      </div>
    </section>
  );
});

export default AboutMe;
