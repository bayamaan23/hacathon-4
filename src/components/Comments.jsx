import React, { useEffect } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "../components/Modal";
import { useCommentContext } from "../contexts/CommentsContext";

function Comments() {
  const { comments, getComments } = useCommentContext();

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <Modal />
    </>
  );
}

export default Comments;
