import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSavedContext } from "../contexts/SavedContext";
import { Button, IconButton, Typography } from "@mui/material";
import { useCartContext } from "../contexts/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

export default function SavedPage() {
  const { saved } = useSavedContext();
  const { addProductToCart, deleteProductCart, isAllReadyInCart } =
    useCartContext();
  if (saved.products.length < 1) {
    return <h1>There is no saved yet</h1>;
  }
  return (
    <TableContainer sx={{ padding: "10px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price $</TableCell>
            <TableCell align="right">Sub price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {saved.products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}{" "}
                {isAllReadyInCart(item.id) ? (
                  <IconButton onClick={() => deleteProductCart(item.id)}>
                    <RemoveShoppingCartOutlinedIcon color="error" />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => addProductToCart(item)}>
                    <AddShoppingCartIcon color="success" />
                  </IconButton>
                )}
              </TableCell>

              <TableCell align="right">
                <img width={45} src={item.image} alt="" />
              </TableCell>
              <TableCell align="right">{item.category}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.subPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
