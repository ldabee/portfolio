import { IProject } from "../../models/IProjects";
import { ProjectsActionType } from '../action-types/ProjectsActionType'



interface GetAllStarted {
  type: ProjectsActionType.GETALL_STARTED;
};
interface GetAllSuccess {
  type: ProjectsActionType.GETALL_SUCCESS;
  projects: IProject[];
};
interface GetAllFailed {
  type: ProjectsActionType.GETALL_FAILURE;
  error: string;
};
interface SetProjectForTab {
  type: ProjectsActionType.SET_PROJECT_TAB;
  projectsTab: IProject[];
}
interface RemoveProjectToTab {
  type: ProjectsActionType.REMOVE_PROJECT_TAB;
  projectsTab: IProject[];
}

interface SetProjectSelected {
  type: ProjectsActionType.SET_PROJECT_SELECTED;
  project: IProject
}



export type ProjectsAction =
  GetAllStarted |
  GetAllSuccess |
  GetAllFailed |
  SetProjectForTab |
  RemoveProjectToTab |
  SetProjectSelected;