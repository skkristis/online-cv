type Props = {
  socialsListItems: {
    socialName: string;
    href: string;
  }[];
};

export default function FooterSocials({ socialsListItems }: Props) {
  return (
    <article>
      <ul className="Footer-ul">
        {socialsListItems.map((entry, i) => {
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
