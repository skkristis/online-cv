import AnimationWrapper from "./AnimationWrapper";

type Props = {
  coursesListItems: {
    educationOrigin: string;
    specification: string;
    hrefEducationOrigin: string;
    hrefSpecification: string;
  }[];
};
export default function ExperienceCourses({ coursesListItems }: Props) {
  return (
    <div className="Experience-section">
      <AnimationWrapper type="left_to_right">
        <h3 className="flex1">COURSES</h3>
      </AnimationWrapper>
      <ul className="Experience-ul">
        {coursesListItems.map((entry, i) => {
          return (
            <AnimationWrapper key={entry.specification} type="right_to_left" delay={200 * i}>
              <li className=" Experience-li">
                <span>
                  <a target="_blank" className="Experience-li__educationOrigin" href={entry.hrefEducationOrigin}>
                    {entry.educationOrigin}
                  </a>
                </span>
                <span>
                  <a target="_blank" href={entry.hrefSpecification}>
                    {entry.specification}
                  </a>
                </span>
              </li>
            </AnimationWrapper>
          );
        })}
      </ul>
    </div>
  );
}
