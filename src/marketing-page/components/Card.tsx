import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

interface ActionAreaCardProps {
  image: string;
  name: string;
  text: string;
}

export default function ActionAreaCard({
  image,
  name,
  text
}: ActionAreaCardProps) {
  return (
    <Card
      sx={theme => ({
        borderColor: "hsla(220, 25%, 25%, 0.3)",
        backgroundColor: "background.default",
        whiteSpace: "pre-line",
        boxShadow: theme.shadows[1],
        borderRadius: 2.5,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: theme.shadows[4],
          backgroundColor: alpha(theme.palette.action.hover, 0.3)
        }
      })}
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
