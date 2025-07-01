import * as React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import DescriptionIcon from "@mui/icons-material/Description";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FlatwareIcon from "@mui/icons-material/Flatware";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleDriveIcon from "@mui/icons-material/Cloud";
import grafikaGG from "../assets/Grafika GG 2025.png";

export default function PrzeprawaKrolow() {
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
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
          >
            <Box
              component="img"
              src={grafikaGG}
              alt="Grafika GG 2025"
              sx={{
                maxWidth: "100%",
                width: { xs: "50%", md: "30%" },
                height: "auto",
                borderRadius: "8px"
              }}
            />
          </Box>

          <Stack>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "left"
              }}
            >
              Przeprawa Królów - Gra główna
            </Typography>
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Dokument projektowy
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Zawierający wszystkie podstawowe informacje o grze i mechanikę.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <DescriptionIcon color="warning" fontSize="small" />
              <Link
                href="https://drive.google.com/file/d/1t_Bd8ntpCuEu72KsiWs-ue16fQgPgqv1/view?fbclid=IwY2xjawJKoJpleHRuA2FlbQIxMAABHQYm2ITBd4228ajqcZHX5IQSBt6YanjBGPO284EbGn6sxiI-m3puYrUnZQ_aem_TKsY-5WVxc1owfi9ftVfkA"
                target="_blank"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { color: "grey.700" }
                }}
              >
                Design doc
              </Link>
            </Stack>
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Inne przydatne linki
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <GoogleDriveIcon color="warning" fontSize="small" />
              <Link
                href="https://drive.google.com/file/d/1xjNNbmy5CgwwUB0aW-8sHcWIsy6wmRgZ/view"
                target="_blank"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { color: "grey.700" }
                }}
              >
                Poradnik strojowy
              </Link>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <PinterestIcon color="warning" fontSize="small" />
              <Link
                href="https://pl.pinterest.com/ponczoo/"
                target="_blank"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { color: "grey.700" }
                }}
              >
                Inspiracje strojowe na Pinterest
              </Link>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <GoogleDriveIcon color="warning" fontSize="small" />
              <Link
                href="https://drive.google.com/file/d/1cPPp4Q_fjpNJpkWdFzwrUIs1W5B-tYA9/view"
                target="_blank"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { color: "grey.700" },
                  textAlign: "left"
                }}
              >
                Opis świata i streszczenie fabularne poprzednich odsłon
              </Link>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <FacebookIcon color="warning" fontSize="small" />
              <Link
                href="https://www.facebook.com/events/895237192729983/"
                target="_blank"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { color: "grey.700" }
                }}
              >
                Wydarzenie na Facebooku
              </Link>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <RestaurantIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Podczas gry żywić was będzie{" "}
                <Link
                  href="https://ogtevents.pl/karczma-bienenwald/"
                  target="_blank"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    "&:hover": { color: "grey.700" }
                  }}
                >
                  Karczma Benewald
                </Link>
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Zabierz na "Przeprawę królów"
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <LightbulbIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Klimatyczne źródło światła (np. lampa lub świeca LED).
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
                Miska, kubek i sztućce, by móc korzystać z karczmy w klimacie,
                przygotowanej przez zespół Karczmy Bienewald.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
