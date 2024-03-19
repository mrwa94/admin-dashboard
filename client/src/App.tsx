import { useMemo } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { themeSettings } from "./theme";
import { Box } from "@mui/material";

import Navbar from "./scenes/navbar";
import Dashboard from "./scenes/dashboard";
import Predictions from "./scenes/predictions";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem ">
          <Navbar/>
         <Routes>
          <Route path="/" element={<Dashboard/>}> </Route>
          <Route path="/predictions" element = {<Predictions/>}> </Route>
          <Route path="/"> </Route>
         </Routes>
        </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
