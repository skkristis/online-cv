import { forwardRef } from "react";
import "../stylesheets/Experience.css";
import ExperienceCourses from "./ExperienceCourses";
import ExperienceEducation from "./ExperienceEducation";

const Experience = forwardRef(({}, ref) => {
  const educationListItems = [
    {
      educationOrigin: "CodeAcademy",
      specification: "Front-End Beginner course / 2022-03 - 2022-06",
      hrefEducationOrigin: "https://www.linkedin.com/school/codeacademy.lt/",
      hrefSpecification:
        "https://web.archive.org/web/20211102093946/https:/codeacademy.lt/programavimo-kursai/front-end/",
    },
    {
      educationOrigin: "CodeAcademy",
      specification: "Front-End Advanced course / 2022-06 - Present",
      hrefEducationOrigin: "https://www.linkedin.com/school/codeacademy.lt/",
      hrefSpecification:
        "https://web.archive.org/web/20211103013348/https:/codeacademy.lt/programavimo-kursai/front-end-advanced/",
    },
  ];
  const coursesListItems = [
    {
      educationOrigin: "Scrimba",
      specification: "The ultimate React 101",
      hrefEducationOrigin: "https://www.linkedin.com/school/scrimba/",
      hrefSpecification: "https://scrimba.com/learn/learnreact",
    },
    {
      educationOrigin: "The Odin Project",
      specification: "Full Stack JavaScript",
      hrefEducationOrigin: "https://www.linkedin.com/company/the-odin-project/about/",
      hrefSpecification: "https://www.theodinproject.com/paths/full-stack-javascript?",
    },
    {
      educationOrigin: "freeCodeCamp",
      specification: "JavaScript Algorithms and Data Structures",
      hrefEducationOrigin: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      hrefSpecification: "https://www.linkedin.com/school/free-code-camp/",
    },
    {
      educationOrigin: "freeCodeCamp",
      specification: "Responsive Web Design",
      hrefEducationOrigin: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      hrefSpecification: "https://www.linkedin.com/school/free-code-camp/",
    },
  ];

  return (
    <section ref={ref as React.MutableRefObject<HTMLDivElement>} className="Experience-bg_color">
      <div className="Experience-container container-max">
        <ExperienceEducation educationListItems={educationListItems} />
        <ExperienceCourses coursesListItems={coursesListItems} />
      </div>
    </section>
  );
});

export default Experience;
