import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import Homepage from "./marketing-page/Homepage";
import AppTheme from "./shared-theme/AppTheme";
import AppAppBar from "./marketing-page/components/AppAppBar";
import Current from "./pages/Current";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppAppBar />}>
      <Route index element={<Homepage />} />
      <Route path="2025" element={<Current />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </AppTheme>
  );
}

export default App;
