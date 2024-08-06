import React from "react";

import styles from "./Item.module.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 250, height: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={element.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="small" color="primary">
            Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Item;
