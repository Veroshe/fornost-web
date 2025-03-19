import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import { styled, alpha } from "@mui/material/styles";

export default function Info() {
  return (
    <>
      <div className="back"></div>

      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 }
        }}
      >
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
            alignItems: "center"
          }}
        >
          <div>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "center" }}
              variant="h6"
            >
              Co, gdzie i kiedy
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "center",
                whiteSpace: "pre-line"
              }}
            >
              <p>26.07 - 03.08.2025</p>
              <p>
                <Link href="https://maps.app.goo.gl/h2fYT5WwmHKT4QCg7">
                  Czatachowa
                </Link>
              </p>
              Teren Fornostu (pole namiotowe) znajduje się na samym końcu jednej
              z dwóch dróg w miejscowości.
            </Typography>
          </div>
        </Stack>
      </Container>
    </>
  );
}
