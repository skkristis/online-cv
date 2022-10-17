export default function HeaderIntro() {
  const listItems = [
    {
      socialName: "LinkedIn",
      href: "https://www.linkedin.com/in/kristoferis-solovjov-126056242/",
    },
    {
      socialName: "Facebook",
      href: "https://www.facebook.com/kristoferis.salovjov",
    },
    {
      socialName: "GitHub",
      href: "https://github.com/skkristis",
    },
  ];

  return (
    <div className="LandingPage-intro">
      <h1 className="LandingPage-h1">
        Hello, I am Kristoferis, a web developer
      </h1>
      <a
        className="btn Header-email"
        target="_blank"
        href="mailto: skkristis@gmail.com"
      >
        Email me
      </a>
      <ul className="LandingPage-ul">
        {listItems.map((entry) => {
          return (
            <li className="LandingPage-li" key={entry.socialName}>
              <a target="_blank" href={entry.href}>
                {entry.socialName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
