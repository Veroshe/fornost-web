import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/material";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import FlatwareIcon from "@mui/icons-material/Flatware";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import kufel from "../../assets/kufel.png";
import miska from "../../assets/miska.png";
import widelec from "../../assets/widelec.png";
import yzka from "../../assets/yzka.png";
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
            gap: 2
          }}
        >
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
                backgroundImage: `url(${miska})`,
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
                backgroundImage: `url(${kufel})`,
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
                backgroundImage: `url(${yzka})`,
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
                backgroundImage: `url(${widelec})`,
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
              Fornostowy merch!
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="left"
              sx={{ marginTop: 2 }}
            >
              <SportsBarIcon color="warning" fontSize="small" />
              <Typography
                variant="body1"
                sx={{
                  color: "grey.900",
                  textAlign: "left",
                  whiteSpace: "pre-line"
                }}
              >
                Kufle powracają w nowej odsłonie! 🍺 Tym razem z wieczkiem.
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
                Dodatkowo do gadżetów dołączają: drewniany zestaw złożony z
                miski, widelca oraz łyżki.
              </Typography>
            </Stack>

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
                Bez obaw! Koszulki i bluzy również wkrótce będą możliwe do
                zamówienia.
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
                Zamówienia przyjmujemy do <b>12 czerwca 2025.</b>
              </Typography>
            </Stack>

            <Link
              href="https://forms.gle/8325YPtaAJQF1Mp26"
              alignSelf={"center"}
              target="_blank"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ minWidth: "fit-content", marginTop: 2 }}
              >
                Zamów merch
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Dialog>
    </div>
  );
}
