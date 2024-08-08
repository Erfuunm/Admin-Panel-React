import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

return(
  <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <CssBaseline />


    </ThemeProvider>
    </ColorModeContext.Provider>
)

}

export default App;
