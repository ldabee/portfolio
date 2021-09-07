import { IProject } from "../models/IProjects";
import Projects from '../projects.json';
export class ProjectsServices {
  public static async getAll(): Promise<IProject[]> {
    const projects: IProject[] = Projects;
    return projects;
  }
}