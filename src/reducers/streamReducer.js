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
      const streamsList = action.payload;
      for (const key of Object.keys(streamsList)) {
        streamsList[key].id = key;
      }
      return { ...state, ...streamsList };
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
