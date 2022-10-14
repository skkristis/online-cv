type AppBarProps = {
  aboutMeRef: RefObject<HTMLDivElement>;
  aboutFooterContacts: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
};

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export type FetchedProjects = {
  language: string;
};

export type Repositories = {
  projects: {
    description: string;
    name: string;
    html_url: string;
  }[];
  language: string;
};
