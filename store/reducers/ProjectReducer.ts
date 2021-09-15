import { IProject, IProjects } from "../../models/IProjects";
import { ProjectsActionType } from "../action-types/ProjectsActionType";
import { ProjectsAction } from "../actions/ProjectAction";

const initialStateProject: IProjects = {
  projects: [],
  error: "",
  loading: false,
  projectsTab: [],
  projectSelected: {} as IProject
}

const ProjectsReducer = (state: IProjects = initialStateProject, action: ProjectsAction) => {
  switch (action.type) {
    case ProjectsActionType.GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        projects: state.projects
      }
    case ProjectsActionType.GETALL_STARTED:
      return {
        ...state,
        loading: true,
        error: "",
        projects: state.projects
      }
    case ProjectsActionType.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        projects: action.projects
      }
    case ProjectsActionType.SET_PROJECT_TAB:
      return {
        ...state,
        projectsTab: action.projectsTab
      }
    case ProjectsActionType.REMOVE_PROJECT_TAB:
      return {
        ...state,
        projectsTab: action.projectsTab
      }

    case ProjectsActionType.SET_PROJECT_SELECTED:
      return {
        ...state,
        projectSelected: action.project
      }

    default:
      return state
  }
}

export default ProjectsReducer;