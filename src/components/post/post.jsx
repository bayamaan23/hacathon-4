import React, { useState, useEffect } from "react";
import styles from "./post.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

function Post() {
  const [likes, setLikes] = useState(
    parseInt(localStorage.getItem("likes")) || 0
  );
  const [isLiked, setIsLiked] = useState(
    JSON.parse(localStorage.getItem("isLiked")) || false
  );

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("likes", likes);
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
  }, [likes, isLiked]);

  return (
    <div style={{ display: "flex" }}>
      <button
        id="like-button"
        style={{
          border: "none",
          height: "30px",
          backgroundColor: "white",
        }}
        onClick={handleLike}
      >
        {isLiked ? (
          <FavoriteOutlinedIcon color="error" />
        ) : (
          <FavoriteBorderOutlinedIcon color="error" />
        )}
      </button>
      <p style={{ padding: "0 5px" }}>
        {likes} {likes === 1 ? "лайк" : "лайков"}
      </p>
    </div>
  );
}

export default Post;
