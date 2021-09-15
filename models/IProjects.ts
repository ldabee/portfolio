export type IProject = {
  id: number;
  title: string;
  name: string;
  banner: string;
  description: string;
  screenshots: string[];
  technologies: string[];
  siteUrl: string;
  sourceGit: string[]
}

export type IProjects = {
  projects: IProject[];
  error: string;
  loading: boolean;
  projectsTab: IProject[];
  projectSelected: IProject;
}