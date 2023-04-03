import {
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
import { Link } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useCartContext } from "../contexts/CartContext";

function ProductCard({ item }) {
  const { deleteProduct } = useProductContext();
  const { addProductToCart, deleteProductCart, isAllReadyInCart } =
    useCartContext();
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="320"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => deleteProduct(item.id)}
            color="error"
            size="small"
          >
            Delete
          </Button>
          <Button component={Link} to={`/details/${item.id}`} size="small">
            Buy
          </Button>
          <Button
            component={Link}
            to={`/edit/${item.id}`}
            color="warning"
            size="small"
          >
            Edit
          </Button>
          {isAllReadyInCart(item.id) ? (
            <IconButton onClick={() => deleteProductCart(item.id)}>
              <RemoveShoppingCartOutlinedIcon color="error" />
            </IconButton>
          ) : (
            <IconButton onClick={() => addProductToCart(item)}>
              <AddShoppingCartIcon color="success" />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard;
