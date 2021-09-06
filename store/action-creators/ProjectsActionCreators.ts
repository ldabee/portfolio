import { ProjectsActionType } from "../action-types/ProjectsActionType";
import { Dispatch } from "redux";
import { IProject } from "../../models/IProjects";
import { ProjectsServices } from "../../services/ProjectServices";
import { ProjectsAction } from "../actions/ProjectAction";
import { store } from '../store';



export const GetAllProjects = () => async (dispatch: Dispatch<ProjectsAction>) => {
  dispatch({ type: ProjectsActionType.GETALL_STARTED });
  try {
    const projects = await ProjectsServices.getAll();
    dispatch({ type: ProjectsActionType.GETALL_SUCCESS, projects: projects });
  } catch (e) {
    dispatch({ type: ProjectsActionType.GETALL_FAILURE, error: e })
  }
}

export const AddProjectToTab = (project: IProject) => async (dispatch: Dispatch<ProjectsAction>) => {
  const previousState: IProject[] = store.getState().projects.projectsTab;
  const projectsTab = [...previousState, project];
  dispatch({ type: ProjectsActionType.SET_PROJECT_TAB, projectsTab: projectsTab })
}

export const RemoveProjectToTab = (project: string) => async (dispatch: Dispatch<ProjectsAction>) => {
  const previousState: IProject[] = store.getState().projects.projectsTab;
  const projectsTab = previousState.filter((prj) => prj.title !== project);
  dispatch({ type: ProjectsActionType.REMOVE_PROJECT_TAB, projectsTab: projectsTab })
}