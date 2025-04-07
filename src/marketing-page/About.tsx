import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FestivalIcon from "@mui/icons-material/Festival";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import FlatwareIcon from "@mui/icons-material/Flatware";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BackpackIcon from "@mui/icons-material/Backpack";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { styled, alpha } from "@mui/material/styles";
import { Pin } from "@mui/icons-material";

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
          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Fornost jest larpowym konwentem terenowym, którego wizytówką jest
              duży, trzydniowy larp w świecie Śródziemia (wykreowanym przez
              J.R.R. Tolkiena). Gra odbywa się w IV Erze, około sto pięćdziesiąt
              lat po odpłynięciu za morze Drużyny Pierścienia. Szczegółowe
              informacje na temat Gry Głównej znajdziesz na{" "}
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
              Fornost to także stolica Króla Północy, gród wzniesiony na ruinach
              poprzedniej twierdzy Dunedainów o tej samej nazwie. Jest
              centralnym punktem kraju Arnor, zarządzanego przez Królewskich
              Namiestników. Konwent Fornost po raz pierwszy odbył się w 2008
              roku, a od kilku odsłon ma miejsce na malowniczych terenach Jury
              Krakowsko-Częstochowskiej we wsi Czatachowa.
            </Typography>
          </Stack>

          <Stack>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Atrakcje
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
                Nasz konwent to przede wszystkim LARPy, konkursy i turnieje
                odbywające się z dala od cywilizacji, na obszernych terenach
                leśnych w pobliżu pola obozowego. Jednakże Fornost ma do
                zaoferowania znacznie więcej atrakcji, niż widnieje w tabeli
                programowej. Co wieczór odbywają się ogniska z gitarą,. Ponadto
                okolica z jurajskimi skałami i szlakami turystycznymi jest
                atrakcją samą w sobie. Największym punktem w programie Fornostu
                jest Gra Główna – dwudniowy larp w tolkienowskim świecie
                Śródziemia. Jeśli wybierasz się na Fornost po raz pierwszy i
                chcesz wziąć udział w LARPie, przeczytaj Podręcznik Gracza i
                wypełnij formularz zgłoszeniowy, które znajdziesz na stronie
                wydarzenia Gry Głównej na Facebooku.Wszelkie pytania możesz
                również kierować do nas na{" "}
                <a href="https://discord.gg/P586NAPCxy" target="_blank">
                  Discordzie
                </a>
              </Typography>
            </Stack>
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
                Na Fornoście zawsze przebywa osoba dyżurująca, zmotoryzowana,
                gotowa odpowiednio zareagować na wypadki i inne niefortunne
                zdarzenia. Ze względów bezpieczeństwa, osoby w wieku poniżej 15
                lat nie mogą wziąć udziału w Fornoście inaczej niż pod opieką
                pełnoletniego opiekuna, wskazanego na piśmie przez opiekunów
                prawnych. Osoby niepełnoletnie, które skończyły 15 lat, podczas
                akredytacji muszą przedłożyć zgodę rodziców (lub opiekunów
                prawnych) na udział dziecka w Fornoście. Formularz zgody można
                pobrać z{" "}
                <a
                  href="https://docs.google.com/document/d/1NnXKQTZZWfd5dkI4q_PUUHAEWNpYEH1q3Ew4i6FfF4c/edit?usp=sharing"
                  target="_blank"
                >
                  tego adresu.
                </a>
              </Typography>
            </Stack>

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
                W trakcie trwania konwentu możecie zauważyć, że niektóre osoby
                noszą kolorowe bandany. Oznaczają one konkretne funkcje, jakie
                pełni dana osoba na imprezie: 🔴 Organizator 🔵 Helper 🟢 Twórca
                programu, w tym GG
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Co zabrać
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
                Jeśli planujesz nocleg pod namiotem, weź… namiot 🙂 Nieodzowny
                będzie też śpiwór (najlepiej z karimatą). Noce na przełomie
                lipca i sierpnia są zwykle dość ciepłe, więc nie musisz
                zaopatrywać się w sprzęt polarny, niemniej ciepła kurtka może
                się przydać. Na wypadek deszczowej aury rozważ coś
                przeciwdeszczowego i odpowiednie obuwie (świetnie sprawdzają się
                kalosze).
              </Typography>
            </Stack>

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
                Przydatna może okazać się również latarka (najlepiej
                „czołówka”). Nie zaszkodzi też uzbroić się w zapasowe baterie do
                niej. Zalecamy także zabranie ze sobą kremów z filtrem oraz
                preparatu odstraszającego komary i kleszcze. Koniecznie zabierz
                ze sobą dowód osobisty lub legitymację szkolną (wymagamy
                dokumentu przy akredytacji) oraz dużo lekkich, przewiewnych
                ubrań. Przygotuj sobie również stroje na larpy, jeśli zamierzasz
                brać w nich udział (zgłosiwszy się przed konwentem do
                organizatorów poszczególnych gier po postaci, dowiesz się,
                jakich strojów będzie Ci potrzeba). Warto zaopatrzyć się we
                własnym zakresie w klimatyczny ubiór, buty, nakrycia głowy,
                akcesoria, bezpieczną broń itp. Bardzo ważnymi akcesoriami dla
                uczestników Gry Głównej są własne (klimatyczne) naczynia i
                sztućce oraz źródło światła (lampiony czy świece LED).
              </Typography>
            </Stack>

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
                A jeśli poszukujesz rozszerzonej listy, którą możesz z łatwością
                skopiować lub wydrukować, zerknij{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1J9lHCVVVNate3HOM0jspIGSs-9J4Epb2JKUJfQ4voLA/edit?gid=361035351#gid=361035351"
                  target="_blank"
                >
                  właśnie tutaj.
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
