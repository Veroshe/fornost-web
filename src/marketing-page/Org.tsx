import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MediaCard from "./components/Card";
import Grid from "@mui/material/Grid2";
import gosia from "../assets/org/gosia.jpg";
import famos from "../assets/org/famos.jpg";
import gin from "../assets/org/gin.jpg";
import nowy from "../assets/org/nowy.jpg";
import olca from "../assets/org/olca.jpg";
import ponczo from "../assets/org/ponczo.jpg";
import orzech from "../assets/org/orzech.jpg";
import sharp from "../assets/org/sharp.jpg";
import tyna from "../assets/org/tyna.jpg";
import wero from "../assets/org/wero.jpg";
import ojo from "../assets/org/ojo.jpg";
import ozlo from "../assets/org/ozlo.jpg";
import rudy from "../assets/org/rudy.jpg";
import blazej from "../assets/org/blazej.jpg";

const ORGANIZACJA = [
  {
    name: "Weronika 'Wero'\n Kalinowska",
    image: wero,
    text: "Koordynacja i logistyka"
  },
  {
    name: "Małgorzata\n Jakubowska",
    image: gosia,
    text: "Program, oprawa muzyczna"
  },
  {
    name: "Julia 'Ponczo'\n Liszewska",
    image: ponczo,
    text: "Social media, koordynator pola"
  },
  {
    name: "Mateusz 'Orzech'\n Orzechowski",
    image: orzech,
    text: "Logistyka, merch"
  },
  {
    name: "Aleksandra 'Olca'\n Gąsiorowska",
    image: olca,
    text: "Social media, zachowanie ładu"
  },
  {
    name: "Martyna 'Tyna'\n Królak",
    image: tyna,
    text: "Grafika, oprawa wizualna"
  },
  {
    name: "Michał 'Nowy'\n Bąk",
    image: nowy,
    text: "Kontakty międzykonwentowe"
  },
  {
    name: "Bartosz 'Artysta'\n Brózda",
    image: rudy,
    text: "Kontakty międzykonwentowe"
  },
  {
    name: "Błażej\n Kardyś",
    image: blazej,
    text: "Wsparcie organizacyjne"
  },
  {
    name: "Filip 'Famos'\n Wróblewski",
    image: famos,
    text: "Wsparcie organizacyjne"
  },
  {
    name: "Ida 'Gin'\n Pacer",
    image: gin,
    text: "Wsparcie organizacyjne"
  },
  {
    name: "Mikołaj 'Ojo'\n Para",
    image: ojo,
    text: "Wsparcie organizacyjne"
  },
  {
    name: "Tomasz 'Ozło'\n Baran",
    image: ozlo,
    text: "Wsparcie organizacyjne"
  },
  {
    name: "Krzysztof 'Sharp'\n Brzoska",
    image: sharp,
    text: "LARP 'Przeprawa Królów'"
  }
];

export default function Org() {
  return (
    <>
      <div className="back"></div>
      <Container>
        <Stack
          direction="column"
          spacing={1}
          useFlexGap
          sx={{
            p: 3,
            height: "100%",
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
            Organizacja
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {ORGANIZACJA.map((org, index) => (
              <Grid key={index} size={{ xs: 2, sm: 3, md: 3 }}>
                <MediaCard image={org.image} name={org.name} text={org.text} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
