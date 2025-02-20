import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import smok2 from "../../assets/smok2.png";
import las from "../../assets/las.png";
import szarp from "../../assets/szarp.png";
import szarpMobile from "../../assets/szarp_mobile.png";
import marek from "../../assets/marek.png";
import marekMobile from "../../assets/marek_mobile.png";
import gandi from "../../assets/gandi.png";
import gandiMobile from "../../assets/gandi_mobile.png";

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
      "LARPY terenowe i chambery (m.in. 'Pstyk!' - zwycięzca Larpowych Laurów 2024)",
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
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
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
              backgroundColor: (theme.vars || theme).palette.action.hover
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
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
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

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container
      id="features"
      sx={theme => ({
        alignItems: "center",
        width: "100%",
        backgroundColor: alpha(theme.palette.background.default, 0.5),
        boxShadow: theme.shadows[1],
        padding: theme.spacing(3),
        borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
        mt: { xs: 4, sm: 12 },
        mb: { xs: 8, sm: 16 }
      })}
    >
      <Box
        sx={{
          width: { sm: "100%" },
          textAlign: { sm: "left", md: "center" },
          mt: 2
        }}
      >
        <Typography component="h2" variant="h2" gutterBottom>
          Atrakcje konwentu
        </Typography>
      </Box>

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
                          .hover
                      },
                      borderColor: (theme.vars || theme).palette.divider,
                      backgroundColor: alpha(
                        theme.palette.background.default,
                        0.8
                      ),
                      boxShadow: theme.shadows[1]
                    }),
                    selectedItemIndex === index && {
                      backgroundColor: "action.selected"
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
                        textTransform: "none",
                        color: "text.secondary"
                      },
                      selectedItemIndex === index && {
                        color: "text.primary"
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
                borderRadius: 2
              })}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
