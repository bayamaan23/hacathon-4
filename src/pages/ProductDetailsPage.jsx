import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { videos } from "../video";
import { TextField } from "@mui/material";
import Reviews from "../components/review/Review";

function ProductDetailsPage() {
  const { oneProduct, getOneProduct } = useProductContext();
  const { id } = useParams();
  const newId = id.split("-"); //1-0 ['1', "0"]

  useEffect(() => {
    getOneProduct(newId[0]);
  }, []);
  // console.log(oneProduct);

  //   if (!oneProduct) {
  //     return <h1>loading...</h1>
  //   }
  console.log(newId, id, videos[newId[1]]);

  return (
    <>
      {oneProduct ? (
        <>
          <Card>
            <h1 style={{ textAlign: "center" }}>N.iCE</h1>
          </Card>
          <Card>
            <CardMedia
              // style={{ width: "800px", objectFit: "cover" }}
              alt="js"
              sx={{ width: "100%", height: "100%" }}
              image={videos[newId[1]]}
              component="video"
              controls
            />
            <Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {oneProduct.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {oneProduct.description}
                </Typography>
                <Typography variant="h6">${oneProduct.price}</Typography>
              </CardContent>
            </Box>
            <CardContent>              
              <Reviews/>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              py: 1,
              overflow: "auto",
              // width: 383,
              scrollSnapType: "x mandatory",
              "& > *": {
                scrollSnapAlign: "center",
              },
              "::-webkit-scrollbar": { display: "none" },
            }}
          ></Box>
        </>
      ) : (
        <h1>Oooops...</h1>
      )}
    </>
  );
}

export default ProductDetailsPage;
