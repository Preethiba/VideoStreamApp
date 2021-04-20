import firebaseConfig from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from "./Types";

const firebaseConfig = {
  apiKey: "AIzaSyAulxfQiG9TqzEjI7shWJg6CGcCpbYos_s",
  authDomain: "streamy-45e7d.firebaseapp.com",
  databaseURL: "https://streamy-45e7d-default-rtdb.firebaseio.com",
  projectId: "streamy-45e7d",
  storageBucket: "streamy-45e7d.appspot.com",
  messagingSenderId: "139885758480",
  appId: "1:139885758480:web:0a56294589387bab9a6295"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

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

export const createStream = formValues => async dispatch => {
  firebase
    .database()
    .ref("streams/")
    .push(formValues);
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
