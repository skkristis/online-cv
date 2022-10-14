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
      <h3 className="flex1">COURSES</h3>
      <ul className="Experience-ul">
        {coursesListItems.map((entry) => {
          return (
            <li key={entry.specification} className=" Experience-li">
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
          );
        })}
      </ul>
    </div>
  );
}
