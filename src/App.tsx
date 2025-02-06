import CssBaseline from "@mui/material/CssBaseline";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import AppTheme from "./shared-theme/AppTheme";
import Current from "./pages/Current";
import InProgress from "./marketing-page/InProgres";
import Homepage from "./marketing-page/Homepage";
import AppAppBar from "./marketing-page/components/AppAppBar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppAppBar />}>
      <Route index element={<Homepage />} />
      <Route path="2025" element={<Current />} />
    </Route>
  )
);

function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </AppTheme>
  );
}

export default App;
