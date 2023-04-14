import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useCommentContext } from "../contexts/CommentsContext";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { addComment } = useCommentContext();
  const { user } = useAuthContext();

  const [formValue, setFormValue] = useState({
    text: "",
    avatar: "",
    name: "",
  });

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
      avatar: user.photoURL,
      name: user.displayName,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValue.text.trim()) {
      alert("Fill all the fields!");
      return;
    }
    addComment(formValue);

    setFormValue({
      text: "",
    });
  }

  return (
    <div>
      <Button
        style={{ background: "black" }}
        onClick={handleOpen}
        variant="contained"
      >
        Add comment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
              type="text"
              value={formValue.text}
              name="text"
              label="Enter your comment..."
              onChange={(e) => handleChange(e)}
            />
            <Button
              variant="contained"
              style={{ background: "black", height: "52px" }}
            >
              Send comment
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
