import * as React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import koszulka1 from "../../assets/koszulka1.png";
import bluza from "../../assets/bluza.jpg";
import koszulka2 from "../../assets/koszulka2.png";
import koszulka3 from "../../assets/koszulka4-1.png";
import Box from "@mui/material/Box";

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function ModalFornost() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
        sx={{
          position: "fixed",
          zIndex: 1300,
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Stack
          sx={{
            p: 3,
            borderColor: "hsla(220, 25%, 25%, 0.3)",
            backgroundColor: "background.default",
            alignItems: "left",
            gap: 2,
            position: "relative"
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "grey.500"
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Box
              sx={() => ({
                m: "auto",
                width: 420,
                height: 170,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                transition: "background-image 700ms linear",
                backgroundImage: `url(${koszulka1})`,
                backgroundPosition: "center"
              })}
            />
            <Box
              sx={() => ({
                m: "auto",
                width: 420,

                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",

                transition: "background-image 700ms linear",
                backgroundImage: `url(${koszulka2})`,
                backgroundPosition: "center"
              })}
            />
            <Box
              sx={() => ({
                m: "auto",
                width: 420,

                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",

                transition: "background-image 700ms linear",
                backgroundImage: `url(${koszulka3})`,
                backgroundPosition: "center"
              })}
            />
            <Box
              sx={() => ({
                m: "auto",
                width: 420,

                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",

                transition: "background-image 700ms linear",
                backgroundImage: `url(${bluza})`,
                backgroundPosition: "center"
              })}
            />
          </Stack>

          <Stack>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left" }}
              variant="h6"
            >
              Fornostowe koszulki i bluzy
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <CheckroomIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Kochani Fornostowicze! Rzeczy na wyjazd nie mieszczą się w
                jednej walizce? Przydała by się jeszcze jedna koszulka ale nie
                masz siły po raz czwarty układać tetrisa ze szpeju larpowego??
                Mamy dla was dobre wieści - nasza ekipa przygotowała dla was jak
                co roku fornostowe koszulki, z odbiorem osobistym na konwencie!
                Zachęcamy do składania zamówień, zarówno na koszulki jak i inne
                dostępne gadżety.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <AccessTimeIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Zamówienia przyjmujemy do <b>30 czerwca 2025.</b>
              </Typography>
            </Stack>

            <Link
              href="https://docs.google.com/forms/d/17BtvTPvXwUCWg3KCT-a32MjeW_3cj7VBDn7P6scI6rQ"
              alignSelf={"center"}
              target="_blank"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ minWidth: "fit-content", marginTop: 2 }}
              >
                Zamów koszulki i bluzy
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Dialog>
    </div>
  );
}
