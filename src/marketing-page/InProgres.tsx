import { Stack } from "@mui/material";
import logo from "../assets/logo.png";

const InProgress: React.FC = () => {
  return (
    <Stack justifyContent="center">
      <img src={logo} alt="Logo" style={{ width: "200px", margin: "0 auto" }} />
      <h1>Strona w przebudowie</h1>
    </Stack>
  );
};

export default InProgress;
