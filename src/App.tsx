import CssBaseline from "@mui/material/CssBaseline";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import "./App.css";
import AppTheme from "./shared-theme/AppTheme";
import Current from "./pages/Current";
import InProgress from "./marketing-page/InProgres";
import Homepage from "./marketing-page/Homepage";
import AppAppBar from "./marketing-page/components/AppAppBar";
import Info from "./marketing-page/Info";
import About from "./marketing-page/About";
import Org from "./marketing-page/Org";
import Merch from "./marketing-page/Merch";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppAppBar />}>
      <Route index element={<Homepage />} />
      <Route path="info" element={<Info />} />
      <Route path="about" element={<About />} />
      <Route path="org" element={<Org />} />
      <Route path="merch" element={<Merch />} />
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
