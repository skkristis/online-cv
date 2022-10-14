type Props = {
  educationListItems: {
    educationOrigin: string;
    specification: string;
    hrefEducationOrigin: string;
    hrefSpecification: string;
  }[];
};

export default function ExperienceEducation({ educationListItems }: Props) {
  return (
    <div className="Experience-section">
      <h3 className="flex1">EDUCATION</h3>
      <ul className="Experience-ul">
        {educationListItems.map((entry) => {
          return (
            <li key={entry.specification} className="Experience-li">
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
