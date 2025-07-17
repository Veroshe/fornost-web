import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Import images - using public folder for production compatibility
const photo5 = "/photos/_TYR5228.jpg";
const photo6 = "/photos/_TYR5279.jpg";
const photo7 = "/photos/_TYR5307.jpg";
const photo8 = "/photos/_TYR5459.jpg";

export default function About() {
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
          <Typography
            variant="h2"
            sx={{
              color: "grey.900",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            O Fornoście
          </Typography>
          <Grid container spacing={3} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={8}>
              <Stack spacing={2}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "grey.900",
                    textAlign: "left",
                    whiteSpace: "pre-line"
                  }}
                >
                  Fornost jest larpowym konwentem terenowym, którego wizytówką
                  jest duży, trzydniowy larp w świecie Śródziemia (wykreowanym
                  przez J.R.R. Tolkiena). Gra odbywa się w IV Erze, około sto
                  pięćdziesiąt lat po odpłynięciu za morze Drużyny Pierścienia.
                  Szczegółowe informacje na temat Gry Głównej znajdziesz na{" "}
                  <a
                    href="https://www.facebook.com/events/895237192729983"
                    target="_blank"
                  >
                    dedykowanym wydarzeniu.
                  </a>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "grey.900",
                    textAlign: "left",
                    whiteSpace: "pre-line"
                  }}
                >
                  Fornost to także stolica Króla Północy, gród wzniesiony na
                  ruinach poprzedniej twierdzy Dunedainów o tej samej nazwie.
                  Jest centralnym punktem kraju Arnor, zarządzanego przez
                  Królewskich Namiestników. Konwent Fornost po raz pierwszy
                  odbył się w 2008 roku, a od kilku odsłon ma miejsce na
                  malowniczych terenach Jury Krakowsko-Częstochowskiej we wsi
                  Czatachowa.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={photo5}
                alt="Fornost - historia i tradycja"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  boxShadow: 2
                }}
              />
            </Grid>
          </Grid>

          <Stack>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Atrakcje
            </Typography>

            <Grid container spacing={3} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "grey.900",
                    textAlign: "left",
                    whiteSpace: "pre-line"
                  }}
                >
                  Nasz konwent to przede wszystkim LARPy, konkursy i turnieje
                  odbywające się z dala od cywilizacji, na obszernych terenach
                  leśnych w pobliżu pola obozowego. Jednakże Fornost ma do
                  zaoferowania znacznie więcej atrakcji, niż widnieje w tabeli
                  programowej. Co wieczór odbywają się ogniska z gitarą. Ponadto
                  okolica z jurajskimi skałami i szlakami turystycznymi jest
                  atrakcją samą w sobie. Najważniejszym punktem w programie
                  Fornostu jest Gra Główna – dwudniowy larp w Tolkienowskim
                  Śródziemiu. Jeśli wybierasz się na Fornost po raz pierwszy i
                  chcesz wziąć udział w LARPie, przeczytaj Podręcznik Gracza i
                  wypełnij formularz zgłoszeniowy, które znajdziesz{" "}
                  <Link href="/#/przeprawa">tutaj</Link>. Wszelkie pytania
                  możesz również kierować do nas na{" "}
                  <a href="https://discord.gg/P586NAPCxy" target="_blank">
                    Discordzie
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={photo6}
                  alt="Fornost - atrakcje i aktywności"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 1,
                    boxShadow: 2
                  }}
                />
              </Grid>
            </Grid>
          </Stack>

          {/* <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Pomoc ze strojami
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Tekst o strojach
              </Typography>
            </Stack>
          </Stack> */}

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Bezpieczeństwo
            </Typography>

            <Grid container spacing={3} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "left",
                      whiteSpace: "pre-line"
                    }}
                  >
                    Na Fornoście zawsze przebywa osoba dyżurująca,
                    zmotoryzowana, gotowa odpowiednio zareagować na wypadki i
                    inne niefortunne zdarzenia. Ze względów bezpieczeństwa,
                    osoby w wieku poniżej 15 lat nie mogą wziąć udziału w
                    Fornoście inaczej niż pod opieką pełnoletniego opiekuna,
                    wskazanego na piśmie przez opiekunów prawnych. Osoby
                    niepełnoletnie, które skończyły 15 lat, podczas akredytacji
                    muszą przedłożyć zgodę rodziców (lub opiekunów prawnych) na
                    udział dziecka w Fornoście. Formularz zgody można pobrać z{" "}
                    <a
                      href="https://docs.google.com/document/d/1NnXKQTZZWfd5dkI4q_PUUHAEWNpYEH1q3Ew4i6FfF4c/edit?usp=sharing"
                      target="_blank"
                    >
                      tego adresu.
                    </a>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "left",
                      whiteSpace: "pre-line"
                    }}
                  >
                    W trakcie trwania konwentu możecie zauważyć, że niektóre
                    osoby noszą kolorowe bandany. Oznaczają one konkretne
                    funkcje, jakie pełni dana osoba na imprezie: 🔴 Organizator
                    🟢 Twórca Gry Głównej ⚪ Osoba bezpieczeństwa
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={photo7}
                  alt="Fornost - bezpieczeństwo i organizacja"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 1,
                    boxShadow: 2
                  }}
                />
              </Grid>
            </Grid>
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Co zabrać
            </Typography>

            <Grid container spacing={3} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "left",
                      whiteSpace: "pre-line"
                    }}
                  >
                    Jeśli planujesz nocleg pod namiotem, weź… namiot (oczywiście
                    wraz ze śpiworem i karimatą/materacem). Noce na przełomie
                    lipca i sierpnia są zwykle dość ciepłe, więc nie musisz
                    zaopatrywać się w sprzęt polarny, niemniej ciepła kurtka czy
                    odzież termiczna może się przydać. Na wypadek deszczowej
                    aury rozważ coś przeciwdeszczowego i odpowiednie obuwie
                    (świetnie sprawdzają się kalosze).
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "left",
                      whiteSpace: "pre-line"
                    }}
                  >
                    Przydatna może okazać się również latarka (najlepiej
                    „czołówka"). Nie zaszkodzi też uzbroić się w zapasowe
                    baterie do niej. Zalecamy także zabranie ze sobą kremów z
                    filtrem oraz preparatu odstraszającego komary i kleszcze.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "left",
                      whiteSpace: "pre-line"
                    }}
                  >
                    Koniecznie zabierz ze sobą dowód osobisty lub legitymację
                    szkolną (wymagamy dokumentu przy akredytacji) oraz dużo
                    lekkich, przewiewnych ubrań.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "left",
                      whiteSpace: "pre-line"
                    }}
                  >
                    Przygotuj sobie również stroje na larpy, jeśli zamierzasz
                    brać w nich udział. Warto zaopatrzyć się we własnym zakresie
                    w klimatyczny ubiór, buty, nakrycia głowy, akcesoria,
                    bezpieczną broń itp.{" "}
                    <b>
                      Bardzo ważnymi akcesoriami dla uczestników Gry Głównej są
                      własne (klimatyczne) naczynia i sztućce oraz źródło
                      światła (lampiony czy świece LED).
                    </b>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.900",
                      textAlign: "left",
                      whiteSpace: "pre-line"
                    }}
                  >
                    A jeśli poszukujesz rozszerzonej listy, zobacz przygotowaną
                    przez nas
                    <a
                      href="https://docs.google.com/spreadsheets/d/1J9lHCVVVNate3HOM0jspIGSs-9J4Epb2JKUJfQ4voLA/edit?gid=361035351#gid=361035351"
                      target="_blank"
                    >
                      listę,
                    </a>{" "}
                    dzięki której o niczym nie zapomnisz. Plik możesz skopiować
                    na swój dysk i np. wydrukować.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={photo8}
                  alt="Fornost - wyposażenie i przygotowanie"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 1,
                    boxShadow: 2
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
