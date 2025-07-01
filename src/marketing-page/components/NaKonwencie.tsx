import * as React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BackpackIcon from "@mui/icons-material/Backpack";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function NaKonwencie() {
  return (
    <>
      <div className="back"></div>
      <Container>
        <Stack
          direction="column"
          component={Card}
          spacing={1}
          useFlexGap
          sx={theme => ({
            p: 3,
            height: "100%",
            borderColor: "hsla(220, 25%, 25%, 0.3)",
            backgroundColor: "background.default",
            alignItems: "left",
            gap: 2,
            marginTop: { xs: 4, sm: 6 },
            boxShadow: theme.shadows[1]
          })}
        >
          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Na konwencie
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <BackpackIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Co zabrać? Zobacz przygotowaną przez nas{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1J9lHCVVVNate3HOM0jspIGSs-9J4Epb2JKUJfQ4voLA/edit?usp=drive_link"
                  target="_blank"
                >
                  listę
                </a>
                , dzięki której o niczym nie zapomnisz. Plik możesz skopiować na
                swój dysk i np. wydrukować
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <InfoIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Pierwszy raz? Po dotarciu na miejscu konwentu znajdź osobę z
                ekipy Organizacji, poznasz ich po czerwonej bandanie. Każdy
                członek zespołu organizacyjnego z chęcią odpowie na wszelkie
                pytania i pomoże Ci odnaleźć się na konwencie.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <AssignmentIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Akredytacja będzie prowadzona w białym namiocie na głównym polu
                w godzinach: 15-16 każdego dnia oraz 19-20 w sobotę, niedzielę i
                środę. Przy akredytacji możecie również kupić i/lub odebrać
                gadżety konwentowe.
                <b> Akredytacja jest obowiązkowa dla każdego uczestnika.</b>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
