import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import { Box, maxWidth } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { LIMIT } from "../utils/consts";
import ProductCard from "./ProductCard";
import "../components/css/homePage.css";


function ProductsList() {
  const { products, getProducts, pageTotalCount } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputVal, setInputVal] = useState(
    searchParams.get("title_like") || ""
  );
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: 1,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: 1,
      });
    }
    setPage(1);
  }, [inputVal, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: page,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: page,
      });
    }
  }, [page]);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);
  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{ margin: "20px 0", width: "100%" }}
          variant="outlined"
          label="Search"
        />
        <FormControl>
          <InputLabel
            style={{
              margin: "20px 0",
            }}
            id="demo-simple-select-label"
          >
            Category
          </InputLabel>
          <Select
            style={{ margin: "20px 0", width: "100px", border: "none" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"java script"}>java script</MenuItem>
            <MenuItem value={"CSS HTML"}>CSS HTML</MenuItem>
            <MenuItem value={"HTML"}>HTML</MenuItem>
            <MenuItem value={"CSS"}>CSS</MenuItem>
            <MenuItem value={"motivation"}>motivation</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {products.map((item, i) => {
          return <ProductCard key={item.id} item={item} index={i} />;
        })}
      </Grid>
      <Box sx={{ maxWidth: "max-content", margin: "20px auto" }}>
        <Pagination
          onChange={(e, p) => setPage(p)}
          page={page}
          count={pageTotalCount}
          color="primary"
        />
      </Box>
    </div>
  );
}

export default ProductsList;
