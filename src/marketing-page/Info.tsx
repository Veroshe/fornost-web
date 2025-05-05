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

export default function Info() {
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
              Fornost to tygodniowy, terenowy konwent dla miłośników fantasy.
              Odbywa się w miejscowości Czatachowa położnej na Jurze
              Krakowsko-Częstochowskiej. Program imprezy pełny jest larpów,
              warsztatów i konkursów. Główną atrakcję stanowi 2-dniowy LARP
              osadzony w świecie J.R.R. Tolkiena.
            </Typography>
          </Stack>

          <Stack>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Gdzie i kiedy
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <CalendarMonthIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                27.07 - 03.08.2025
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <PinDropIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Czatachowa, Jura Krakowsko-Częstochowska.
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Nocleg, wyżywienie, dojazd
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <FestivalIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Nocleg - na polu namiotowym (w cenie biletu) z dostępem do
                przenośnych toalet i pryszniców oraz możliwością korzystania z
                prądu. Podczas wszystkich larpów i innych punktów programu
                dostępna jest woda pitna w baniakach. Przez całą dobę na terenie
                pola namiotowego dostępny jest warnik z gorącą, przegotowaną
                wodą.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <LocalHotelIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Okoliczna agroturystyka - we własnym zakresie.
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
                Do dyspozycji wszystkich uczestników będzie catering od{" "}
                <a
                  href="https://www.przystanlesniow.pl/resturacja/restauracja"
                  target="_blank"
                >
                  Przystani Leśniów{" "}
                </a>
                oferujący śniadania, dania z grilla i (zamawiane dzień
                wcześniej) zestawy obiadowe. Oprócz posiłków, Przystań Leśniów
                będzie mieć w swoim asortymencie ciepłe i zimne napoje (zarówno
                alkoholowe, jak i bezalkoholowe) oraz przekąski.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <DirectionsTransitIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Najbliższą miejscowością, do której dojeżdża pociąg oraz
                autobusy dalekobieżne jest Myszków. Jeśli nie masz mozliwości
                dojazdu z Myszkowa lub innej pobliskiej miejscowości - dołącz do
                naszego{" "}
                <a href="https://discord.gg/P586NAPCxy" target="_blank">
                  serwera na Discordzie{" "}
                </a>
                i zapytaj o możliwości podwózki. Co roku wiele osób organizuje
                się na wspólny dojazd, na pewno znajdzie się ktoś kto będzie
                mógł Ci pomóc.
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", marginTop: 2 }}
              variant="h6"
            >
              Bilety
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <LocalActivityIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Zakup biletu uprawnia do udziału w programie konwentu oraz do
                korzystania z pola namiotowego. Szczegóły dotyczące cen i opcji
                biletów znajdziesz w formularzu do którego link widnieje
                poniżej.
              </Typography>
            </Stack>

            <Link
              href="https://forms.gle/QvSuBcXhJ8sQhdYq6"
              alignSelf={"center"}
            >
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

          <Stack>
            <Typography
              gutterBottom
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
              <AttractionsIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                LARPy, konkursy i turnieje odbywające się z dala od cywilizacji,
                na obszernych terenach leśnych w pobliżu pola obozowego
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <LocalFireDepartmentIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Co wieczorne ognisko z śpiewem i dobrą zabawą.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <SportsKabaddiIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Największym punktem w programie Fornostu jest Gra Główna –
                dwudniowy larp w tolkienowskim świecie Śródziemia. Jeśli
                wybierasz się na Fornost po raz pierwszy i chcesz wziąć udział w
                LARPie, przeczytaj Podręcznik Gracza i wypełnij formularz
                zgłoszeniowy, które znajdziesz na{" "}
                <a
                  href="https://www.facebook.com/events/895237192729983"
                  target="_blank"
                >
                  stronie wydarzenia Gry Głównej na Facebooku.
                </a>{" "}
                Wszelkie pytania możesz również kierować do nas na{" "}
                <a href="https://discord.gg/P586NAPCxy" target="_blank">
                  Discordzie{" "}
                </a>
              </Typography>
            </Stack>
            {/* 
            <Link
              href="https://forms.gle/QvSuBcXhJ8sQhdYq6"
              alignSelf={"center"}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ minWidth: "fit-content", marginTop: 4 }}
                href="https://forms.gle/HNEsudkPU7hbJMQVA"
                target="_blank"
              >
                Zobacz program konwentu
              </Button>
            </Link> */}
          </Stack>

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
              <HealthAndSafetyIcon color="warning" fontSize="small" />
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
                zdarzenia. W ekipie organizatorskiej znajduje się również osoba
                po kursie pierwszej pomocy, mogąca udzielić pomocy w razie
                potrzeby.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <FamilyRestroomIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Ze względów bezpieczeństwa, osoby w wieku poniżej 15 lat nie
                mogą wziąć udziału w Fornoście inaczej niż pod opieką
                pełnoletniego opiekuna, wskazanego na piśmie przez opiekunów
                prawnych. Osoby niepełnoletnie, które skończyły 15 lat, podczas
                akredytacji muszą przedłożyć zgodę rodziców (lub opiekunów
                prawnych) na udział dziecka w Fornoście. Formularz zgody można
                pobrać z{" "}
                <a
                  href="https://drive.google.com/file/d/10OVwLGKLCPoKyXGm_Gbva9wiB0CKkGSs/view"
                  target="_blank"
                >
                  tego adresu.
                </a>
              </Typography>
            </Stack>
          </Stack>

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
