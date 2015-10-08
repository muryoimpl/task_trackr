import * as Types from '../actions/ProjectActions';

const initialState = {};

export default function project(state = initialState, action) {
  switch(action.type) {
  case Types.SELECT_PROJECT:
    return {
    };
  case Types.ADD_PROJECT:
    return {
    };
  default:
    return state;
  }
}
