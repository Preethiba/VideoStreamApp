import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from "./Types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues, history) => async (
  dispatch,
  getState
) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams.json", {
    ...formValues,
    userId
  });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams.json");
  if (response.data) {
    for (const key of Object.keys(response.data)) {
      response.data[key].id = key;
    }
  }

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}.json`);
  var res = response.data;
  if (response.data) {
    response.data.id = id;

    res = {
      [id]: response.data
    };
  }

  dispatch({ type: FETCH_STREAM, payload: res });
};

export const editStream = (id, formValues, history) => async dispatch => {
  const response = await streams.patch(`/streams/${id}.json`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id, history) => async dispatch => {
  await streams.delete(`/streams/${id}.json`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
