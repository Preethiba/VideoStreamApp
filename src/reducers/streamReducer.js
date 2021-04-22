import {
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM
} from "../actions/types";

const streamReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...action.payload };
    case FETCH_STREAM:
      return { ...state, ...action.payload };
    case CREATE_STREAM:
      return { ...state, ...action.payload };
    case EDIT_STREAM:
      return { ...state, ...action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
