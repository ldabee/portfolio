import { combineReducers } from "redux";
import ProjectsReducer from "./ProjectReducer";

const reducers = combineReducers({
  projects: ProjectsReducer
})

export default reducers;

export type IState = ReturnType<typeof reducers>