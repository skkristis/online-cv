type Props = {
  socialsListItems: {
    socialName: string;
    href: string;
  }[];
};

export default function FooterSocials({ socialsListItems }: Props) {
  return (
    <article>
      <h3>Socials</h3>
      <ul className="Footer-ul">
        {socialsListItems.map((entry) => {
          return (
            <li className="FooterContacts-li" key={entry.socialName}>
              <a target="_blank" href={entry.href}>
                {entry.socialName}
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
