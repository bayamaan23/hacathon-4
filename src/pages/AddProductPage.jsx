import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

function AddProductPage() {
  const { addProduct } = useProductContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.category.trim() ||
      !formValue.image.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    addProduct(formValue);

    setFormValue({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          maxWidth: "500px",
          margin: "0 auto",
          flexDirection: "column",
          gap: "10px",
          background: "#b8e2e5",
        }}
      >
        <TextField
          value={formValue.title}
          name="title"
          label="Title"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={formValue.description}
          name="description"
          label="description"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={formValue.price}
          name="price"
          label="Price"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formValue.category}
            label="Category"
            onChange={handleChange}
            name="category"
          >
            <MenuItem value={"java script"}>java script</MenuItem>
            <MenuItem value={"CSS"}>CSS</MenuItem>
            <MenuItem value={"CSS HTML"}>CSS HTML</MenuItem>
            <MenuItem value={"HTML"}>HTML</MenuItem>
            <MenuItem value={"motivation"}>motivation</MenuItem>
          </Select>
        </FormControl>
        <TextField
          value={formValue.image}
          name="image"
          label="Image"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <Button
          style={{ background: "black" }}
          type="submit"
          variant="contained"
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddProductPage;
