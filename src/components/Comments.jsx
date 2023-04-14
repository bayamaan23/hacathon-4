import React, { useEffect } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "react-bootstrap/Carousel";
import Modal from "../components/Modal";
import { useCommentContext } from "../contexts/CommentsContext";
import { Avatar } from "@mui/material";

function Comments() {
  const { comments, getComments } = useCommentContext();

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <Modal />

      <div>
        {comments.map((item) => {
          return (
            <div key={item.id}>
              <div
                style={{
                  display: "flex",
                  height: 50,
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{ marginRight: 10 }}
                  alt={item.name}
                  src={item.avatar}
                />

                <span>{item.name}</span>
              </div>
              <h3>{item.text}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
