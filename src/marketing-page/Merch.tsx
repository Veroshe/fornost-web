import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FestivalIcon from "@mui/icons-material/Festival";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import FlatwareIcon from "@mui/icons-material/Flatware";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled, alpha } from "@mui/material/styles";
import { Pin } from "@mui/icons-material";

export default function Merch() {
  return (
    <>
      <div className="back"></div>
      <Container>
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
            alignItems: "left",
            gap: 2,
            marginTop: { xs: 4, sm: 6 }
          }}
        >
          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Wystartował formularz z przedsprzedażą drewnianych fornostowych
              gadżetów. Wszystkie mogą być nieodłącznym partnerem na wielu
              larpach, a środki uzyskane ze sprzedaży wykorzystamy na rozwój
              naszego kochanego konwentu.
            </Typography>
          </Stack>

          <Stack>
            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <SportsBarIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Kufle powracają w nowej odsłonie! 🍺 Tym razem z wieczkiem.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <FlatwareIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Dodatkowo do gadżetów dołączają: drewniany zestaw złożony z
                miski, widelca oraz łyżki.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <CheckroomIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Bez obaw! Koszulki i bluzy również wkrótce będą możliwe do
                zamówienia.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <AccessTimeIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Zamówienia przyjmujemy do <b>12 czerwca 2025.</b>
              </Typography>
            </Stack>

            <Link
              href="https://forms.gle/8325YPtaAJQF1Mp26"
              alignSelf={"center"}
              target="_blank"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ minWidth: "fit-content", marginTop: 2 }}
              >
                Zamów merch
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
