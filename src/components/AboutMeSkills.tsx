import AnimationWrapper from "./AnimationWrapper";

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
        {listItems.map((entry, i) => {
          return (
            <AnimationWrapper key={entry.skillName} type="right_to_left" delay={200 * i}>
              <li className="AboutMe-skills_li">{entry.skillName}</li>
            </AnimationWrapper>
          );
        })}
      </ul>
    </article>
  );
}
