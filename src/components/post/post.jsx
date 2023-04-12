import React, { useState } from "react";
import styles from "./post.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

function Post() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div style={{display:'flex'}}>
      <button
        style={{
          border: "none",
          width: "50px",
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
      <p>
        {likes} {likes === 1 ? "лайк" : "лайков"}
      </p>
    </div>
  );
}

export default Post;
