import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TrainIcon from "@mui/icons-material/Train";
import { styled, alpha } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  boxShadow: theme.shadows[1],
  padding: theme.spacing(3)
}));

const items = [
  {
    icon: <BedtimeIcon />,
    title: "Nocleg",
    description:
      "Na polu namiotowym, w cenie biletu. Do dyspozycji uczestników są przenośne toalety i prysznice oraz punkty z prądem. Niektórzy uczestnicy korzystają z noclegów w pobliskich agroturystykach."
  },
  {
    icon: <TrainIcon />,
    title: "Dojazd",
    description:
      "Najbliższą miejscowością, do której dojeżdża pociąg oraz autobusy dalekobieżne jest Myszków. \n Z Myszkowa można dojechać busami do Żarek, skąd na miejsce imprezy jest około 6 kilometrów."
  },
  {
    icon: <RestaurantMenuIcon />,
    title: "Wyżywienie",
    description: "Informacje wkrótce"
  },
  {
    icon: <CalendarMonthIcon />,
    title: "Program",
    description: "Informacje wkrótce"
    //type: "link"
  }
];

export default function Highlights() {
  return (
    <StyledBox
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 16 }
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 }
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack
              direction="column"
              component={Card}
              spacing={1}
              useFlexGap
              sx={{
                p: 3,
                height: "100%",
                borderColor: "hsla(220, 25%, 25%, 0.3)",
                backgroundColor: "background.default",
                alignItems: "center"
              }}
            >
              <div>
                <Typography
                  gutterBottom
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                  variant="h6"
                >
                  Co, gdzie i kiedy
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "grey.900",
                    textAlign: "center",
                    whiteSpace: "pre-line"
                  }}
                >
                  <p>26.07 - 03.08.2025</p>
                  <p>
                    <Link href="https://maps.app.goo.gl/h2fYT5WwmHKT4QCg7">
                      Czatachowa
                    </Link>
                  </p>
                  Teren Fornostu (pole namiotowe) znajduje się na samym końcu
                  jednej z dwóch dróg w miejscowości.
                </Typography>
              </div>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack
              direction="column"
              component={Card}
              spacing={1}
              useFlexGap
              sx={{
                p: 3,
                height: "100%",
                borderColor: "hsla(220, 25%, 25%, 0.3)",
                backgroundColor: "background.default",
                alignItems: "center"
              }}
            >
              <Typography
                gutterBottom
                sx={{ fontWeight: "bold", textAlign: "center" }}
                variant="h6"
              >
                Bilety
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "grey.900", textAlign: "center" }}
              >
                bilet normalny - 550zł
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "grey.900", textAlign: "center" }}
              >
                bilet studencki - 500zł
              </Typography>

              <Link href="https://forms.gle/QvSuBcXhJ8sQhdYq6">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ minWidth: "fit-content", marginTop: 2 }}
                  href="https://forms.gle/HNEsudkPU7hbJMQVA"
                  target="_blank"
                >
                  Kup bilet
                </Button>
              </Link>
            </Stack>
          </Grid>

          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "background.default",
                  alignItems: "center"
                }}
              >
                <Typography
                  gutterBottom
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                  variant="h6"
                >
                  {item.title}
                </Typography>

                {item.type === "link" ? (
                  <Link href="https://maps.app.goo.gl/h2fYT5WwmHKT4QCg7">
                    {item.description}
                  </Link>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "center",
                      whiteSpace: "pre-line"
                    }}
                  >
                    {item.description}
                  </Typography>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledBox>
  );
}
