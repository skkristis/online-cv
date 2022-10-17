import { forwardRef } from "react";
import "../stylesheets/Footer.css";
import FooterSocials from "./FooterSocials";

const Footer = forwardRef(({}, ref) => {
  const socialsListItems = [
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
    <footer
      ref={ref as React.MutableRefObject<HTMLDivElement>}
      className="Footer-bg_color"
    >
      <div className="Footer container-max">
        <h2>K. Solovjov</h2>
        <section className="Footer-section">
          <FooterSocials socialsListItems={socialsListItems} />
        </section>
      </div>
    </footer>
  );
});

export default Footer;
