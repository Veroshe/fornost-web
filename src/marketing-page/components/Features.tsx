import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import szarp from "../../assets/szarp.jpg";
import szarpMobile from "../../assets/szarp_mobile.jpg";
import marek from "../../assets/marek.jpg";
import marekMobile from "../../assets/marek_mobile.jpg";
import gandi from "../../assets/gandi.jpg";
import gandiMobile from "../../assets/gandi_mobile.jpg";

import { styled, alpha } from "@mui/material/styles";

const items = [
  {
    title: "LARP - Przeprawa Królów",
    item1: "Trzydniowy LARP terenowy 31.07 - 2.08.2025",
    item2: "Setting: Śródziemie J.R.R. Tolkiena",
    item3: "LARP fabularny (z opcjonalną bitką)",
    item4: "Przystępny dla nowych graczy",
    image: `url(${szarp})`,
    imageMobile: `url(${szarpMobile})`
  },
  {
    title: "LARPY i inne atrakcje",
    item1:
      "LARPY terenowe i chambery (m.in. 'Pstryk!' - zwycięzca Larpowych Laurów 2024)",
    item2: "Prelekcje i warsztaty",
    item3: "Turniej juggera",
    image: `url(${marek})`,
    imageMobile: `url(${marekMobile})`
  },
  {
    title: "Tydzień chillery w lesie",
    item1: "Codzienne wieczorne ogniska pełne muzyki i dobrej zabawy",
    item2:
      "Planszówki, sejse RPG, pogaduchy o najnowszych wydaniach Silmarillionu (i nie tylko!)",
    item3: "Odpoczynek z dala od cywilizacji",
    image: `url(${gandi})`,
    imageMobile: `url(${gandiMobile})`
  }
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: (theme.vars || theme).palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)"
        },
        ...theme.applyStyles("dark", {
          borderColor: (theme.vars || theme).palette.primary.dark
        })
      }
    }
  ]
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflow: "auto", flexWrap: "wrap" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
            className={selectedItemIndex === index ? "chipSelected" : ""}
          />
        ))}
      </Box>
      <Card
        variant="outlined"
        sx={[
          theme => ({
            p: 2,
            height: "100%",
            width: "100%",
            "&:hover": {
              backgroundColor: (theme.vars || theme).palette.action.hover,
              color: alpha(theme.palette.background.default, 1)
            },
            borderColor: (theme.vars || theme).palette.divider,
            backgroundColor: alpha(theme.palette.background.default, 0.8),
            boxShadow: theme.shadows[1]
          })
        ]}
      >
        <Box
          sx={theme => ({
            mb: 2,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            minHeight: 280,
            backgroundImage: items[selectedItemIndex].imageMobile
          })}
        />
        <Box
          sx={[
            {
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              textAlign: "left",
              textTransform: "none"
            }
          ]}
        >
          <Typography variant="h6">{selectedFeature.title}</Typography>
          <ul style={{ paddingLeft: "1.5em" }}>
            <li>{selectedFeature.item1}</li>
            <li>{selectedFeature.item2}</li>
            <li>{selectedFeature.item3}</li>
            {selectedFeature.item4 && <li>{selectedFeature.item4}</li>}
          </ul>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setSelectedItemIndex(selectedItemIndex =>
  //         selectedItemIndex < 2 ? selectedItemIndex + 1 : 0
  //       ),
  //     5000
  //   );
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container
      id="features"
      sx={theme => ({
        alignItems: "center",
        width: "100%",
        padding: theme.spacing(3),
        borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
        mt: { xs: 4, sm: 12 },
        mb: { xs: 8, sm: 16 }
      })}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
          pt: 4
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
              height: "100%"
            }}
          >
            {items.map(
              ({ icon, title, item1, item2, item3, item4, image }, index) => (
                <Box
                  key={index}
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={[
                    theme => ({
                      p: 2,
                      height: "100%",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: (theme.vars || theme).palette.action
                          .hover,
                        color: alpha(theme.palette.background.default, 1)
                      },
                      borderColor: (theme.vars || theme).palette.divider,
                      backgroundColor: alpha(
                        theme.palette.background.default,
                        0.8
                      ),
                      boxShadow: theme.shadows[1],
                      transition: "background-color 700ms linear"
                    }),
                    selectedItemIndex === index && {
                      backgroundColor: "action.selected",
                      color: "#EEDDD0"
                    }
                  ]}
                >
                  <Box
                    sx={[
                      {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        gap: 1,
                        textAlign: "left",
                        textTransform: "none"
                      }
                    ]}
                  >
                    <Typography variant="h6">{title}</Typography>
                    <ul>
                      <li>{item1}</li>
                      <li>{item2}</li>
                      <li>{item3}</li>
                      {item4 && <li>{item4}</li>}
                    </ul>
                  </Box>
                </Box>
              )
            )}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
            height: "var(--items-image-height)"
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
              border: "none",
              background: "none"
            }}
          >
            <Box
              sx={theme => ({
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundImage: items[selectedItemIndex].image,
                backgroundRepeat: "no-repeat",
                borderRadius: 2,
                transition: "background-image 700ms linear"
              })}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
