import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import logo from "../../assets/stare.png";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://mui.com/">
        Sitemark
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 4 },
        textAlign: { sm: "center", md: "left" }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" }
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <img src={logo} alt="Logo" style={{ height: 32 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            flexDirection: "column",
            gap: 1
          }}
        >
          <Link
            variant="body2"
            href="https://drive.google.com/file/d/1VjDghxGRq-vdq5Lxz7vb2sdrI8ODRCYB/view?usp=sharing"
            target="_blank"
          >
            Regulamin
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
