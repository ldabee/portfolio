import { IProject } from "../models/IProjects";

const API_URL: string = '/api/projet'

export class ProjectsServices {

  public static async getAll(): Promise<IProject[]> {
    const response = await fetch(API_URL + "/getAll");
    const projects: IProject[] = await response.json();
    return projects;
  }
}