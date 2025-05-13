import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ActionAreaCard({ image, name, text }) {
  return (
    <Card
      sx={{
        borderColor: "hsla(220, 25%, 25%, 0.3)",
        backgroundColor: "background.default",
        whiteSpace: "pre-line"
      }}
    >
      <CardMedia
        component="img"
        height="260"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" marginTop={2}>
          {name}
        </Typography>
        <Typography gutterBottom component="div" marginTop={2}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
