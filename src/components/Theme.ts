declare module "@mui/material/styles" {
  interface Palette {
    myBgc: Palette["primary"];
    myGrey: Palette["primary"];
  }
  interface PaletteOptions {
    myBgc?: PaletteOptions["primary"];
    myGrey?: PaletteOptions["primary"];
  }
}

const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#ff2500",
          },
          success: {
            main: "#00840a",
          },
          error: {
            main: "#a70000",
          },
          myGrey: {
            main: "#0009",
          },
          myBgc: {
            main: "#e6e6e6",
          },
        }
      : {
          primary: {
            main: "#ff2500",
          },
          success: {
            main: "#00840a",
          },
          error: {
            main: "#a70000",
          },
          myGrey: {
            main: "#fff9",
          },
          myBgc: {
            main: "#333333",
          },
        }),
  },
});

export { getDesignTokens };
