import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import olca from "../../assets/olca.png";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundImage: `url(${olca})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 400
  }
  // ...theme.applyStyles("dark", {
  //   boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
  //   // backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
  //   outlineColor: "hsla(220, 20%, 42%, 0.1)",
  //   borderColor: (theme.vars || theme).palette.grey[700]
  // })
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={theme => ({
        width: "100%",
        backgroundRepeat: "no-repeat"
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 }
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)"
            }}
          >
            Fornost&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={theme => ({
                fontSize: "inherit",
                color: "primary.main"
              })}
            >
              2025
            </Typography>
          </Typography>
          <Typography variant="h6">
            Fornost to tygodniowy, terenowy konwent dla miłośników fantasy.
            Odbywa się w miejscowości Czatachowa położnej na Jurze
            Krakowsko-Częstochowskiej. Program imprezy pełny jest larpów,
            warsztatów i konkursów. Główną atrakcję stanowi 2-dniowy LARP
            osadzony w świecie J.R.R. Tolkiena.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
            justifyContent={"center"}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ minWidth: "fit-content" }}
            >
              Dowiedz się więcej
            </Button>
          </Stack>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}
