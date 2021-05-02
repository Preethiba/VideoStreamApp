import {
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM
} from "../actions/Types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...action.payload };
    case FETCH_STREAM:
      return { ...state, ...action.payload };
    case CREATE_STREAM:
      const createdStreams = action.payload;
      return { ...state, ...createdStreams };
    case EDIT_STREAM:
      const editedStream = action.payload;
      return { ...state, ...editedStream };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
