import * as Types from '../constants/ActionTypes';

export function selectProject(id) {
  return { type: Types.SELECT_PROJECT, id }
}

export function addProject(text) {
  return { type: Types.ADD_PROJECT, text }
}
