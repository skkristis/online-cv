type Props = {
  listItems: {
    skillName: string;
  }[];
};

export default function AboutMeSkills({ listItems }: Props) {
  return (
    <article className="AboutMe-skills_container">
      <h4 className="AboutMe-section_header">Skills</h4>
      <ul className="AboutMe-skills_ul">
        {listItems.map((entry) => {
          return (
            <li key={entry.skillName} className="AboutMe-skills_li">
              {entry.skillName}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
