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
      const fetchedStreams = action.payload;
      for (const key of Object.keys(fetchedStreams)) {
        fetchedStreams[key].id = key;
      }
      return { ...state, ...fetchedStreams };
    case FETCH_STREAM:
      return { ...state, ...action.payload };
    case CREATE_STREAM:
      const createdStreams = action.payload;
      for (const key of Object.keys(createdStreams)) {
        createdStreams[key].id = key;
      }
      return { ...state, ...createdStreams };
    case EDIT_STREAM:
      const editedStream = action.payload;
      for (const key of Object.keys(editedStream)) {
        editedStream[key].id = key;
      }
      return { ...state, ...editedStream };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
