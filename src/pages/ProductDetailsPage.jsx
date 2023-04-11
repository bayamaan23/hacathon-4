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
import { AspectRatio, CardTravelOutlined } from "@mui/icons-material";

// const data = [
//   {
//     src: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-36.jpg",
//     title: "Тип данных number",
//     description: "4.21M views",
//   },
//   {
//     src: "https://murmulet.com/wp-content/uploads/2016/01/Samanta-10.jpg",
//     title: "Тип данных number.",
//     description: "4.74M views",
//   },
//   {
//     src: "https://murmulet.com/wp-content/uploads/2016/01/Samanta-10.jpg",
//     title: "Стрелочные функции, рекурсия",
//     description: "3.98M views",
//   },
// ];
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
            <h1 style={{ textAlign: "center" }}>Java script!!!</h1>
          </Card>
          <Card sx={{ display: "flex", height: "300px" }}>
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
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Box>
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
