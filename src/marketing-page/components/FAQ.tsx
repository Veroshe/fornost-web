import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, alpha } from "@mui/material/styles";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter(item => item !== panel)
      );
    };

  return (
    <Container
      id="faq"
      sx={theme => ({
        alignItems: "center",
        width: "100%",
        backgroundColor: alpha(theme.palette.background.default, 0.7),
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
          FAQ
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              component="h3"
              variant="subtitle1"
              sx={{
                typography: {
                  sm: "subtitle1",
                  xs: "subtitle2",
                  textAlign: "left"
                }
              }}
            >
              Czy jeśli kupuje bilet na LARP 'Przeprawa Królów' to muszę
              dodatkowo kupić bilet na konwent?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                maxWidth: { sm: "80%", xs: "100%" },
                textAlign: "left",
                typography: { sm: "body1", xs: "body2" }
              }}
            >
              Nie, bilet na LARP 'Przeprawa Królów' zawiera w sobie bilet na
              konwent na dni w których odbywa się LARP.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography
              component="h3"
              variant="subtitle1"
              sx={{ typography: { sm: "subtitle1", xs: "subtitle2" } }}
            >
              Can I return the product if it doesn&apos;t meet my expectations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                maxWidth: { sm: "80%", xs: "100%" },
                textAlign: "left",
                typography: { sm: "body1", xs: "body2" }
              }}
            >
              Absolutely! We offer a hassle-free return policy. If you&apos;re
              not completely satisfied, you can return the product within
              [number of days] days for a full refund or exchange.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography
              component="h3"
              sx={{ typography: { sm: "subtitle1", xs: "subtitle2" } }}
            >
              What makes your product stand out from others in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                maxWidth: { sm: "80%", xs: "100%" },
                textAlign: "left",
                typography: { sm: "body1", xs: "body2" }
              }}
            >
              Our product distinguishes itself through its adaptability,
              durability, and innovative features. We prioritize user
              satisfaction and continually strive to exceed expectations in
              every aspect.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel4")}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography
              component="h3"
              sx={{ typography: { sm: "subtitle1", xs: "subtitle2" } }}
            >
              Is there a warranty on the product, and what does it cover?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                maxWidth: { sm: "80%", xs: "100%" },
                textAlign: "left",
                typography: { sm: "body1", xs: "body2" }
              }}
            >
              Yes, our product comes with a [length of warranty] warranty. It
              covers defects in materials and workmanship. If you encounter any
              issues covered by the warranty, please contact our customer
              support for assistance.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Container>
  );
}
