import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { getDesignTokens } from "./Theme";

interface ContextTypeProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextTypeProps>({
  mode: "dark",
  setMode: () => {},
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<string>(
    localStorage.getItem("mode") || "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
    </ThemeProvider>
  );
};

export default ContextProvider;
