import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS2, API2 } from "../utils/consts";

const commentContext = createContext();
const initState = {
  comments: [],
  oneComment: null,
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS2.comments:
      return { ...state, comments: action.payload };
    case ACTIONS2.oneComment:
      return { ...state, oneComment: action.payload };
    default:
      return state;
  }
}
export function useCommentContext() {
  return useContext(commentContext);
}

function CommentsContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getComments() {
    try {
      const res = await axios.get(`${API2}`);

      dispatch({
        type: ACTIONS2.comments,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneComment(id) {
    try {
      const { data } = await axios.get(`${API2}/${id}`);
      dispatch({
        type: ACTIONS2.oneComment,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function addComment(newComment) {
    try {
      await axios.post(API2, newComment);
      getComments();
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteComment(id) {
    try {
      await axios.delete(`${API2}/${id}`);
      getComments();
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(state.products.length);
  const value = {
    comments: state.comments,
    oneComment: state.oneComment,
    getComments,
    deleteComment,
    addComment,
    getOneComment,
  };
  return (
    <commentContext.Provider value={value}>{children}</commentContext.Provider>
  );
}

export default CommentsContext;
