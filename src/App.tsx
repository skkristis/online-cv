import { useRef } from "react";
import AppBar from "./components/AppBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FooterContacts from "./components/Footer";

export default function Root() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutFooterContactsRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <AppBar
        aboutMeRef={aboutMeRef}
        aboutFooterContacts={aboutFooterContactsRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
      />
      <Header />
      <AboutMe ref={aboutMeRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <FooterContacts ref={aboutFooterContactsRef} />
    </main>
  );
}
