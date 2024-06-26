import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { getDesignTokens } from "./Theme";

export const Context = createContext({});

const ContextProvider = ({ children }: any) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
    </ThemeProvider>
  );
};
export default ContextProvider;
