import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useCartContext } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";
import video from "../video/video-1.mp4";
import { videos } from "../video";
import { useSavedContext } from "../contexts/SavedContext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function ProductCard({ item, index }) {
  const { deleteProduct } = useProductContext();
  const { addProductToCart, deleteProductCart, isAllReadyInCart } =
    useCartContext();
  const { addProductToSaved, deleteProductSaved, isAllReadyInSaved } =
    useSavedContext();
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card style={{ background: "#b8e2e5", borderRadius: "10px" }}>
        <CardMedia
          style={{
            margin: "-60px 0",
            cursor: "pointer",
          }}
          sx={{ objectFit: "contain" }}
          component="img"
          alt="green iguana"
          height="320"
          image={item.image}
          onClick={() => navigate(`/details/${item.id}-${index}`)}
          // src="https://www.youtube.com/watch?v=2Ep6VmdKjGE"
          // controls
        />
        <CardContent>
          <Typography
            style={{ textAlign: "left" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography
            style={{ textAlign: "left" }}
            variant="body2"
            color="text.secondary"
          >
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 4px",
          }}
        >
          {isAdmin() ? (
            <>
              <Typography
                style={{ textAlign: "left" }}
                variant="body2"
                color="text.secondary"
              >
                ${item.price}
              </Typography>
              <Button
                onClick={() => deleteProduct(item.id)}
                color="error"
                size="small"
              >
                Delete
              </Button>
              <Button
                component={Link}
                to={`/edit/${item.id}`}
                color="success"
                size="small"
              >
                Edit
              </Button>
            </>
          ) : null}
          {/* <Typography
            style={{ textAlign: "left" }}
            variant="body2"
            color="text.secondary"
          >
            ${item.price}
          </Typography> */}
          <Button
            style={{ margin: "0" }}
            component={Link}
            to={`/details/${item.id}-${index}`}
            size="small"
            color="inherit"
          >
            more
          </Button>
          {isAllReadyInCart(item.id) ? (
            <IconButton onClick={() => deleteProductCart(item.id)}>
              <RemoveShoppingCartOutlinedIcon color="error" />
            </IconButton>
          ) : (
            <IconButton onClick={() => addProductToCart(item)}>
              <AddShoppingCartIcon style={{ margin: "0" }} color="success" />
            </IconButton>
          )}
          {isAllReadyInSaved(item.id) ? (
            <IconButton onClick={() => deleteProductSaved(item.id)}>
              <BookmarkIcon color="black" />
            </IconButton>
          ) : (
            <IconButton onClick={() => addProductToSaved(item)}>
              <BookmarkBorderIcon color="black" />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard;
